<!--
    * @Author: wyk
    * @Date: 2025-10-20
    * @Description: 3D 热力图封装组件 (已移除 gridSize，基于 data 动态生成)
    -->
<template>
    <div class="heatmap-wrapper" :style="{ width: width + 'px', height: height + 'px' }">
        <div v-if="tooltip.show" class="tooltip" :style="{ left: tooltip.x + 'px', top: tooltip.y + 'px' }" v-html="tooltip.content" />
        <div ref="containerRef" class="three-container"></div>
    </div>
</template>

<script setup lang="ts">
import * as THREE from "three";

defineOptions({ name: "JBHeatMap3D" });

// 在其他 ref 定义之后添加
// const rotationSpeed = ref(0.01); // 控制旋转速度
const currentAngle = ref(0); // 当前的角度

// ========== Props ==========
const props = defineProps({
    data: {
        type: Array as () => number[][],
        default: () => [],
    },
    width: { type: Number, default: 600 },
    height: { type: Number, default: 500 },
    baseSize: { type: Number, default: 0.1 },
    maxHeight: { type: Number, default: 3 },
    enableOrbit: { type: Boolean, default: true },
    backgroundColor: { type: String, default: "#0d1b2a" },
    showGridHelper: { type: Boolean, default: true },
    showAxesHelper: { type: Boolean, default: true },
    isStandardColor: { type: Boolean, default: true },
    rotateAnimation: { type: Boolean, default: false }, // 是否启用旋转动画
    rotationSpeed: { type: Number, default: 0.01 }, // 旋转速度，可由外部传入
    gradientColors: {
        type: Array as () => string[],
        default: () => ["#9b30ff", "#00ffff", "#ffff00", "#ff0000"],
    },
    autoAnimate: { type: Boolean, default: false },
    cameraPosition: {
        type: Object as () => { x: number; y: number; z: number },
        default: () => ({ x: 5, y: 5, z: 5 }),
    },
});

// ========== Refs & State ==========
const containerRef = ref<HTMLDivElement | null>(null);
const tooltip = ref({ show: false, x: 0, y: 0, content: "" });
const isAnimating = ref(props.autoAnimate);

let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let controls: any = null;
let heatmapGroup: THREE.Group;
let raycaster: THREE.Raycaster;
let mouse: THREE.Vector2;
let animationId: number | null = null;
let dataGrid: number[][] = [];
let rows = 0; // 动态行数
let cols = 0; // 动态列数

// ========== 初始化 ==========
onMounted(async () => {
    const { OrbitControls } = await import("three/examples/jsm/controls/OrbitControls.js");
    // 在 initThree() 之前创建 controls，因为它依赖 renderer.domElement
    initThree();
    if (props.enableOrbit) {
        controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
    }
    animate();
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", onResize);
    // 在 onMounted 中添加
    if (containerRef.value) {
        containerRef.value.addEventListener("mouseleave", () => {
            tooltip.value.show = false;
        });
    }
});

onUnmounted(() => {
    if (animationId) cancelAnimationFrame(animationId);
    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("resize", onResize);
    renderer.dispose();
});

// ========== Three.js 初始化 ==========
function initThree() {
    const { backgroundColor, showGridHelper, showAxesHelper, cameraPosition } = props;

    scene = new THREE.Scene();
    scene.background = new THREE.Color(backgroundColor);

    camera = new THREE.PerspectiveCamera(75, props.width / props.height, 0.1, 1000);
    camera.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(props.width, props.height);
    renderer.shadowMap.enabled = true;

    if (containerRef.value) containerRef.value.appendChild(renderer.domElement);

    // 轨道控制器
    if (props.enableOrbit && controls) {
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
    }

    // 光源
    scene.add(new THREE.AmbientLight(0xffffff, 0.6));
    const light = new THREE.DirectionalLight(0xffffff, 0.8);
    light.position.set(10, 20, 5);
    scene.add(light);

    // 热力图组
    heatmapGroup = new THREE.Group();
    scene.add(heatmapGroup);

    // 使用动态尺寸创建网格辅助线
    if (showGridHelper) {
        // 估算一个合理的网格尺寸
        const gridSize = Math.max(rows, cols) * props.baseSize * 1.2;
        const gridHelper = new THREE.GridHelper(gridSize, Math.max(rows, cols), 0x444444, 0x222222);
        scene.add(gridHelper);
    }
    if (showAxesHelper) {
        const axesHelper = new THREE.AxesHelper(Math.max(rows, cols) * props.baseSize * 0.6);
        scene.add(axesHelper);
    }

    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();

    createHeatmap();
}

