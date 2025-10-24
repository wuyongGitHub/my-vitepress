“
<template>
    <div class="heatmap-wrapper" :style="{ width: width + 'px', height: height + 'px' }">
        <div v-if="tooltip.show" class="tooltip" :style="{ left: tooltip.x + 'px', top: tooltip.y + 'px' }" v-html="tooltip.content" />
        <div ref="containerRef" class="three-container"></div>
    </div>
</template>

<script setup lang="ts">
import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

defineOptions({ name: "JBHeatMap3DUV" });

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
    gradientColors: {
        type: Array as () => string[],
        default: () => ["#00008b", "#00ffff", "#ffff00", "#ff0000"],
    },
    autoAnimate: { type: Boolean, default: false },
    cameraPosition: {
        type: Object as () => { x: number; y: number; z: number },
        default: () => ({ x: 8, y: 8, z: 8 }),
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

// InstancedMesh 相关
let instancedMesh: THREE.InstancedMesh | null = null;
const instanceData: { value: number; x: number; z: number; normalizedValue: number }[] = [];
let rows = 0;
let cols = 0;
let dataMin = 0;
let dataMax = 1;

// 着色器相关
let shaderMaterial: THREE.ShaderMaterial;

// ========== 初始化 ==========
onMounted(async () => {
    initThree();
    const { OrbitControls } = await import("three/examples/jsm/controls/OrbitControls.js");
    if (props.enableOrbit) {
        controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
    }

    animate();
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", onResize);

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

    // 清理资源
    if (instancedMesh) {
        instancedMesh.geometry.dispose();
        (instancedMesh.material as THREE.Material).dispose();
    }
    if (shaderMaterial) shaderMaterial.dispose();
    renderer?.dispose();
});

// ========== 创建着色器材质 - 实现分段渐变 ==========
// function createShaderMaterial() {
//     console.log("创建分段渐变着色器材质...");

//     // 定义四个阶段的颜色（与您原来代码一致）
//     const color0 = new THREE.Vector3(0.0, 0.0, 0.545); // #00008b 深蓝
//     const color1 = new THREE.Vector3(0.0, 1.0, 1.0); // #00ffff 青
//     const color2 = new THREE.Vector3(1.0, 1.0, 0.0); // #ffff00 黄
//     const color3 = new THREE.Vector3(1.0, 0.0, 0.0); // #ff0000 红

//     const material = new THREE.ShaderMaterial({
//         uniforms: {
//             color0: { value: color0 },
//             color1: { value: color1 },
//             color2: { value: color2 },
//             color3: { value: color3 },
//             baseSize: { value: props.baseSize },
//             maxHeight: { value: props.maxHeight },
//         },
//         vertexShader: `
//             attribute float instanceValue;
//             attribute vec3 instancePosition;
//             attribute vec3 instanceScale;

//             varying float vValue;
//             varying float vHeight;
//             varying vec3 vPosition;

//             void main() {
//                 vValue = instanceValue;
//                 vPosition = position;

//                 // 计算顶点在柱体中的相对高度 (0到1)
//                 vHeight = (position.y + 0.5); // 立方体原本y范围是-0.5到0.5

//                 // 应用实例的缩放和位置
//                 vec3 transformed = position * instanceScale;
//                 transformed += instancePosition;

//                 gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
//             }
//         `,
//         fragmentShader: `
//             uniform vec3 color0;
//             uniform vec3 color1;
//             uniform vec3 color2;
//             uniform vec3 color3;

//             varying float vValue;
//             varying float vHeight;
//             varying vec3 vPosition;

//             void main() {
//                 // 根据数值大小决定使用多少段渐变
//                 vec3 finalColor;

//                 if (vValue < 0.25) {
//                     // 低值：只使用第1段颜色 - 深蓝
//                     finalColor = color0;
//                 } else if (vValue < 0.5) {
//                     // 中等值：使用前2段渐变 - 深蓝 → 青
//                     if (vHeight < 0.5) {
//                         finalColor = mix(color0, color1, vHeight / 0.5);
//                     } else {
//                         finalColor = color1;
//                     }
//                 } else if (vValue < 0.75) {
//                     // 较高值：使用前3段渐变 - 深蓝 → 青 → 黄
//                     if (vHeight < 0.33) {
//                         finalColor = mix(color0, color1, vHeight / 0.33);
//                     } else if (vHeight < 0.66) {
//                         finalColor = mix(color1, color2, (vHeight - 0.33) / 0.33);
//                     } else {
//                         finalColor = color2;
//                     }
//                 } else {
//                     // 最高值：使用完整的4段渐变 - 深蓝 → 青 → 黄 → 红
//                     if (vHeight < 0.25) {
//                         finalColor = mix(color0, color1, vHeight / 0.25);
//                     } else if (vHeight < 0.5) {
//                         finalColor = mix(color1, color2, (vHeight - 0.25) / 0.25);
//                     } else if (vHeight < 0.75) {
//                         finalColor = mix(color2, color3, (vHeight - 0.5) / 0.25);
//                     } else {
//                         finalColor = color3;
//                     }
//                 }

//                 // 简单的光照效果
//                 vec3 lightDir = normalize(vec3(1.0, 2.0, 0.5));
//                 vec3 normal;

//                 // 计算法向量
//                 if (abs(vPosition.y) > 0.49) {
//                     normal = vec3(0.0, sign(vPosition.y), 0.0);
//                 } else if (abs(vPosition.x) > 0.49) {
//                     normal = vec3(sign(vPosition.x), 0.0, 0.0);
//                 } else {
//                     normal = vec3(0.0, 0.0, sign(vPosition.z));
//                 }

//                 float diffuse = max(dot(normal, lightDir), 0.3);

//                 // 顶部更亮
//                 float topBrightness = vPosition.y > 0.4 ? 1.2 : 1.0;

//                 gl_FragColor = vec4(finalColor * diffuse * topBrightness, 1.0);
//             }
//         `,
//         transparent: false,
//     });

//     console.log("分段渐变着色器材质创建完成");
//     return material;
// }

// ========== 创建着色器材质 - 实现十段渐变 ==========
function createShaderMaterial() {
    console.log("创建十段渐变着色器材质...");

    // 定义十段渐变的颜色序列
    const colors = [
        new THREE.Vector3(0.0314, 0.1922, 0.3725), // #08315f 深蓝
        new THREE.Vector3(0.2706, 0.5333, 0.7333), // #4588bb 蓝色
        new THREE.Vector3(0.5216, 0.7451, 0.8902), // #85bee3 浅蓝色
        new THREE.Vector3(0.7451, 0.8627, 0.9569), // #bedcf4 更浅的蓝色
        new THREE.Vector3(0.8941, 0.8431, 0.8627), // #e4d7dc 淡紫色
        new THREE.Vector3(0.9882, 0.8745, 0.8549), // #fcdfda 淡粉色
        new THREE.Vector3(0.9765, 0.7137, 0.6353), // #f9b6a2 浅橙色
        new THREE.Vector3(0.9765, 0.4706, 0.3765), // #f97860 橙色
        new THREE.Vector3(0.7843, 0.0863, 0.149), // #c81626 红色
        new THREE.Vector3(0.6863, 0.0, 0.0588), // #af000f 深红色
    ];

    const material = new THREE.ShaderMaterial({
        uniforms: {
            color0: { value: colors[0] },
            color1: { value: colors[1] },
            color2: { value: colors[2] },
            color3: { value: colors[3] },
            color4: { value: colors[4] },
            color5: { value: colors[5] },
            color6: { value: colors[6] },
            color7: { value: colors[7] },
            color8: { value: colors[8] },
            color9: { value: colors[9] },
            baseSize: { value: props.baseSize },
            maxHeight: { value: props.maxHeight },
        },
        vertexShader: `
            attribute float instanceValue;
            attribute vec3 instancePosition;
            attribute vec3 instanceScale;

            varying float vValue;
            varying float vHeight;
            varying vec3 vPosition;

            void main() {
                vValue = instanceValue;
                vPosition = position;

                // 计算顶点在柱体中的相对高度 (0到1)
                vHeight = (position.y + 0.5); // 立方体原本y范围是-0.5到0.5

                // 应用实例的缩放和位置
                vec3 transformed = position * instanceScale;
                transformed += instancePosition;

                gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
            }
        `,
        fragmentShader: `
            uniform vec3 color0;
            uniform vec3 color1;
            uniform vec3 color2;
            uniform vec3 color3;
            uniform vec3 color4;
            uniform vec3 color5;
            uniform vec3 color6;
            uniform vec3 color7;
            uniform vec3 color8;
            uniform vec3 color9;

            varying float vValue;
            varying float vHeight;
            varying vec3 vPosition;

            vec3 getGradientColor(float value, float height) {
                // 根据数值大小决定使用多少段渐变
                if (value < 0.1) {
                    // 第一段：纯颜色
                    return color0;
                } else if (value < 0.2) {
                    // 第二段：2色渐变
                    return mix(color0, color1, height);
                } else if (value < 0.3) {
                    // 第三段：3色渐变
                    if (height < 0.5) {
                        return mix(color0, color1, height / 0.5);
                    } else {
                        return mix(color1, color2, (height - 0.5) / 0.5);
                    }
                } else if (value < 0.4) {
                    // 第四段：4色渐变
                    if (height < 0.33) {
                        return mix(color0, color1, height / 0.33);
                    } else if (height < 0.66) {
                        return mix(color1, color2, (height - 0.33) / 0.33);
                    } else {
                        return mix(color2, color3, (height - 0.66) / 0.34);
                    }
                } else if (value < 0.5) {
                    // 第五段：5色渐变
                    if (height < 0.25) {
                        return mix(color0, color1, height / 0.25);
                    } else if (height < 0.5) {
                        return mix(color1, color2, (height - 0.25) / 0.25);
                    } else if (height < 0.75) {
                        return mix(color2, color3, (height - 0.5) / 0.25);
                    } else {
                        return mix(color3, color4, (height - 0.75) / 0.25);
                    }
                } else if (value < 0.6) {
                    // 第六段：6色渐变
                    if (height < 0.2) {
                        return mix(color0, color1, height / 0.2);
                    } else if (height < 0.4) {
                        return mix(color1, color2, (height - 0.2) / 0.2);
                    } else if (height < 0.6) {
                        return mix(color2, color3, (height - 0.4) / 0.2);
                    } else if (height < 0.8) {
                        return mix(color3, color4, (height - 0.6) / 0.2);
                    } else {
                        return mix(color4, color5, (height - 0.8) / 0.2);
                    }
                } else if (value < 0.7) {
                    // 第七段：7色渐变
                    if (height < 0.1667) {
                        return mix(color0, color1, height / 0.1667);
                    } else if (height < 0.3333) {
                        return mix(color1, color2, (height - 0.1667) / 0.1667);
                    } else if (height < 0.5) {
                        return mix(color2, color3, (height - 0.3333) / 0.1667);
                    } else if (height < 0.6667) {
                        return mix(color3, color4, (height - 0.5) / 0.1667);
                    } else if (height < 0.8333) {
                        return mix(color4, color5, (height - 0.6667) / 0.1667);
                    } else {
                        return mix(color5, color6, (height - 0.8333) / 0.1667);
                    }
                } else if (value < 0.8) {
                    // 第八段：8色渐变
                    if (height < 0.1429) {
                        return mix(color0, color1, height / 0.1429);
                    } else if (height < 0.2857) {
                        return mix(color1, color2, (height - 0.1429) / 0.1429);
                    } else if (height < 0.4286) {
                        return mix(color2, color3, (height - 0.2857) / 0.1429);
                    } else if (height < 0.5714) {
                        return mix(color3, color4, (height - 0.4286) / 0.1429);
                    } else if (height < 0.7143) {
                        return mix(color4, color5, (height - 0.5714) / 0.1429);
                    } else if (height < 0.8571) {
                        return mix(color5, color6, (height - 0.7143) / 0.1429);
                    } else {
                        return mix(color6, color7, (height - 0.8571) / 0.1429);
                    }
                } else if (value < 0.9) {
                    // 第九段：9色渐变
                    if (height < 0.125) {
                        return mix(color0, color1, height / 0.125);
                    } else if (height < 0.25) {
                        return mix(color1, color2, (height - 0.125) / 0.125);
                    } else if (height < 0.375) {
                        return mix(color2, color3, (height - 0.25) / 0.125);
                    } else if (height < 0.5) {
                        return mix(color3, color4, (height - 0.375) / 0.125);
                    } else if (height < 0.625) {
                        return mix(color4, color5, (height - 0.5) / 0.125);
                    } else if (height < 0.75) {
                        return mix(color5, color6, (height - 0.625) / 0.125);
                    } else if (height < 0.875) {
                        return mix(color6, color7, (height - 0.75) / 0.125);
                    } else {
                        return mix(color7, color8, (height - 0.875) / 0.125);
                    }
                } else {
                    // 第十段：10色渐变
                    if (height < 0.1111) {
                        return mix(color0, color1, height / 0.1111);
                    } else if (height < 0.2222) {
                        return mix(color1, color2, (height - 0.1111) / 0.1111);
                    } else if (height < 0.3333) {
                        return mix(color2, color3, (height - 0.2222) / 0.1111);
                    } else if (height < 0.4444) {
                        return mix(color3, color4, (height - 0.3333) / 0.1111);
                    } else if (height < 0.5556) {
                        return mix(color4, color5, (height - 0.4444) / 0.1111);
                    } else if (height < 0.6667) {
                        return mix(color5, color6, (height - 0.5556) / 0.1111);
                    } else if (height < 0.7778) {
                        return mix(color6, color7, (height - 0.6667) / 0.1111);
                    } else if (height < 0.8889) {
                        return mix(color7, color8, (height - 0.7778) / 0.1111);
                    } else {
                        return mix(color8, color9, (height - 0.8889) / 0.1111);
                    }
                }
            }

            void main() {
                // 简单的光照效果
                vec3 lightDir = normalize(vec3(1.0, 2.0, 0.5));
                vec3 normal;

                // 计算法向量
                if (abs(vPosition.y) > 0.49) {
                    normal = vec3(0.0, sign(vPosition.y), 0.0);
                } else if (abs(vPosition.x) > 0.49) {
                    normal = vec3(sign(vPosition.x), 0.0, 0.0);
                } else {
                    normal = vec3(0.0, 0.0, sign(vPosition.z));
                }

                float diffuse = max(dot(normal, lightDir), 0.3);

                // 顶部更亮
                float topBrightness = vPosition.y > 0.4 ? 1.2 : 1.0;

                // 获取渐变颜色
                vec3 gradientColor = getGradientColor(vValue, vHeight);

                gl_FragColor = vec4(gradientColor * diffuse * topBrightness, 1.0);
            }
        `,
        transparent: false,
    });

    console.log("十段渐变着色器材质创建完成");
    return material;
}

// ========== Three.js 初始化 ==========
function initThree() {
    console.log("初始化 Three.js...");
    const { backgroundColor, showGridHelper, showAxesHelper, cameraPosition, enableOrbit } = props;

    // 创建场景
    scene = new THREE.Scene();
    scene.background = new THREE.Color(backgroundColor);
    console.log("场景创建完成，背景色:", backgroundColor);

    // 创建相机
    camera = new THREE.PerspectiveCamera(75, props.width / props.height, 0.1, 1000);
    camera.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z);
    console.log("相机创建完成，位置:", cameraPosition);

    // 创建渲染器
    renderer = new THREE.WebGLRenderer({
        antialias: true,
        powerPreference: "high-performance",
    });
    renderer.setSize(props.width, props.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    console.log("渲染器创建完成，尺寸:", props.width, "x", props.height);

    if (containerRef.value) {
        containerRef.value.innerHTML = "";
        containerRef.value.appendChild(renderer.domElement);
        console.log("渲染器DOM添加到容器");
    }

    // 轨道控制器
    // if (enableOrbit) {
    //     controls = new OrbitControls(camera, renderer.domElement);
    //     controls.enableDamping = true;
    //     controls.dampingFactor = 0.05;
    //     console.log("轨道控制器初始化完成");
    // }

    // 光源
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 10, 5);
    scene.add(directionalLight);
    console.log("光源设置完成");

    // 热力图组
    heatmapGroup = new THREE.Group();
    scene.add(heatmapGroup);
    console.log("热力图组创建完成");

    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();

    // 立即创建热力图
    createHeatmap();
    console.log("Three.js 初始化完成");
}

