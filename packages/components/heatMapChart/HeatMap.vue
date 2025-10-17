<!--
 * @Author: wyk
 * @Date: 2024-09-14 15:33:01
 * @LastEditTime: 2024-09-24 09:39:18
 * @Description:
-->
<template>
    <div>
        <div id="heatmap-box">
            <!-- <div class="header">
               <h1>3D热力图 - Vue 3 版本</h1>
                <p class="subtitle">长方体紧密排列，数值差异更大，渐变速度根据数值调整</p>
            </div> -->

            <!-- <div class="controls">
               <div class="control-group">
                    <h3>数据控制</h3>
                    <button @click="createHeatmap">生成新数据</button>
                    <button @click="smoothData">平滑数据</button>
                </div>
                <div class="control-group">
                    <h3>视图控制</h3>
                    <button id="toggleGrid">切换网格</button>
                    <button id="toggleAxes">切换坐标轴</button>
                    <button id="resetView">重置视图</button>
                </div>
                <div class="control-group">
                    <h3>显示模式</h3>
                    <button @click="toggleWireframe">切换线框模式</button>
                    <button @click="toggleAnimation">
                        {{ isAnimating ? "停止动画" : "开始动画" }}
                    </button>
                </div> 
            </div>-->

            <!-- <div class="legend">
               <div class="color-bar"></div>
                <div class="labels">
                    <span class="label">1 (淡蓝色)</span>
                    <span class="label">5 (青色)</span>
                    <span class="label">10 (红色)</span>
                </div> 
            </div>-->
            <!-- 
            <div class="info-panel">
               <h3>数据信息</h3>
                <p>
                    当前显示 <span class="highlight">{{ cellCount }}</span> 个数据点
                </p>
                <p>
                    最大值: <span class="highlight">{{ maxValue }}</span>
                </p>
                <p>
                    最小值: <span class="highlight">{{ minValue }}</span>
                </p>
                <p class="data-display" v-html="dataDisplay"></p> 
            </div>
-->
            <div
                v-if="tooltip.show"
                class="tooltip"
                :style="{
                    left: tooltip.x + 'px',
                    top: tooltip.y + 'px',
                }"
                v-html="tooltip.content" />
            <div id="three-container"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineOptions({
    name: "Wy-HeatMap",
});
import * as THREE from "three";

const isAnimating = ref(false);

// Three.js 相关变量
let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let controls: any;
let heatmapGroup: THREE.Group;
let raycaster: THREE.Raycaster;
let mouse: THREE.Vector2;
let dataGrid: number[][] = [];
let animationId: number | null = null;

// 热力图参数
const gridSize = 50;
const baseSize = 0.1;
const spacing = 0;
// 组件挂载时初始化
onMounted(async () => {
    const { OrbitControls } = await import("three/examples/jsm/controls/OrbitControls");
    initThree();
    // 在 initThree() 之后创建 controls，因为它依赖 renderer.domElement
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
});
// 响应式数据
const cellCount = ref(900);
const maxValue = ref<string>("0");
const minValue = ref<string>("0");
const dataDisplay = ref("悬停在方块上查看详细信息");
const tooltip = ref({
    show: false,
    x: 0,
    y: 0,
    content: "",
});

const generateDataGrid = (size: number) => {
    const grid = [];
    // 定义突起的位置和高度
    const peakX = 10; // 突起的 X 坐标
    const peakY = 10; // 突起的 Y 坐标
    const peakValue = 150; // 突起的高度（最大值）
    const baseValue = 0; // 其他所有位置的值（基础值）

    for (let i = 0; i < size; i++) {
        const row = [];
        for (let j = 0; j < size; j++) {
            if (i === peakX && j === peakY) {
                // 在突起位置设置高值
                row.push(peakValue);
            } else {
                // 其他位置都使用基础值
                row.push(baseValue);
            }
        }
        grid.push(row);
    }

    return grid;
};