// ========== 生成数据 & 创建立方体 ==========
function generateData(rowCount: number = 10, colCount: number = 10) {
    const grid = Array.from({ length: rowCount }, () => Array.from({ length: colCount }, () => Math.random() * 15 + 1));
    return grid;
}
const allValues: number[] = [];

// function getColorStops(value: number) {
//     const index = allValues.indexOf(value);
//     const ratio = index / allValues.length; // 0 ~ 1

//     if (ratio < 0.25)
//         return ["#9b30ff"]; // 最短柱子：蓝色
//     else if (ratio < 0.5)
//         return ["#9b30ff", "#00ffff"]; // 青色
//     else if (ratio < 0.75)
//         return ["#9b30ff", "#00ffff", "#ffff00"]; // 黄
//     else return ["#9b30ff", "#00ffff", "#ffff00", "#ff0000"]; // 红
// }

// 使用传统渐变色
function createCube(x: number, z: number, value: number, min: number, max: number, allValues: number[]) {
    const height = 0.1 + ((value - min) / (max - min)) * props.maxHeight;
    // 增加高度方向的分段数，以便有更多的顶点来表现渐变
    const geometry = new THREE.BoxGeometry(props.baseSize, height, props.baseSize, 1, 8, 1);

    const positions = geometry.attributes.position as THREE.BufferAttribute;
    const normals = geometry.attributes.normal as THREE.BufferAttribute;
    const colors: number[] = [];

    // 计算值在[min, max]范围内的归一化比例 (0到1)
    const normalizedValue = (value - min) / (max - min);

    // 定义完整的颜色渐变序列
    const fullGradient = [
        new THREE.Color(0x00008b), // 深蓝
        new THREE.Color(0x00ffff), // 青
        new THREE.Color(0xffff00), // 黄
        new THREE.Color(0xff0000), // 红
    ];

    // 根据实际值的大小决定使用多少段渐变
    let usedColors: THREE.Color[] = [];

    if (normalizedValue >= 0.75) {
        // 最高值：使用完整的4段渐变
        usedColors = [...fullGradient];
    } else if (normalizedValue >= 0.5) {
        // 较高值：使用前3段渐变
        usedColors = fullGradient.slice(0, 3);
    } else if (normalizedValue >= 0.25) {
        // 中等值：使用前2段渐变
        usedColors = fullGradient.slice(0, 2);
    } else {
        // 低值：只使用第1段颜色
        usedColors = fullGradient.slice(0, 1);
    }

    // 为每个顶点设置颜色
    for (let i = 0; i < positions.count; i++) {
        const y = positions.getY(i);
        const ny = normals.getY(i);
        let color = new THREE.Color();

        // 计算顶点在柱体高度上的位置 (0到1)
        const t = (y + height / 2) / height;

        if (ny > 0.5) {
            // 顶面：使用对应等级的最高颜色
            color.copy(usedColors[usedColors.length - 1]);
        } else {
            // 侧面：根据使用的颜色数量进行渐变
            if (usedColors.length === 4) {
                // 四段渐变：深蓝 → 青 → 黄 → 红
                if (t < 0.25) {
                    color.lerpColors(usedColors[0], usedColors[1], t / 0.25);
                } else if (t < 0.5) {
                    color.lerpColors(usedColors[1], usedColors[2], (t - 0.25) / 0.25);
                } else if (t < 0.75) {
                    color.lerpColors(usedColors[2], usedColors[3], (t - 0.5) / 0.25);
                } else {
                    color.copy(usedColors[3]);
                }
            } else if (usedColors.length === 3) {
                // 三段渐变：深蓝 → 青 → 黄
                if (t < 0.33) {
                    color.lerpColors(usedColors[0], usedColors[1], t / 0.33);
                } else if (t < 0.66) {
                    color.lerpColors(usedColors[1], usedColors[2], (t - 0.33) / 0.33);
                } else {
                    color.copy(usedColors[2]);
                }
            } else if (usedColors.length === 2) {
                // 两段渐变：深蓝 → 青
                if (t < 0.5) {
                    color.lerpColors(usedColors[0], usedColors[1], t / 0.5);
                } else {
                    color.copy(usedColors[1]);
                }
            } else {
                // 单色：深蓝
                color.copy(usedColors[0]);
            }
        }

        colors.push(color.r, color.g, color.b);
    }

    geometry.setAttribute("color", new THREE.BufferAttribute(new Float32Array(colors), 3));
    const material = new THREE.MeshBasicMaterial({ vertexColors: true });
    const cube = new THREE.Mesh(geometry, material);

    cube.position.set((x - (rows - 1) / 2) * props.baseSize, height / 2, (z - (cols - 1) / 2) * props.baseSize);
    cube.userData = { value, x, z };

    return cube;
}
// 使用十阶段渐变色
function createCube2(x: number, z: number, value: number, min: number, max: number, allValues: number[]) {
    const height = 0.1 + ((value - min) / (max - min)) * props.maxHeight;
    const geometry = new THREE.BoxGeometry(props.baseSize, height, props.baseSize, 1, 8, 1);

    const positions = geometry.attributes.position as THREE.BufferAttribute;
    const normals = geometry.attributes.normal as THREE.BufferAttribute;
    const colors: number[] = [];

    // 计算值在[min, max]范围内的归一化比例 (0到1)
    const normalizedValue = (value - min) / (max - min);

    // 定义完整的十段颜色渐变序列
    const fullGradient = [
        new THREE.Color(0x08315f), // 深蓝色
        new THREE.Color(0x4588bb), // 蓝色
        new THREE.Color(0x85bee3), // 浅蓝色
        new THREE.Color(0xbedcf4), // 更浅的蓝色
        new THREE.Color(0xe4d7dc), // 淡紫色
        new THREE.Color(0xfcdfda), // 淡粉色
        new THREE.Color(0xf9b6a2), // 浅橙色
        new THREE.Color(0xf97860), // 橙色
        new THREE.Color(0xc81626), // 红色
        new THREE.Color(0xaf000f), // 深红色
    ];

    // 根据归一化值决定使用多少段渐变
    let usedColors: THREE.Color[] = [];
    let segmentCount = 0;

    if (normalizedValue >= 0.9) {
        segmentCount = 10;
        usedColors = fullGradient.slice(0, 10);
    } else if (normalizedValue >= 0.8) {
        segmentCount = 9;
        usedColors = fullGradient.slice(0, 9);
    } else if (normalizedValue >= 0.7) {
        segmentCount = 8;
        usedColors = fullGradient.slice(0, 8);
    } else if (normalizedValue >= 0.6) {
        segmentCount = 7;
        usedColors = fullGradient.slice(0, 7);
    } else if (normalizedValue >= 0.5) {
        segmentCount = 6;
        usedColors = fullGradient.slice(0, 6);
    } else if (normalizedValue >= 0.4) {
        segmentCount = 5;
        usedColors = fullGradient.slice(0, 5);
    } else if (normalizedValue >= 0.3) {
        segmentCount = 4;
        usedColors = fullGradient.slice(0, 4);
    } else if (normalizedValue >= 0.2) {
        segmentCount = 3;
        usedColors = fullGradient.slice(0, 3);
    } else if (normalizedValue >= 0.1) {
        segmentCount = 2;
        usedColors = fullGradient.slice(0, 2);
    } else {
        segmentCount = 1;
        usedColors = fullGradient.slice(0, 1);
    }

    // 为每个顶点设置颜色
    for (let i = 0; i < positions.count; i++) {
        const y = positions.getY(i);
        const ny = normals.getY(i);
        let color = new THREE.Color();

        // 计算顶点在柱体高度上的位置 (0到1)
        const t = Math.max(0, Math.min(1, (y + height / 2) / height)); // 确保t在0-1范围内

        if (ny > 0.5) {
            // 顶面：使用对应等级的最高颜色
            color.copy(usedColors[usedColors.length - 1]);
        } else {
            // 侧面：根据使用的颜色数量进行渐变
            if (segmentCount === 1) {
                // 单色：深蓝色
                color.copy(usedColors[0]);
            } else {
                // 多段渐变 - 修复索引计算
                const segmentLength = 1.0 / (segmentCount - 1);
                let segmentIndex = Math.floor(t / segmentLength);

                // 确保索引不越界
                segmentIndex = Math.min(segmentIndex, segmentCount - 2);
                segmentIndex = Math.max(0, segmentIndex); // 确保不小于0

                const localT = (t - segmentIndex * segmentLength) / segmentLength;

                // 确保颜色索引有效
                if (segmentIndex >= 0 && segmentIndex + 1 < usedColors.length) {
                    color.lerpColors(usedColors[segmentIndex], usedColors[segmentIndex + 1], localT);
                } else {
                    // 如果索引无效，使用最后一个颜色
                    color.copy(usedColors[usedColors.length - 1]);
                }
            }
        }

        colors.push(color.r, color.g, color.b);
    }

    geometry.setAttribute("color", new THREE.BufferAttribute(new Float32Array(colors), 3));
    const material = new THREE.MeshBasicMaterial({ vertexColors: true });
    const cube = new THREE.Mesh(geometry, material);

    cube.position.set((x - (rows - 1) / 2) * props.baseSize, height / 2, (z - (cols - 1) / 2) * props.baseSize);
    cube.userData = { value, x, z };

    return cube;
}

