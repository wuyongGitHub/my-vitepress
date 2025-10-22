<!-- Heatmap.vue -->
<template>
    <div class="heatmap-container">
        <!-- 画布容器 -->
        <div class="canvas-wrapper" :style="{ width: `${canvasWidth}px`, height: `${canvasHeight}px` }">
            <canvas
                ref="heatmapCanvas"
                @mousedown="handleMouseDown"
                @mousemove="handleMouseMove"
                @mouseup="handleMouseUp"
                @mouseleave="handleMouseLeave"
                @contextmenu.prevent></canvas>

            <!-- 坐标显示 -->
            <div class="coordinates">X: {{ mouseX }}, Y: {{ mouseY }}</div>

            <!-- Tooltip -->
            <div class="tooltip" :class="{ show: tooltip.visible }" :style="{ left: tooltip.x + 'px', top: tooltip.y + 'px' }">
                <h3>热力块信息</h3>
                <p>位置: ({{ tooltip.col }}, {{ tooltip.row }})</p>
                <p>值: {{ tooltip.value }}</p>
                <p>坐标: ({{ Math.floor(tooltip.rawX) }}, {{ Math.floor(tooltip.rawY) }})</p>
            </div>
        </div>

        <!-- 控制面板（可选，也可移除或通过插槽定制） -->
        <div v-if="props.showControls" class="controls">
            <div class="data-info">
                尺寸: {{ cols }} × {{ rows }} (共 {{ cols * rows }} 块)｜ 活跃块: {{ activeBlocks }}｜ 最大值: {{ maxValue }}｜ 平均值: {{ avgValue.toFixed(2) }}
            </div>
            <div class="btn-group">
                <button @click="randomizeData">随机数据</button>
                <button @click="resetData">重置</button>
                <button @click="clearData">清除</button>
            </div>
        </div>

        <!-- 颜色图例（可选） -->
        <div v-if="props.showLegend" class="legend">
            <div class="color-scale"></div>
            <div class="color-labels">
                <span>低</span>
                <span>高</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, computed, watch, nextTick } from "vue";

// ========== Props 定义 ==========
const props = defineProps({
    width: { type: Number, default: 612 },
    height: { type: Number, default: 831 },
    blockWidth: { type: Number, default: 36 },
    blockHeight: { type: Number, default: 36 },
    refreshTrigger: { type: [Number, String, Boolean], default: null }, // 触发刷新
    showControls: { type: Boolean, default: false },
    showLegend: { type: Boolean, default: false },
    heatmapData: { type: Array, default: () => [] },
});

// ========== 响应式数据 ==========
const canvasWidth = ref(props.width);
const canvasHeight = ref(props.height);
const blockWidth = ref(props.blockWidth);
const blockHeight = ref(props.blockHeight);

const heatmapCanvas = ref(null);
let ctx = null;

// 网格行列数
const cols = ref(0);
const rows = ref(0);

const heatData = ref([]);

// 鼠标与 Tooltip
const mouseX = ref(0);
const mouseY = ref(0);

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

let isDrawing = false;
let isErasing = false;

// ========== 颜色映射表（10 阶段）==========
const colorStops = [
    { threshold: 0.1, color: "#08315f" },
    { threshold: 0.2, color: "#4588bb" },
    { threshold: 0.3, color: "#85bee3" },
    { threshold: 0.4, color: "#bedcf4" },
    { threshold: 0.5, color: "#e4d7dc" },
    { threshold: 0.6, color: "#fcdfda" },
    { threshold: 0.7, color: "#f9b6a2" },
    { threshold: 0.8, color: "#f97860" },
    { threshold: 0.9, color: "#c81626" },
    { threshold: 1.0, color: "#af000f" },
];

// 在 onMounted 或其他地方初始化 heatData 后
watch(
    () => props.heatmapData,
    (newVal) => {
        // 更新 heatData
        heatData.value = newVal;
        renderHeatmap(); // 根据新的 heatData 重新渲染热图
    },
    { deep: true },
);
function getColor(value, maxValue) {
    if (maxValue === 0) return "transparent";
    const normalized = value / maxValue;

    for (let stop of colorStops) {
        if (normalized <= stop.threshold) {
            return stop.color;
        }
    }
    return colorStops[colorStops.length - 1].color;
}