// 更新数据信息显示
const createCube = (x: number, z: number, value: number, minVal: number, maxVal: number) => {
    // Step 1: 归一化数据值到 [0, 1] 范围（用于判断柱子属于“矮/中/高”）
    const norm = (value - minVal) / (maxVal - minVal);

    // Step 2: 使用 γ 校正调整视觉感知（使小值变化更明显）
    const t = Math.pow(norm, 0.7); // γ 校正

    // Step 3: 计算立方体的高度
    const height = 0.1 + t * 3;

    // Step 4: 创建立方体几何体
    const geometry = new THREE.BoxGeometry(baseSize, height, baseSize);
    const pos = geometry.attributes.position; // 获取顶点位置数据

    // 定义颜色
    const purple = new THREE.Color(0x9b30ff);
    const cyan = new THREE.Color(0x00ffff);
    const yellow = new THREE.Color(0xffff00);
    const red = new THREE.Color(0xff0000);

    // Step 5: 为每个顶点设置颜色（根据其在柱体中的垂直位置）
    const colorsArr = [];
    for (let i = 0; i < pos.count; i++) {
        const y = pos.getY(i); // 当前顶点的 Y 坐标（局部坐标系）
        const localNorm = (y + height / 2) / height; // 映射为 [0,1]：0=底部，1=顶部

        let color = new THREE.Color();

        if (norm < 0.3) {
            // 矮柱子：只显示 紫 → 青
            color.lerpColors(purple, cyan, localNorm);
        } else if (norm < 0.6) {
            // 中等柱子：紫 → 青 → 黄
            if (localNorm < 0.5) {
                color.lerpColors(purple, cyan, localNorm * 2);
            } else {
                color.lerpColors(cyan, yellow, (localNorm - 0.5) * 2);
            }
        } else {
            // 高柱子（包括最高）：紫 → 青 → 黄 → 红
            if (localNorm < 1 / 3) {
                color.lerpColors(purple, cyan, localNorm * 3);
            } else if (localNorm < 2 / 3) {
                color.lerpColors(cyan, yellow, (localNorm - 1 / 3) * 3);
            } else {
                color.lerpColors(yellow, red, (localNorm - 2 / 3) * 3);
            }
        }

        colorsArr.push(color.r, color.g, color.b);
    }

    // Step 6: 设置顶点颜色属性
    const colors = new Float32Array(colorsArr);
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    // Step 7: 创建材质
    const material = new THREE.MeshBasicMaterial({ vertexColors: true });

    // Step 8: 创建网格对象
    const cube = new THREE.Mesh(geometry, material);

    // Step 9: 存储原始数据
    cube.userData = { value, x, z };

    // Step 10: 设置位置（底部对齐）
    cube.position.set((x - gridSize / 2) * baseSize, height / 2, (z - gridSize / 2) * baseSize);

    return cube;
};
const updateDataInfo = () => {
    let min = Infinity;
    let max = -Infinity;
    let count = 0;

    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const value = dataGrid[i][j];
            if (value > 0.1) {
                count++;
                if (value < min) min = value;
                if (value > max) max = value;
            }
        }
    }

    // 如果没有找到有效的数据点，则设置默认值
    if (count === 0) {
        min = 0;
        max = 0;
    }

    cellCount.value = count;
    minValue.value = min.toFixed(2);
    maxValue.value = max.toFixed(2);
};

const createHeatmap = () => {
    // 清除旧的heatmap
    while (heatmapGroup.children.length > 0) {
        heatmapGroup.remove(heatmapGroup.children[0]);
    }

    // 生成新的数据网格
    dataGrid = generateDataGrid(gridSize);
    updateDataInfo();

    let minValNum = Infinity;
    let maxValNum = -Infinity;

    // 直接寻找minValNum和maxValNum
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const value = dataGrid[i][j];
            if (value < minValNum) minValNum = value;
            if (value > maxValNum) maxValNum = value;
        }
    }

    // 使用minValNum和maxValNum创建柱子
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const value = dataGrid[i][j];
            const cube = createCube(i, j, value, minValNum, maxValNum /*, q1, q2, q3 如果需要 */);
            heatmapGroup.add(cube);
        }
    }
};

