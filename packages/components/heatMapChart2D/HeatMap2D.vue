<!-- Heatmap.vue -->
<template>
    <div class="container">
        <div class="content">
            <div class="heatmap-wrapper">
                <div class="canvas-container">
                    <!-- 
                        @mouseup="handleMouseUp"
                        @mousedown="handleMouseDown" -->
                    <canvas
                        ref="heatmapCanvas"
                        id="heatmap-canvas"
                        width="612"
                        height="831"
                        @mousemove="handleMouseMove"
                        @mouseleave="handleMouseLeave"
                        @contextmenu.prevent></canvas>
                    <div class="coordinates" id="coordinates">X: {{ mouseX }}, Y: {{ mouseY }}</div>
                    <div class="tooltip" :class="{ show: tooltip.visible }" :style="{ left: tooltip.x + 'px', top: tooltip.y + 'px' }">
                        <h3>热力块信息</h3>
                        <p>位置: ({{ tooltip.col }}, {{ tooltip.row }})</p>
                        <p>值: {{ tooltip.value }}</p>
                        <p>坐标: ({{ Math.floor(tooltip.rawX) }}, {{ Math.floor(tooltip.rawY) }})</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="controls">
            <div class="control-group">
                <div class="control-row">
                    <div class="control-item">
                        <label for="blockWidth">热力块宽度 (px)</label>
                        <el-input type="number" id="blockWidth" min="1" max="100" v-model.number="blockWidth" />
                    </div>
                    <div class="control-item">
                        <label for="blockHeight">热力块高度 (px)</label>
                        <el-input type="number" id="blockHeight" min="1" max="100" v-model.number="blockHeight" />
                    </div>
                </div>
                <Button type="primary" @click="applyBlockSize">应用热力块尺寸</Button>
            </div>

            <div class="control-group">
                <div class="data-info" id="dataInfo">
                    热力图尺寸: {{ canvasWidth }}px × {{ canvasHeight }}px、 热力块数量: {{ cols.value }} × {{ rows.value }} (共{{ cols.value * rows.value }}个)、 每个热力块尺寸:
                    {{ blockWidth }}px × {{ blockHeight }}px、 活跃热力块: {{ activeBlocks }}、 最大值: {{ maxValue }}、 平均值: {{ avgValue.toFixed(2) }}
                </div>
            </div>

            <div class="btn-group">
                <Button type="primary" @click="randomizeData">随机生成数据</Button>
                <Button type="primary" @click="resetData">重置数据</Button>
                <Button type="primary" @click="clearData">清除数据</Button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, computed, watch } from "vue";
defineOptions({ name: "JBHeatMap2D" });

// 画布引用
const heatmapCanvas = ref(null);
let ctx = null;

// Canvas 尺寸
const canvasWidth = 612;
const canvasHeight = 831;

// 响应式数据
const blockWidth = ref(36);
const blockHeight = ref(36);
const intensity = ref(80);

// 网格行列数
const cols = ref(Math.floor(canvasWidth / blockWidth.value));
const rows = ref(Math.floor(canvasHeight / blockHeight.value));

const mouseX = ref(0);
const mouseY = ref(0);

// Tooltip 控制
const tooltip = reactive({
    visible: false,
    x: 0,
    y: 0,
    col: 0,
    row: 0,
    value: 0,
    rawX: 0,
    rawY: 0,
});

// 热力数据（二维数组）
const heatData = ref([]); // 使用 ref 包裹

// 计算活跃块、最大值、平均值
const activeBlocks = computed(() => {
    let count = 0;
    for (let i = 0; i < rows.value; i++) {
        for (let j = 0; j < cols.value; j++) {
            if (heatData.value[i]?.[j] > 0) count++; // 注意 ?. 安全访问
        }
    }
    return count;
});

const maxValue = computed(() => {
    let max = 0;
    for (let i = 0; i < rows.value; i++) {
        for (let j = 0; j < cols.value; j++) {
            if (heatData.value[i]?.[j] > max) max = heatData.value[i][j];
        }
    }
    return max;
});

const avgValue = computed(() => {
    let total = 0;
    let count = 0;
    for (let i = 0; i < rows.value; i++) {
        for (let j = 0; j < cols.value; j++) {
            const val = heatData.value[i]?.[j];
            if (val > 0) {
                total += val;
                count++;
            }
        }
    }
    return count > 0 ? total / count : 0;
});

// 颜色映射函数
function getColor(value, maxValue) {
    const normalizedValue = maxValue > 0 ? value / maxValue : 0;

    if (normalizedValue < 0.25) return `rgb(43, 88, 118)`;
    else if (normalizedValue < 0.5) return `rgb(78, 67, 118)`;
    else if (normalizedValue < 0.75) return `rgb(178, 69, 146)`;
    else return `rgb(241, 95, 121)`;
}

