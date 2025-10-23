<template>
    <div class="defect-annotation-viewer">
        <!-- Canvas 容器 -->
        <div class="canvas-container" :style="{ width: containerWidth + 'px', height: containerHeight + 'px' }">
            <canvas ref="canvas" :width="containerWidth" :height="containerHeight"></canvas>

            <!-- 加载遮罩 -->
            <div v-if="loading" class="loading-overlay">
                <div class="spinner"></div>
            </div>
        </div>

        <!-- 图例 -->
        <div v-if="showLegend" class="legend">
            <div class="legend-item">
                <div class="color-box title-annotation"></div>
                <span>{{ titleLabel }}</span>
            </div>
            <div class="legend-item">
                <div class="color-box shape-annotation"></div>
                <span>{{ shapeLabel }}</span>
            </div>
        </div>

        <!-- 状态提示 -->
        <div v-if="showStatus" class="status">{{ status }}</div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch, defineProps, withDefaults, defineExpose } from "vue";
defineOptions({ name: "ImageAnnotationView" });
// ========================
// Props 定义
// ========================
interface Position {
    x: number;
    y: number;
    title?: string;
}

interface ShapePosition {
    leftTopX: number;
    leftTopY: number;
    rightBottomX: number;
    rightBottomY: number;
}

const props = withDefaults(
    defineProps<{
        // 图片 URL
        imageUrl: string;
        // 标注数据
        titleData?: Position[];
        shapeData?: ShapePosition[];
        // 容器尺寸
        width?: number;
        height?: number;
        // 是否显示图例和状态
        showLegend?: boolean;
        showStatus?: boolean;
        // 自定义标签
        titleLabel?: string;
        shapeLabel?: string;
    }>(),
    {
        titleData: () => [],
        shapeData: () => [],
        width: 692,
        height: 735,
        showLegend: true,
        showStatus: true,
        titleLabel: "文字标注",
        shapeLabel: "形状标注",
    },
);

// ========================
// 内部状态
// ========================
const canvas = ref<HTMLCanvasElement | null>(null);
const ctx = ref<CanvasRenderingContext2D | null>(null);
const image = new Image();
const loading = ref(false);
const status = ref("等待加载图片...");

const containerWidth = props.width;
const containerHeight = props.height;

let scale = 1;
let offsetX = 0;
let offsetY = 0;

// ========================
// 初始化
// ========================
onMounted(() => {
    if (canvas.value) {
        ctx.value = canvas.value.getContext("2d") as CanvasRenderingContext2D | null;
    }
    loadImage();
});

// ========================
// 图片加载与缩放
// ========================
function showLoading() {
    loading.value = true;
    status.value = "正在加载图片...";
}

function hideLoading() {
    loading.value = false;
}

function calculateImagePosition(img: HTMLImageElement) {
    const imgRatio = img.width / img.height;
    const canvasRatio = containerWidth / containerHeight;

    if (imgRatio > canvasRatio) {
        // 以宽度为基准
        scale = containerWidth / img.width;
        offsetX = 0;
        offsetY = (containerHeight - img.height * scale) / 2;
    } else {
        // 以高度为基准
        scale = containerHeight / img.height;
        offsetX = (containerWidth - img.width * scale) / 2;
        offsetY = 0;
    }
}

function drawImage() {
    if (!ctx.value || !image.complete) return;

    ctx.value.clearRect(0, 0, containerWidth, containerHeight);
    ctx.value.drawImage(image, offsetX, offsetY, image.width * scale, image.height * scale);
}

function loadImage() {
    if (!props.imageUrl) {
        status.value = "缺少图片 URL";
        return;
    }

    showLoading();
    // image.src = props.imageUrl;
    // 在 imageUrl 后添加一个随机数或时间戳作为查询参数
    image.src = `${props.imageUrl}?t=${Date.now()}`;

    image.onload = () => {
        calculateImagePosition(image);
        drawImage();
        hideLoading();
        status.value = "图片加载完成";
        // 自动绘制标注
        refreshAnnotations();
    };

    image.onerror = () => {
        hideLoading();
        status.value = "图片加载失败";
    };
}