// 动画函数
const animateData = () => {
    // 为数据添加轻微波动
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            dataGrid[i][j] += (Math.random() - 0.5) * 0.2;
            dataGrid[i][j] = Math.min(15, Math.max(0, dataGrid[i][j]));
        }
    }

    // 更新热力图
    heatmapGroup.children.forEach((object: THREE.Object3D) => {
        const cube = object as THREE.Mesh<THREE.BoxGeometry, THREE.MeshLambertMaterial>;
        const x = cube.userData.x;
        const z = cube.userData.z;
        const value = dataGrid[x][z];

        // 更新方块高度
        const height = 0.1 + (value / 15) * 3;

        // 更新几何体
        cube.geometry.dispose();
        cube.geometry = new THREE.BoxGeometry(baseSize, height, baseSize);

        // 更新位置
        cube.position.y = height / 2;

        // 更新颜色
        cube.userData.value = value;
    });

    updateDataInfo();
};

// 鼠标交互
const onMouseMove = (event: MouseEvent) => {
    const container = document.getElementById("three-container");
    if (!container) return;

    const rect = container.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    mouse.x = x * 2 - 1;
    mouse.y = -(y * 2 - 1);

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(heatmapGroup.children);

    if (intersects.length > 0) {
        const cube = intersects[0].object;
        const value = cube.userData.value;
        const cx = cube.userData.x;
        const cz = cube.userData.z;

        // 使用相对容器的坐标而不是全局视口坐标
        tooltip.value = {
            show: true,
            x: event.clientX - rect.left + 10,
            y: event.clientY - rect.top - 30,
            content: `数值: ${value.toFixed(2)}<br>位置: (${cx}, ${cz})`,
        };
    } else {
        tooltip.value = { ...tooltip.value, show: false };
    }
};

// 主动画循环
const animate = () => {
    animationId = requestAnimationFrame(animate);

    if (isAnimating.value) {
        animateData();
    }

    // controls.update();
    renderer.render(scene, camera);
};

// 响应窗口大小变化
const onWindowResize = () => {
    // camera.aspect = window.innerWidth / window.innerHeight;
    // camera.updateProjectionMatrix();
    // renderer.setSize(window.innerWidth, window.innerHeight);
};

// 切换线框模式
const toggleWireframe = () => {
    heatmapGroup.children.forEach((object: THREE.Object3D) => {
        const cube = object as THREE.Mesh<THREE.BoxGeometry, THREE.MeshLambertMaterial>;
        cube.material.wireframe = !cube.material.wireframe;
    });
};

// 切换动画
const toggleAnimation = () => {
    isAnimating.value = !isAnimating.value;
};

// 初始化 Three.js
const initThree = () => {
    // 初始化场景、相机和渲染器
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0d1b2a);

    // camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera = new THREE.PerspectiveCamera(75, 600 / 500, 0.1, 1000);
    camera.position.set(5, 5, 5);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    // renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setSize(600, 500);
    renderer.shadowMap.enabled = true;

    const container = document.getElementById("three-container");
    if (container) {
        container.appendChild(renderer.domElement);
    } else {
        console.error("无法找到ID为'three-container'的元素");
        return;
    }

    // 添加轨道控制器
    // controls = new OrbitControls(camera, renderer.domElement);
    // controls.enableDamping = true;
    // controls.dampingFactor = 0.05;

    // 添加光源
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 20, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    // 存储热力图对象和数据
    heatmapGroup = new THREE.Group();
    scene.add(heatmapGroup);

    // 添加网格辅助
    const gridHelper = new THREE.GridHelper(gridSize, gridSize, 0x444444, 0x222222);
    gridHelper.position.y = -0.05;
    scene.add(gridHelper);

    // 添加坐标轴辅助
    const axesHelper = new THREE.AxesHelper(5);
    scene.add(axesHelper);

    // 创建热力图
    createHeatmap();

    // 鼠标交互
    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();

    // 添加事件监听器
    window.addEventListener("mousemove", onMouseMove, false);
    window.addEventListener("resize", onWindowResize);

    // 启动动画循环
    animate();
};

