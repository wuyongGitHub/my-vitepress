<!--
 * @Author: wyk
 * @Date: 2024-09-16 14:44:35
 * @LastEditTime: 2024-08-30 11:10:37
 * @Description:
 * 使用方式就是把JBHeatMap改为JBHeatMap2
-->
<template>
    <div>
        <HeatMap2D
            :heatmapData="myHeatmapData"
            :width="612"
            :height="831"
            :block-width="36"
            :block-height="36"
            :refresh-trigger="refreshKey"
            :show-controls="true"
            :show-legend="false" />
        <button @click="refreshHeatmap">刷新热力图</button>
    </div>
</template>

<script setup lang="ts">
defineOptions({ name: "JBHeatMap2D" });
import { ref } from "vue";
// 计算行列数
const cols = Math.floor(612 / 36); // 17
const rows = Math.floor(831 / 36); // 23
const refreshKey = ref(0);
const myHeatmapData = ref(Array.from({ length: rows }, () => Array.from({ length: cols }, () => (Math.random() < 0.2 ? Math.floor(Math.random() * 100) : 0))));
const refreshHeatmap = () => {
    refreshKey.value += 1; // 触发刷新
};
</script>

<style lang="scss" scoped></style>