// ========== 创建立方体几何体 ==========
function createCubeGeometry() {
    // 增加高度方向的分段数，以便有更多的顶点来表现渐变
    return new THREE.BoxGeometry(1, 1, 1, 1, 8, 1);
}

// ========== 创建热力图 ==========
function createHeatmap() {
    console.log("开始创建热力图...");

    // 清理旧的实例
    if (instancedMesh) {
        heatmapGroup.remove(instancedMesh);
        instancedMesh.geometry.dispose();
        (instancedMesh.material as THREE.Material).dispose();
        instancedMesh = null;
        console.log("清理旧的热力图实例");
    }

    instanceData.length = 0;

    // 处理数据 - 使用测试数据
    let dataGrid = props.data;
    const hasValidData = Array.isArray(dataGrid) && dataGrid.length > 0 && dataGrid.every((row) => Array.isArray(row) && row.length > 0);

    if (!hasValidData) {
        console.log("使用默认测试数据");
        dataGrid = [
            [1, 3, 5, 7, 9],
            [2, 4, 6, 8, 10],
            [3, 5, 7, 9, 11],
            [4, 6, 8, 10, 12],
            [5, 7, 9, 11, 13],
        ];
    }
    rows = dataGrid.length;
    cols = dataGrid[0]?.length || 0;

    console.log(`网格尺寸: ${rows} x ${cols}`, "数据:", dataGrid);

    // 计算最小最大值
    let min = Infinity;
    let max = -Infinity;

    for (let i = 0; i < rows; i++) {
        const row = dataGrid[i];
        if (!Array.isArray(row)) continue;
        for (let j = 0; j < cols; j++) {
            const v = row[j];
            if (typeof v !== "number") continue;
            if (v < min) min = v;
            if (v > max) max = v;
        }
    }

    if (min === Infinity) min = 0;
    if (max === -Infinity) max = 1;

    // 避免除零
    if (min === max) max = min + 1;

    dataMin = min;
    dataMax = max;

    console.log(`数据范围: ${min} - ${max}`);

    // 创建着色器材质
    shaderMaterial = createShaderMaterial();

    // 创建立方体几何体
    const cubeGeometry = createCubeGeometry();

    // 创建实例化属性
    const instanceCount = rows * cols;
    const instanceValues = new Float32Array(instanceCount);
    const instancePositions = new Float32Array(instanceCount * 3);
    const instanceScales = new Float32Array(instanceCount * 3);

    let instanceIndex = 0;
    for (let i = 0; i < rows; i++) {
        const row = dataGrid[i];
        if (!Array.isArray(row)) continue;

        for (let j = 0; j < cols; j++) {
            const value = typeof row[j] === "number" ? row[j] : 0;
            const normalizedValue = (value - min) / (max - min);
            const height = 0.1 + normalizedValue * props.maxHeight;

            // 设置实例值 (归一化值)
            instanceValues[instanceIndex] = normalizedValue;

            // 设置实例位置
            const x = (i - (rows - 1) / 2) * props.baseSize;
            const z = (j - (cols - 1) / 2) * props.baseSize;
            const y = height / 2; // 柱体中心在高度的一半

            instancePositions[instanceIndex * 3] = x;
            instancePositions[instanceIndex * 3 + 1] = y;
            instancePositions[instanceIndex * 3 + 2] = z;

            // 设置实例缩放
            instanceScales[instanceIndex * 3] = props.baseSize; // X 缩放
            instanceScales[instanceIndex * 3 + 1] = height; // Y 缩放 (高度)
            instanceScales[instanceIndex * 3 + 2] = props.baseSize; // Z 缩放

            // 存储实例数据用于交互
            instanceData[instanceIndex] = {
                value,
                x: i,
                z: j,
                normalizedValue,
            };

            instanceIndex++;
        }
    }

    console.log(`创建 ${instanceCount} 个实例`);

    // 添加实例属性
    cubeGeometry.setAttribute("instanceValue", new THREE.InstancedBufferAttribute(instanceValues, 1));
    cubeGeometry.setAttribute("instancePosition", new THREE.InstancedBufferAttribute(instancePositions, 3));
    cubeGeometry.setAttribute("instanceScale", new THREE.InstancedBufferAttribute(instanceScales, 3));

    // 创建 InstancedMesh
    instancedMesh = new THREE.InstancedMesh(cubeGeometry, shaderMaterial, instanceCount);
    heatmapGroup.add(instancedMesh);

    // 更新网格辅助线
    updateGridHelper();

    console.log("热力图创建完成");
}

