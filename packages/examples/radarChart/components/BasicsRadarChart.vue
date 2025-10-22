<!--
 * @Author: wyk
 * @Date: 2024-09-16 14:44:35
 * @LastEditTime: 2024-08-30 11:10:37
 * @Description:
 * 使用方式就是把JBHeatMap改为JBHeatMap2
-->
<template>
    <div>
        <RadarChart :names="dataname" :max-values="datatotal" :series-data="seriesData" :height="'500px'" />
    </div>
</template>

<script setup lang="ts">
defineOptions({ name: "JBRadarChart" });

const dataname = ["dooralarm", "金", "木", "水", "火", "土"];
const datatotal = [100, 100, 100, 100, 100, 100];

const seriesData = [
    {
        name: "一般",
        value: [30, 40, 50, 30, 20, 25],
        color: "#57f8d5",
    },
    {
        name: "重要",
        value: [40, 30, 25, 30, 40, 35],
        color: "#fe9c29",
    },
    {
        name: "紧急",
        value: [30, 40, 25, 40, 40, 40],
        color: "#dc3535",
    },
];
</script>

<style lang="scss" scoped></style>