// ========== 计算属性 ==========
const activeBlocks = computed(() => {
    let count = 0;
    for (let i = 0; i < rows.value; i++) {
        for (let j = 0; j < cols.value; j++) {
            if (heatData.value[i]?.[j] > 0) count++;
        }
    }
    return count;
});

const maxValue = computed(() => {
    let max = 0;
    for (let i = 0; i < rows.value; i++) {
        for (let j = 0; j < cols.value; j++) {
            const val = heatData.value[i]?.[j] || 0;
            if (val > max) max = val;
        }
    }
    return max;
});

const avgValue = computed(() => {
    let total = 0;
    let count = 0;
    for (let i = 0; i < rows.value; i++) {
        for (let j = 0; j < cols.value; j++) {
            const val = heatData.value[i]?.[j] || 0;
            if (val > 0) {
                total += val;
                count++;
            }
        }
    }
    return count > 0 ? total / count : 0;
});

// ========== 方法 ==========
function initGrid() {
    cols.value = Math.floor(canvasWidth.value / blockWidth.value);
    rows.value = Math.floor(canvasHeight.value / blockHeight.value);
    // initHeatData();
}

function initHeatData() {
    heatData.value = Array(rows.value)
        .fill()
        .map(() => Array(cols.value).fill(0));
}