// 👉 全局变量声明
let instancedMesh: THREE.InstancedMesh | null = null;
const dummy = new THREE.Object3D(); // 用于临时变换计算

// 材质和几何体缓存（可选）
let heatmapGeometry: THREE.BoxGeometry | null = null;
let heatmapMaterial: THREE.MeshBasicMaterial | THREE.MeshStandardMaterial | null = null;

// 颜色映射函数（示例：蓝 -> 黄 -> 红）
// function getColor(value: number, min: number, max: number): THREE.Color {
//     const t = max - min === 0 ? 0.5 : (value - min) / (max - min);
//     if (t < 0.5) {
//         // 蓝 -> 黄
//         return new THREE.Color().lerpColors(new THREE.Color(0x0000ff), new THREE.Color(0xffff00), t * 2);
//     } else {
//         // 黄 -> 红
//         return new THREE.Color().lerpColors(new THREE.Color(0xffff00), new THREE.Color(0xff0000), (t - 0.5) * 2);
//     }
// }

let gridHelper: THREE.GridHelper | null = null;

// function updateGridHelper() {
//     const { showGridHelper = false } = props;
//     const baseSize = props.baseSize || 1;
//     const size = Math.max(rows, cols) * baseSize * 1.2;
//     const divisions = Math.max(rows, cols);