// ========== 更新网格辅助线 ==========
let gridHelper: THREE.GridHelper | null = null;
let axesHelper: THREE.AxesHelper | null = null;

function updateGridHelper() {
    // 清理旧的辅助线
    if (gridHelper) {
        scene.remove(gridHelper);
        gridHelper = null;
    }
    if (axesHelper) {
        scene.remove(axesHelper);
        axesHelper = null;
    }

    const { showGridHelper, showAxesHelper } = props;

    if (showGridHelper) {
        const gridSize = Math.max(rows, cols) * props.baseSize * 1.5;
        const divisions = Math.max(rows, cols);
        gridHelper = new THREE.GridHelper(gridSize, divisions, 0xffffff, 0x888888);
        gridHelper.position.y = -0.01;
        scene.add(gridHelper);
    }

    if (showAxesHelper) {
        const axesSize = Math.max(rows, cols) * props.baseSize * 0.8;
        axesHelper = new THREE.AxesHelper(axesSize);
        scene.add(axesHelper);
    }
}

// ========== 动画循环 ==========
function animate() {
    animationId = requestAnimationFrame(animate);

    if (controls) controls.update();
    renderer.render(scene, camera);
}

// ========== 数据动画 ==========
function animateData() {
    if (!instancedMesh) return;

    const geometry = instancedMesh.geometry;
    const instanceValueAttribute = geometry.getAttribute("instanceValue") as THREE.InstancedBufferAttribute;
    const instanceScaleAttribute = geometry.getAttribute("instanceScale") as THREE.InstancedBufferAttribute;

    const instanceValues = instanceValueAttribute.array as Float32Array;
    const instanceScales = instanceScaleAttribute.array as Float32Array;

    for (let i = 0; i < instanceData.length; i++) {
        // 更新数据值
        const currentValue = instanceData[i].value;
        const newValue = Math.min(20, Math.max(1, currentValue + (Math.random() - 0.5) * 0.3));

        // 计算归一化值和高度
        const normalizedValue = (newValue - dataMin) / (dataMax - dataMin);
        const height = 0.1 + normalizedValue * props.maxHeight;

        // 更新实例数据
        instanceData[i].value = newValue;
        instanceData[i].normalizedValue = normalizedValue;

        // 更新实例属性
        instanceValues[i] = normalizedValue;
        instanceScales[i * 3 + 1] = height; // 更新高度缩放
    }

    // 标记属性需要更新
    instanceValueAttribute.needsUpdate = true;
    instanceScaleAttribute.needsUpdate = true;
}

