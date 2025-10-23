<!--
 * @Author: wyk
 * @Date: 2024-09-16 14:44:35
 * @LastEditTime: 2024-08-30 11:10:37
 * @Description:
 * 使用方式就是把JBHeatMap改为JBHeatMap2
-->
<template>
    <div>
        <!-- 使用组件 -->
        <ImageAnnotationView
            ref="viewer"
            :image-url="imageUrl"
            :title-data="titlePositions"
            :shape-data="shapePositions"
            :width="800"
            :height="600"
            show-legend
            show-status
            title-label="样本位置"
            shape-label="瑕疵区域" />

        <!-- 控制按钮 -->
        <div style="margin-top: 20px; text-align: center">
            <button @click="$refs.viewer.refreshAnnotations()">刷新标注</button>
            <button @click="$refs.viewer.resetView()">重置视图</button>
        </div>
    </div>
</template>

<script setup lang="ts">
defineOptions({ name: "JBImageAnnotationView" });
import { ref } from "vue";

const imageUrl = "https://picsum.photos/800/600";

const titlePositions = ref([
    { x: 0, y: 100, title: "第1张样本" },
    { x: 0, y: 200, title: "第2张样本" },
]);

const shapePositions = ref([
    { leftTopX: 300, leftTopY: 400, rightBottomX: 350, rightBottomY: 450 },
    { leftTopX: 100, leftTopY: 200, rightBottomX: 150, rightBottomY: 250 },
]);

const viewer = ref(null);
</script>

<style lang="scss" scoped></style>