// ========================
// 绘制标注
// ========================
function drawTitleAnnotations() {
    if (!ctx.value || !props.titleData.length) return;

    ctx.value.font = "14px Arial";
    ctx.value.fillStyle = "#2ecc71";
    ctx.value.textBaseline = "top";

    props.titleData.forEach((pos) => {
        const x = offsetX + pos.x * scale;
        const y = offsetY + pos.y * scale;
        if (ctx.value) {
            ctx.value.fillText(pos.title || "", x, y);
        }
    });
}

function drawShapeAnnotations() {
    if (!ctx.value || !props.shapeData.length) return;

    ctx.value.strokeStyle = "#e74c3c";
    ctx.value.lineWidth = 2;

    props.shapeData.forEach((pos) => {
        const x1 = offsetX + pos.leftTopX * scale;
        const y1 = offsetY + pos.leftTopY * scale;
        const x2 = offsetX + pos.rightBottomX * scale;
        const y2 = offsetY + pos.rightBottomY * scale;

        const width = x2 - x1;
        const height = y2 - y1;

        // 绘制矩形框
        if (ctx.value) {
            ctx.value.strokeRect(x1, y1, width, height);
        }

        // 添加文字标签
        if (ctx.value) {
            const text = `瑕疵 (${Math.round(width / scale)}×${Math.round(height / scale)})`;
            const textWidth = ctx.value.measureText(text).width;

            // 白色背景
            ctx.value.fillStyle = "rgba(255, 255, 255, 0.8)";
            ctx.value.fillRect(x1, y1 - 20, textWidth + 10, 18);

            // 红色文字
            ctx.value.fillStyle = "#e74c3c";
            ctx.value.font = "12px Arial";
            ctx.value.fillText(text, x1 + 5, y1 - 17);
        }
    });
}
// ========================
// 公共方法（可通过 ref 暴露调用）
// ========================
function refreshAnnotations() {
    // if (!image.complete) {
    //     status.value = "图片未加载完成";
    //     return;
    // }
    // drawImage();
    // drawTitleAnnotations();
    // drawShapeAnnotations();
    // status.value = `标注已刷新 - 文字: ${props.titleData.length}, 形状: ${props.shapeData.length}`;
    if (!ctx.value) {
        status.value = "Canvas 上下文未初始化";
        return;
    }

    // 不再依赖 image.complete，而是只要 ctx 存在就尝试绘制
    drawImage(); // 会根据当前 scale/offset 重绘背景
    drawTitleAnnotations();
    drawShapeAnnotations();

    status.value = `标注已刷新 - 文字: ${props.titleData.length}, 形状: ${props.shapeData.length}`;
}

function resetView() {
    drawImage();
    status.value = "视图已重置";
}

// ========================
// 监听 props 变化（比如外部更新了数据）
// ========================
watch(
    () => [props.titleData, props.shapeData],
    () => {
        console.log("Data changed, refreshing annotations...");
        refreshAnnotations();
    },
    { deep: true },
);

// 如果 imageUrl 改变，重新加载
watch(
    () => props.imageUrl,
    () => {
        console.log("imageUrl changed:", props.imageUrl);
        loadImage();
    },
);

// ========================
// 暴露给父组件使用的方法
// ========================
defineExpose({
    refreshAnnotations,
    resetView,
});
</script>

<style scoped>
.defect-annotation-viewer {
    display: inline-block;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.canvas-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border: 1px solid #e1e5e9;
    border-radius: 8px;
    background-color: #f8f9fa;
}
canvas {
    display: block;
    border-radius: 4px;
    background-color: #f0f2f5;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 10%);
}
.loading-overlay {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 80%);
}
.spinner {
    width: 40px;
    height: 40px;
    border: 4px solid rgba(52, 152, 219, 20%);
    border-top: 4px solid #3498db;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
.legend {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    gap: 15px;
    flex-wrap: wrap;
}
.legend-item {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 13px;
    color: #555;
}
.color-box {
    width: 16px;
    height: 16px;
    border-radius: 3px;
}
.title-annotation {
    border: 2px solid #2ecc71;
    background-color: rgba(46, 204, 113, 30%);
}
.shape-annotation {
    border: 2px solid #e74c3c;
    background-color: rgba(231, 76, 60, 30%);
}
.status {
    margin-top: 8px;
    font-size: 13px;
    text-align: center;
    color: #7f8c8d;
    font-style: italic;
}
</style>