//     if (gridHelper) {
//         scene.remove(gridHelper);
//     }

//     if (showGridHelper) {
//         gridHelper = new THREE.GridHelper(size, divisions, 0x444444, 0x222222);
//         gridHelper.position.y = -0.01; // 稍微下移避免 z-fighting
//         scene.add(gridHelper);
//     }
// }

function disposeHeatmap() {
    if (instancedMesh) {
        instancedMesh.geometry.dispose();
        (instancedMesh.material as THREE.Material).dispose();
        heatmapGroup.remove(instancedMesh);
        instancedMesh = null;
    } else {
        // fallback：清理普通 mesh
        const { children } = heatmapGroup;
        children.forEach((child) => {
            if (child instanceof THREE.Mesh) {
                child.geometry.dispose();
                const materials = Array.isArray(child.material) ? child.material : [child.material];
                materials.forEach((mat) => mat.dispose());
            }
        });
        heatmapGroup.clear();
    }
}

function createHeatmap() {
    // 先释放旧的几何体和材质资源
    disposeHeatmap();

    // 判断 props.data 是否为二维数组且维度合法
    const hasValidExternalData = Array.isArray(props.data) && props.data.length > 0 && props.data.every((row) => Array.isArray(row));

    if (hasValidExternalData) {
        // dataGrid = props.data as number[][];
        dataGrid = props.data.map((row) => [...row]); //  深拷贝
    } else {
        console.log("数据不合法，使用默认数据");
        dataGrid = generateData(); // 使用默认 10x10
    }

    // 清除旧的子对象
    heatmapGroup.clear();

    // === 动态计算行数和列数 ===
    rows = dataGrid.length;
    cols = dataGrid[0]?.length || 0;

    if (rows === 0 || cols === 0) {
        console.warn("数据为空，无法创建热力图");
        return;
    }

    // 计算 min / max 并收集所有值
    let min = Infinity;
    let max = -Infinity;
    const allValues: number[] = [];

    for (let i = 0; i < rows; i++) {
        const row = dataGrid[i];
        if (!Array.isArray(row)) continue;
        for (let j = 0; j < cols; j++) {
            const v = row[j];
            if (typeof v !== "number") continue;
            allValues.push(v);
            if (v < min) min = v;
            if (v > max) max = v;
        }
    }

    if (min === Infinity) min = 0;
    if (max === -Infinity) max = 0;

    // 对所有值排序（从高到低）
    allValues.sort((a, b) => b - a);

    // 创建柱体
    for (let i = 0; i < rows; i++) {
        const row = dataGrid[i];
        if (!Array.isArray(row)) continue;
        for (let j = 0; j < cols; j++) {
            const v = row[j];
            const val = typeof v === "number" ? v : 0;
            let cube = null;
            if (props.isStandardColor) {
                cube = createCube2(i, j, val, min, max, allValues);
            } else {
                cube = createCube2(i, j, val, min, max, allValues);
            }
            heatmapGroup.add(cube);
        }
    }
}
function animate() {
    animationId = requestAnimationFrame(animate);
    // if (isAnimating.value) animateData();
    // 根据 rotateAnimation 的值决定是否旋转 heatmapGroup
    // if (props.rotateAnimation) {
    //     currentAngle.value += rotationSpeed.value;
    //     heatmapGroup.rotation.y = currentAngle.value; // 围绕Y轴旋转
    // }
    // 根据 rotateAnimation 的值决定是否旋转 heatmapGroup
    if (props.rotateAnimation) {
        currentAngle.value += props.rotationSpeed; // 使用 props 控制速度
        heatmapGroup.rotation.y = currentAngle.value;
    }
    if (controls) controls.update();
    renderer.render(scene, camera);
}