// 渲染热力图
function renderHeatmap() {
    if (!ctx) return;
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    for (let i = 0; i < rows.value; i++) {
        for (let j = 0; j < cols.value; j++) {
            const value = heatData.value[i][j];
            if (value > 0) {
                const x = j * blockWidth.value;
                const y = i * blockHeight.value;
                ctx.fillStyle = getColor(value, intensity.value);
                ctx.fillRect(x, y, blockWidth.value, blockHeight.value);
            }
        }
    }
}

// 初始化热力图数据
function initheatData() {
    heatData.value = Array(rows.value)
        .fill()
        .map(() => Array(cols.value).fill(0));
}

// 添加热点（用于 reset）
function addHotspot(centerX, centerY, radius, intensityVal) {
    for (let i = 0; i < rows.value; i++) {
        for (let j = 0; j < cols.value; j++) {
            const x = j * blockWidth.value + blockWidth.value / 2;
            const y = i * blockHeight.value + blockHeight.value / 2;
            const distance = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);
            if (distance < radius) {
                const value = intensityVal * (1 - distance / radius);
                heatData.value[i][j] = Math.max(heatData.value[i][j], Math.floor(value));
            }
        }
    }
}

// 添加热力或擦除
function addHeat(x, y, radius, intensityVal) {
    const centerCol = Math.floor(x / blockWidth.value);
    const centerRow = Math.floor(y / blockHeight.value);
    const startCol = Math.max(0, centerCol - radius);
    const endCol = Math.min(cols.value - 1, centerCol + radius);
    const startRow = Math.max(0, centerRow - radius);
    const endRow = Math.min(rows.value - 1, centerRow + radius);

    for (let i = startRow; i <= endRow; i++) {
        for (let j = startCol; j <= endCol; j++) {
            const distance = Math.sqrt((j - centerCol) ** 2 + (i - centerRow) ** 2);
            if (distance < radius) {
                const value = intensityVal * (1 - distance / radius);
                if (intensityVal === 0) {
                    heatData.value[i][j] = 0; // 擦除
                } else {
                    heatData.value[i][j] = Math.min(100, Math.max(heatData.value[i][j], Math.floor(value)));
                }
            }
        }
    }
    renderHeatmap();
}

// 随机生成数据
function randomizeData() {
    for (let i = 0; i < rows.value; i++) {
        for (let j = 0; j < cols.value; j++) {
            heatData.value[i][j] = Math.random() < 0.1 ? Math.floor(Math.random() * 100) : 0;
        }
    }
    console.log("数据已生成", heatData.value);
    renderHeatmap();
}

// 重置数据（预设热点）
function resetData() {
    clearData();
    addHotspot(50, 50, 30, 90);
    addHotspot(150, 100, 25, 80);
    addHotspot(80, 200, 35, 95);
    addHotspot(180, 250, 40, 85);
    renderHeatmap();
}

// 清除所有数据
function clearData() {
    for (let i = 0; i < rows.value; i++) {
        for (let j = 0; j < cols.value; j++) {
            heatData.value[i][j] = 0;
        }
    }
    renderHeatmap();
}

// 应用新的热力块尺寸
function applyBlockSize() {
    if (blockWidth.value < 1 || blockWidth.value > 100 || blockHeight.value < 1 || blockHeight.value > 100) {
        alert("请输入有效的热力块尺寸（1-100）");
        return;
    }

    // 保存旧数据
    const oldData = JSON.parse(JSON.stringify(heatData.value)); // 深拷贝
    const oldcols = cols.value;
    const oldrows = rows.value;

    // 更新网格
    cols.value = Math.floor(canvasWidth / blockWidth.value);
    rows.value = Math.floor(canvasHeight / blockHeight.value);
    initheatData();

    // 映射旧数据到新网格
    for (let i = 0; i < Math.min(rows.value, oldrows.value); i++) {
        for (let j = 0; j < Math.min(cols.value, oldcols); j++) {
            heatData.value[i][j] = oldData[i]?.[j] || 0;
        }
    }
    renderHeatmap();
}

// 鼠标事件
let isDrawing = false;
let isErasing = false;

function handleMouseMove(e) {
    const rect = heatmapCanvas.value.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    mouseX.value = Math.floor(x);
    mouseY.value = Math.floor(y);

    const col = Math.floor(x / blockWidth.value);
    const row = Math.floor(y / blockHeight.value);

    if (col >= 0 && col < cols.value && row >= 0 && row < rows.value) {
        tooltip.visible = true;
        tooltip.col = col;
        tooltip.row = row;
        tooltip.value = heatData.value[row][col];
        tooltip.rawX = x;
        tooltip.rawY = y;

        // 使用 clientX/Y + 固定偏移（最简单有效）
        tooltip.x = e.clientX + 15;
        tooltip.y = e.clientY - 30;
    } else {
        tooltip.visible = false;
    }

    if (isDrawing) {
        if (isErasing) {
            addHeat(x, y, 10, 0);
        } else {
            addHeat(x, y, 5, 60);
        }
    }
}
// function handleMouseUp() {
//     isDrawing = false;
// }