// ========== 鼠标交互 ==========
let raycasterTimeout: number | null = null;

function onMouseMove(event: MouseEvent) {
    if (!containerRef.value || !instancedMesh) return;

    const rect = containerRef.value.getBoundingClientRect();

    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY < rect.bottom) {
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
        const intersects = raycaster.intersectObject(instancedMesh);

        if (intersects.length > 0) {
            const instanceId = intersects[0].instanceId;
            if (instanceId !== undefined && instanceData[instanceId]) {
                const data = instanceData[instanceId];
                tooltip.value = {
                    show: true,
                    x: event.clientX - rect.left + 10,
                    y: event.clientY - rect.top - 30,
                    content: `数值: ${data.value.toFixed(2)}<br>位置: (${data.x}, ${data.z})<br>高度: ${(data.normalizedValue * 100).toFixed(1)}%`,
                };
            }
        } else {
            tooltip.value.show = false;
        }
    });
}

// ========== 窗口大小调整 ==========
function onResize() {
    if (!camera || !renderer) return;

    camera.aspect = props.width / props.height;
    camera.updateProjectionMatrix();
    renderer.setSize(props.width, props.height);
}

// ========== 暴露方法 ==========
defineExpose({
    refresh: createHeatmap,
    toggleAnimation: () => (isAnimating.value = !isAnimating.value),
    updateData: (newData: number[][]) => {
        createHeatmap();
    },
});
</script>

<style scoped lang="scss">
.heatmap-wrapper {
    position: relative;
    border: 1px solid #ccc;
    background: #f8f8f8;
}
.three-container {
    display: block;
    width: 100%;
    height: 100%;
}
.tooltip {
    position: absolute;
    z-index: 10;
    padding: 8px 12px;
    font-size: 14px;
    border: 1px solid rgba(255, 255, 255, 30%);
    border-radius: 6px;
    white-space: nowrap;
    color: #fff;
    background: rgba(0, 0, 0, 90%);
    pointer-events: none;
}
</style>