function animateData() {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (dataGrid[i] && typeof dataGrid[i][j] === "number") {
                dataGrid[i][j] += (Math.random() - 0.5) * 0.3;
                dataGrid[i][j] = Math.min(20, Math.max(1, dataGrid[i][j]));
            }
        }
    }
}
let raycasterTimeout: number | null = null;

// ========== 鼠标交互 ==========
function onMouseMove(event: MouseEvent) {
    if (!containerRef.value) return;

    const rect = containerRef.value.getBoundingClientRect();

    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) {
        tooltip.value.show = false;
        return;
    }

    // 防抖处理
    if (raycasterTimeout) {
        cancelAnimationFrame(raycasterTimeout);
    }

    raycasterTimeout = requestAnimationFrame(() => {
        mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(heatmapGroup.children);

        if (intersects.length) {
            const cube = intersects[0].object;
            const { value, x, z } = cube.userData;
            tooltip.value = {
                show: true,
                x: event.clientX - rect.left + 10,
                y: event.clientY - rect.top - 30,
                content: `数值: ${value.toFixed(2)}<br>位置: (${x}, ${z})`,
            };
        } else {
            tooltip.value.show = false;
        }
    });
}

function onResize() {
    camera.aspect = props.width / props.height;
    camera.updateProjectionMatrix();
    renderer.setSize(props.width, props.height);
}

// ========== 暴露方法 ==========
defineExpose({
    refresh: createHeatmap,
    toggleAnimation: () => (isAnimating.value = !isAnimating.value),
});
</script>

<style scoped lang="scss">
.heatmap-wrapper {
    position: relative;
}
.three-container {
    width: 100%;
    height: 100%;
}
.tooltip {
    position: absolute;
    z-index: 10;
    padding: 8px 12px;
    font-size: 14px;
    border-radius: 6px;
    color: #fff;
    background: rgba(0, 0, 0, 80%);
    pointer-events: none;
}
</style>