// 组件卸载时清理
onUnmounted(() => {
    if (animationId) {
        cancelAnimationFrame(animationId);
    }
    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("resize", onWindowResize);

    if (renderer) {
        renderer.dispose();
    }
});
</script>
<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

// body {
//     font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
//     background: linear-gradient(135deg, #1a2a3a, #0d1b2a);
//     color: #e0e0e0;
//     overflow: hidden;
//     height: 100vh;
// }
#heatmap-box {
    position: relative;

    // width: 100%;
    // height: 100%;
    width: 600px;
    height: 500px;
}
.header {
    position: absolute;
    top: 20px;
    left: 0;
    z-index: 100;
    width: 100%;
    text-align: center;
}
h1 {
    margin-bottom: 10px;
    font-size: 2.5rem;
    background: linear-gradient(to right, #87ceeb, #0ff, #f00);
    background-clip: text;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 50%);
    -webkit-text-fill-color: transparent;
}
.subtitle {
    margin: 0 auto;
    max-width: 600px;
    font-size: 1.2rem;
    opacity: 0.8;
}
.controls {
    position: absolute;
    top: 150px;
    left: 20px;
    z-index: 100;
    padding: 15px;
    border-radius: 10px;
    background: rgba(30, 40, 50, 70%);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 30%);
    backdrop-filter: blur(5px);
}
.control-group {
    margin-bottom: 15px;
}
.control-group h3 {
    margin-bottom: 8px;
    color: #87ceeb;
}
button {
    margin: 5px;
    padding: 8px 15px;
    border: none;
    border-radius: 5px;
    color: white;
    background: linear-gradient(to right, #1e3c72, #2a5298);
    transition: all 0.3s;
    cursor: pointer;
}
button:hover {
    background: linear-gradient(to right, #2a5298, #3a62a8);
    transform: translateY(-2px);
}
.legend {
    position: absolute;
    right: 30px;
    bottom: 30px;
    z-index: 100;
    padding: 15px;
    border-radius: 10px;
    background: rgba(30, 40, 50, 70%);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 30%);
    backdrop-filter: blur(5px);
}
.color-bar {
    margin-bottom: 10px;
    width: 300px;
    height: 20px;
    border-radius: 10px;
    background: linear-gradient(to right, #87ceeb, #0ff, #f00);
}
.labels {
    display: flex;
    justify-content: space-between;
    width: 300px;
}
.label {
    font-size: 0.9rem;
}
.info-panel {
    position: absolute;
    bottom: 30px;
    left: 20px;
    z-index: 100;
    padding: 15px;
    max-width: 300px;
    border-radius: 10px;
    background: rgba(217, 219, 221, 70%);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 30%);
    backdrop-filter: blur(5px);
}
.info-panel h3 {
    margin-bottom: 10px;
    color: #0ff;
}
.data-display {
    margin-top: 10px;
    font-size: 1.1rem;
}
.highlight {
    font-weight: bold;
    color: #f1612c;
}
.tooltip {
    position: absolute;
    padding: 8px 12px;
    font-size: 14px;
    border-radius: 6px;
    color: #fff;
    background: rgba(0, 0, 0, 80%);
    transition: opacity 0.1s;
    pointer-events: none;
}
#three-container {
    // width: 100%;
    // height: 100%;

    width: 600px;
    height: 500px;
}
</style>
