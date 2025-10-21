<!--
 * @Author: wyk
 * @Date: 2024-09-16 14:44:35
 * @LastEditTime: 2024-08-30 11:10:37
 * @Description:
-->
<template>
    <div>
        <HeatMap2
            ref="heatmap3D"
            :cameraPosition="{
                x: 18,
                y: 18,
                z: 0,
            }"
            :data="heatmapData"
            width="675"
            height="475"
            base-size="0.5"
            max-height="5"
            :auto-animate="true"
            @refresh="onHeatmapRefresh" />
        <div style="margin-top: 10px">
            <Button @click="refreshHeatmap">刷新热力图</Button>
        </div>
    </div>
</template>

<script setup lang="ts">
defineOptions({ name: "JBHeatMap2" });
const heatmap3D = ref(null);

function generateData(rows: number, cols: number): number[][] {
    const totalElements = rows * cols;

    // 计算各区间元素数量（四舍五入）
    const count_40_to_50 = Math.round(totalElements * 0.02); // 2%
    const count_20_to_30 = Math.round(totalElements * 0.2); // 20%
    const count_10_to_20 = Math.round(totalElements * 0.3); // 30%
    const count_1_to_5 = totalElements - count_40_to_50 - count_20_to_30 - count_10_to_20; // 剩余 48%

    console.log({
        total: totalElements,
        "40-50": count_40_to_50,
        "20-30": count_20_to_30,
        "10-20": count_10_to_20,
        "1-5": count_1_to_5,
    });

    // 初始化一个扁平数组用于存储所有值
    const values: number[] = [];

    // 生成指定数量的随机值，加入数组

    // 1. 40–50 区间（含）
    for (let i = 0; i < count_40_to_50; i++) {
        values.push(Math.floor(Math.random() * 11) + 40); // 40~50
    }

    // 2. 20–30 区间（含）
    for (let i = 0; i < count_20_to_30; i++) {
        values.push(Math.floor(Math.random() * 11) + 20); // 20~30
    }

    // 3. 10–20 区间（含）
    for (let i = 0; i < count_10_to_20; i++) {
        values.push(Math.floor(Math.random() * 11) + 10); // 10~20
    }

    // 4. 1–5 区间（含）
    for (let i = 0; i < count_1_to_5; i++) {
        values.push(Math.floor(Math.random() * 5) + 1); // 1~5
    }

    // 打乱数组顺序，避免区域聚集
    // Fisher-Yates 洗牌算法
    for (let i = values.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [values[i], values[j]] = [values[j], values[i]];
    }

    // 转为二维数组
    const dataGrid: number[][] = [];
    let index = 0;
    for (let i = 0; i < rows; i++) {
        const row: number[] = [];
        for (let j = 0; j < cols; j++) {
            row.push(values[index++]);
        }
        dataGrid.push(row);
    }

    return dataGrid;
}

// 使用示例
const heatmapData = ref(generateData(100, 200)); // 初始化50*100的热力图数据，其中2%的值为50，其他为5
function toggleAnimation() {
    heatmap3D.value.toggleAnimation();
}

function refreshHeatmap() {
    heatmapData.value = generateData(100, 200); // 刷新为新的30*70热力图数据
    heatmap3D.value.refresh(); // 调用组件暴露的方法，刷新热力图
}

function onHeatmapRefresh() {
    console.log("热力图已刷新");
}
</script>

<style lang="scss" scoped></style>