function renderHeatmap() {
    if (!ctx) return;
    ctx.clearRect(0, 0, canvasWidth.value, canvasHeight.value);

    for (let i = 0; i < rows.value; i++) {
        for (let j = 0; j < cols.value; j++) {
            const value = heatData.value[i]?.[j] || 0;
            if (value > 0) {
                const x = j * blockWidth.value;
                const y = i * blockHeight.value;
                ctx.fillStyle = getColor(value, maxValue.value);
                ctx.fillRect(x, y, blockWidth.value, blockHeight.value);
            }
        }
    }
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

// 绘制或擦除
function addHeat(x, y, radius, intensityVal) {
    const centerCol = Math.floor(x / blockWidth.value);
    const centerRow = Math.floor(y / blockHeight.value);
    const r = Math.ceil(radius / Math.max(blockWidth.value, blockHeight.value));

    const startCol = Math.max(0, centerCol - r);
    const endCol = Math.min(cols.value - 1, centerCol + r);
    const startRow = Math.max(0, centerRow - r);
    const endRow = Math.min(rows.value - 1, centerRow + r);

    for (let i = startRow; i <= endRow; i++) {
        for (let j = startCol; j <= endCol; j++) {
            const distance = Math.sqrt((j - centerCol) ** 2 + (i - centerRow) ** 2);
            const pixelDistance = distance * Math.max(blockWidth.value, blockHeight.value);
            if (pixelDistance < radius) {
                const value = intensityVal * (1 - pixelDistance / radius);
                heatData.value[i][j] = intensityVal === 0 ? 0 : Math.max(heatData.value[i][j], Math.floor(value));
            }
        }
    }
    renderHeatmap();
}

// ========== 随机 / 重置 / 清除 ==========
function randomizeData() {
    for (let i = 0; i < rows.value; i++) {
        for (let j = 0; j < cols.value; j++) {
            heatData.value[i][j] = Math.random() < 0.1 ? Math.floor(Math.random() * 100) : 0;
        }
    }
    renderHeatmap();
}

function resetData() {
    clearData();
    addHotspot(0.1 * canvasWidth.value, 0.1 * canvasHeight.value, 50, 90);
    addHotspot(0.3 * canvasWidth.value, 0.2 * canvasHeight.value, 40, 80);
    addHotspot(0.2 * canvasWidth.value, 0.5 * canvasHeight.value, 60, 95);
    renderHeatmap();
}

function clearData() {
    heatData.value.forEach((row) => row.fill(0));
    renderHeatmap();
}

// ========== 鼠标事件 ==========
function handleMouseMove(e) {
    const rect = heatmapCanvas.value.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    mouseX.value = Math.floor(x);
    mouseY.value = Math.floor(y);

    const col = Math.floor(x / blockWidth.value);
    const row = Math.floor(y / blockHeight.value);

    // 更新 tooltip
    if (col >= 0 && col < cols.value && row >= 0 && row < rows.value) {
        tooltip.visible = true;
        tooltip.col = col;
        tooltip.row = row;
        tooltip.value = heatData.value[row]?.[col] || 0;
        tooltip.rawX = x;
        tooltip.rawY = y;
        tooltip.x = e.clientX + 15;
        tooltip.y = e.clientY - 30;
    } else {
        tooltip.visible = false;
    }

    // 绘图逻辑
    if (isDrawing) {
        if (isErasing) {
            addHeat(x, y, 20, 0);
        } else {
            addHeat(x, y, 15, 60);
        }
    }
}

function handleMouseDown(e) {
    isDrawing = true;
    isErasing = e.button === 2; // 右键擦除
    const rect = heatmapCanvas.value.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    addHeat(x, y, isErasing ? 20 : 15, isErasing ? 0 : 60);
}

function handleMouseUp() {
    isDrawing = false;
}

function handleMouseLeave() {
    isDrawing = false;
    tooltip.visible = false;
}

// ========== 生命周期与 Watchers ==========
onMounted(() => {
    const canvas = heatmapCanvas.value;
    canvas.width = props.width;
    canvas.height = props.height;
    ctx = canvas.getContext("2d");

    initGrid(); // 设置 rows 和 cols

    // 优先使用传入的 heatmapData
    if (props.heatmapData && props.heatmapData.length > 0) {
        heatData.value = props.heatmapData;
    } else {
        initHeatData(); // 没有传数据，才初始化为 0
    }

    renderHeatmap();
});

// 监听 props 变化，重新初始化
watch(
    () => [props.width, props.height, props.blockWidth, props.blockHeight],
    () => {
        canvasWidth.value = props.width;
        canvasHeight.value = props.height;
        blockWidth.value = props.blockWidth;
        blockHeight.value = props.blockHeight;

        nextTick(() => {
            const canvas = heatmapCanvas.value;
            canvas.width = canvasWidth.value;
            canvas.height = canvasHeight.value;
            ctx = canvas.getContext("2d");
            initGrid();
            renderHeatmap();
        });
    },
    { immediate: true },
);

// 监听刷新触发器
watch(
    () => props.refreshTrigger,
    () => {
        if (props.refreshTrigger !== null) {
            renderHeatmap();
        }
    },
);
</script>

<style scoped>
.heatmap-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Arial, sans-serif;
    color: #333;
}
.canvas-wrapper {
    position: relative;

    /* border-radius: 8px; */
    overflow: hidden;
    background-color: #f0f4f8;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 10%);
}
canvas {
    cursor: cell;
    display: block;
}
.coordinates {
    position: absolute;
    bottom: 8px;
    left: 8px;
    z-index: 10;
    padding: 4px 8px;

    /* border-radius: 4px; */
    font-size: 0.8rem;
    color: white;
    background: rgba(0, 0, 0, 70%);
}
.tooltip {
    position: fixed;
    z-index: 100;
    padding: 10px;

    /* box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3); */
    max-width: 220px;
    font-size: 0.9rem;
    border-radius: 6px;
    color: white;
    background: rgba(0, 0, 0, 90%);
    opacity: 0;
    transition: opacity 0.2s;
    pointer-events: none;

    /* border: 1px solid #ddd; */
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
    margin: 4px 0;
    white-space: nowrap;
}
.controls {
    margin-top: 16px;
    width: 100%;
    text-align: center;
}
.data-info {
    margin-bottom: 8px;
    font-size: 0.9rem;
    font-family: monospace;
    color: #555;
}
.btn-group {
    display: flex;
    gap: 10px;
    justify-content: center;
    flex-wrap: wrap;
}
button {
    padding: 6px 12px;
    font-size: 0.9rem;
    border: none;
    border-radius: 4px;
    color: white;
    background: #007bff;
    cursor: pointer;
}
button:hover {
    background: #0056b3;
}
.legend {
    margin-top: 12px;
    width: 100%;
    max-width: 300px;
}
.color-scale {
    height: 16px;
    border-radius: 4px;
    background: linear-gradient(to right, #08315f 0%, #4588bb 10%, #85bee3 20%, #bedcf4 30%, #e4d7dc 40%, #fcdfda 50%, #f9b6a2 60%, #f97860 70%, #c81626 80%, #af000f 90%);
    box-shadow: 0 1px 4px rgba(0, 0, 0, 20%);
}
.color-labels {
    display: flex;
    justify-content: space-between;
    margin-top: 4px;
    font-size: 0.8rem;
    color: #666;
}
</style>