function handleMouseLeave() {
    isDrawing = false;
    tooltip.visible = false;
}

// 监听 intensity 变化重新渲染
watch(intensity, () => renderHeatmap());

// 初始化
onMounted(() => {
    const canvas = heatmapCanvas.value;
    ctx = canvas.getContext("2d");

    // 初始化网格和数据
    cols.value = Math.floor(canvasWidth / blockWidth.value);
    rows.value = Math.floor(canvasHeight / blockHeight.value);
    initheatData();

    // 初始渲染
    resetData();
});
</script>

<style scoped>
.container {
    display: flex;
    align-items: center;
    padding: 20px;
    width: 100%;
    max-width: 1200px;
    min-height: 100vh;

    /* background: linear-gradient(135deg, #1a2a3a, #0d1b2a); */
    color: #e0e0e0;
    flex-direction: column;
}
header {
    margin-bottom: 30px;
    width: 100%;
    text-align: center;
}
h1 {
    margin-bottom: 15px;
    font-size: 2.5rem;
    background: linear-gradient(to right, #4facfe, #00f2fe);
    background-clip: text;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 20%);
    -webkit-text-fill-color: transparent;
}
.description {
    margin: 0 auto 20px;
    max-width: 700px;
    font-size: 1.1rem;
    color: #a0b8c8;
    line-height: 1.6;
}
.content {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    justify-content: center;
    margin-bottom: 30px;
}
.canvas-container {
    /* box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.3); */
    position: relative;

    /* border-radius: 10px; */
    overflow: hidden;
    width: 612px;
    height: 831px;

    /* background-color: #0a1522; */

    background-color: #b7e5fd;
}
#heatmap-canvas {
    display: block;
    width: 100%;
    height: 100%;
    cursor: crosshair;
}
.controls {
    margin-top: 20px;
    padding: 25px;
    width: 100%;
    max-width: 612px;
}
.controls h2 {
    margin-bottom: 20px;
    font-size: 1.8rem;
    text-align: center;
    color: #000;
}
.control-group {
    margin-bottom: 20px;
}
.control-row {
    display: flex;
    gap: 15px;
    margin-bottom: 10px;
}
.control-item {
    flex: 1;
}
label {
    display: block;
    margin-bottom: 8px;
    font-size: 1rem;
    color: #000;
}
.color-scale {
    margin: 15px 0;
    height: 25px;
    border-radius: 5px;
    background: linear-gradient(to right, #2b5876, #4e4376, #b24592, #f15f79);
    box-shadow: 0 3px 10px rgba(0, 0, 0, 20%);
}
.color-labels {
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem;
    color: #a0b8c8;
}
.data-info {
    padding: 15px;
    font-size: 1rem;
    font-family: monospace;
    border-radius: 8px;

    /* background: #1a2d42; */
    color: #000;

    /* border: 1px solid #2a4365; */
}
.info {
    margin-top: 20px;
    max-width: 612px;
    font-size: 1rem;
    text-align: center;
    color: #a0b8c8;
}
.btn-group {
    display: flex;
    justify-content: center;
    margin-top: 15px;
    gap: 15px;
}
el-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 30%);
}
el-button:active {
    transform: translateY(1px);
}
.coordinates {
    position: absolute;
    bottom: 10px;
    left: 10px;
    z-index: 10;
    padding: 5px 10px;
    font-size: 0.9rem;
    border-radius: 5px;
    color: white;
    background: rgba(0, 0, 0, 70%);
}
.tooltip {
    position: fixed;
    z-index: 100;
    padding: 8px 12px;
    max-width: 200px;
    font-size: 0.9rem;
    border: 1px solid #dcefb3;
    border-radius: 5px;
    color: white;
    background: rgba(0, 0, 0, 85%);
    opacity: 0;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 30%);
    transition: opacity 0.3s;
    pointer-events: none;
}
.tooltip.show {
    opacity: 1;
}
.tooltip h3 {
    margin: 0 0 5px;
    font-size: 1rem;
    color: #4facfe;
}
.tooltip p {
    margin: 3px 0;
}

@media (width <= 700px) {
    .canvas-container {
        width: 100%;
        height: auto;
        aspect-ratio: 612 / 831;
    }
    .controls {
        width: 100%;
    }
    h1 {
        font-size: 2rem;
    }
    .control-row {
        flex-direction: column;
        gap: 10px;
    }
}
</style>
