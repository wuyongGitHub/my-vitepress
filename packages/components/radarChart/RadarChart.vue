<style scoped></style>
<template>
    <div ref="chartRef" :style="{ width: '100%', height: '400px' }"></div>
</template>

<script setup>
import { ref, onMounted, watch, onBeforeUnmount } from "vue";
import * as echarts from "echarts";

defineOptions({ name: "JBRadarChart" });

// 定义 props
const props = defineProps({
    // 数据名称（雷达图每个维度的名称）
    names: {
        type: Array,
        required: true,
    },
    // 每个维度的最大值
    maxValues: {
        type: Array,
        required: true,
    },
    // 各条数据，格式：[{ name: '系列名', value: [值数组], color: '#xxx' }]
    seriesData: {
        type: Array,
        required: true,
        validator: (val) => val.every((item) => item.name && Array.isArray(item.value) && item.color),
    },
    // 图表高度（可选）
    height: {
        type: String,
        default: "400px",
    },
});

// 图表实例引用
const chartRef = ref(null);
let chartInstance = null;

// 生成 ECharts option
const getOption = () => {
    const indicator = props.names.map((name, i) => ({
        name,
        max: props.maxValues[i],
    }));

    const series = props.seriesData.map((item) => ({
        name: item.name,
        type: "radar",
        symbol: "none",
        symbolSize: 6,
        areaStyle: {
            opacity: 0.3,
            color: item.color,
        },
        itemStyle: {
            color: item.color,
        },
        lineStyle: {
            color: item.color,
            width: 2,
        },
        data: [item.value],
    }));

    return {
        tooltip: {
            show: true,
            trigger: "item",
        },
        legend: {
            data: props.seriesData.map((s) => s.name),
            type: "scroll",
            orient: "vertical",
            icon: "roundRect",
            right: "20",
            top: "center",
            itemGap: 30,
            itemWidth: 16,
            itemHeight: 16,
            textStyle: {
                fontSize: 15,
                color: "#656565",
            },
        },
        radar: {
            center: ["50%", "50%"],
            radius: "65%",
            startAngle: 90,
            splitNumber: 5,
            splitArea: {
                areaStyle: {
                    color: ["#FFFFFF", "#F5F9FF"].reverse(),
                },
            },
            axisLabel: { show: false },
            axisLine: {
                show: true,
                lineStyle: { color: "#D2E4F8" },
            },
            splitLine: {
                show: true,
                lineStyle: { color: "#D2E4F8" },
            },
            name: {
                formatter: "{value}",
                textStyle: {
                    color: "#656565",
                    fontSize: 15,
                },
            },
            indicator,
        },
        series,
    };
};

// 初始化图表
const initChart = () => {
    if (!chartRef.value) return;
    chartInstance = echarts.init(chartRef.value);
    chartInstance.setOption(getOption());
};

// 监听数据变化，更新图表
watch(
    () => props,
    () => {
        if (chartInstance) {
            chartInstance.setOption(getOption(), true); // true: 清除旧配置
        }
    },
    { deep: true },
);

// 处理窗口 resize
const handleResize = () => {
    chartInstance?.resize();
};

onMounted(() => {
    initChart();
    window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
    window.removeEventListener("resize", handleResize);
    chartInstance?.dispose(); // 释放实例
});

// 暴露方法（可选）
defineExpose({
    getChart: () => chartInstance,
});
</script>

<style scoped></style>
