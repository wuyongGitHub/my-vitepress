<!--
 * @Author: wyk
 * @Date: 2025-10-14 15:30:17
 * @LastEditTime: 2025-10-27 16:51:04
 * @Description:
-->

# 3D热力图

::: tip

<!-- 使用该组件需要提前安装threeJs、当前所用版本0.164.1 -->

JBHeatMap3D 是一个用于展示三维热力图的 Vue 3 组件。它能够将二维数字数组转换为可视化的三维热力图，并提供了一系列可配置选项来满足不同的显示需求。<br />
:::

**热力图组件`<JBHeatMap />`**
<JBHeatMap></JBHeatMap>

**更流畅的3D热力图组件2`<JBHeatMap2 />`**
<JBHeatMap2></JBHeatMap2>

**代码示例**

```vue
<!--
 * @Author: wyk
 * @Date: 2025-10-16 14:44:35
 * @LastEditTime: 2024-08-30 11:10:37
 * @Description:
 * 使用方式就是把JBHeatMap改为JBHeatMap2
-->
<template>
    <div>
        <JBHeatMap
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
            <Button @click="refreshHeatmap">刷新热力图数据</Button>
        </div>
    </div>
</template>

<script setup lang="ts">
defineOptions({ name: "JBHeatMap" });
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
const heatmapData = ref(generateData(50, 100)); // 初始化50*100的热力图数据，其中2%的值为50，其他为5
function toggleAnimation() {
    heatmap3D.value.toggleAnimation();
}

function refreshHeatmap() {
    heatmapData.value = generateData(50, 100); // 刷新为新的30*70热力图数据
    heatmap3D.value.refresh(); // 调用组件暴露的方法，刷新热力图数据
}

function onHeatmapRefresh() {
    console.log("热力图已刷新");
}
</script>

<style lang="scss" scoped></style>
```

## 使用说明

JBHeatMap3D 是一个用于展示三维热力图的 Vue 3 组件。它能够将二维数字数组转换为可视化的三维热力图，并提供了一系列可配置选项来满足不同的显示需求。

## 参数说明

| 参数名称        | 参数含义               | 说明                                                                                                 |
| --------------- | ---------------------- | ---------------------------------------------------------------------------------------------------- |
| data            | 二维数组（number[][]） | 默认值为空数组。此属性用于接收热力图的数据。                                                         |
| width           | 数字（Number）         | 默认值为600。表示热力图容器的宽度。                                                                  |
| height          | 数字（Number）         | 默认值为500。表示热力图容器的高度。                                                                  |
| baseSize        | 数字（Number）         | 默认值为0.1。代表每个单元格的基础大小。                                                              |
| maxHeight       | 数字（Number）         | 默认值为3。代表热力图单元格的最大高度。                                                              |
| enableOrbit     | 布尔值（Boolean）      | 默认值为true。决定是否启用轨道控制器，以便用户可以交互式旋转视图。                                   |
| backgroundColor | 字符串（String）       | 默认值为"#0d1b2a"。设置背景颜色。                                                                    |
| showGridHelper  | 布尔值（Boolean）      | 默认值为true。决定是否显示网格辅助线。                                                               |
| showAxesHelper  | 布尔值（Boolean）      | 默认值为true。决定是否显示坐标轴辅助线。                                                             |
| isStandardColor | 布尔值（Boolean）      | 默认值为true。决定是否使用标准颜色模式来渲染热力图。                                                 |
| rotateAnimation | 布尔值（Boolean）      | 默认值为false。决定是否启用自动旋转动画。                                                            |
| rotationSpeed   | 数字（Number）         | 默认值为0.01。如果启用了旋转动画，这个参数控制旋转的速度。                                           |
| autoAnimate     | 布尔值（Boolean）      | 默认值为false。决定是否自动开始动画。                                                                |
| cameraPosition  | 对象（Object）         | 默认值为{ x: 5, y: 5, z: 5 }。该对象包含三个属性：x, y, 和 z，它们都是数字类型，用来设定相机的位置。 |

## 方法说明

| 方法名称        | 参数 | 返回值 | 说明                                                                                                                                                                                                                                                                                                                                                                                                    |
| --------------- | ---- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| refresh         | 无   | void   | 强制重新创建热力图。 当外部数据（props.data）发生变更，但组件未能自动更新时，调用此方法可以手动触发热力图的重新渲染。此方法会重新执行 createHeatmap 逻辑，包括数据验证、资源释放和网格重建。                                                                                                                                                                                                            |
| toggleAnimation | 无   | void   | 切换旋转动画的播放/暂停状态。 此方法会切换内部 isAnimating 的布尔值。需要注意的是，在当前组件逻辑中，动画的播放由 props.rotateAnimation 控制，此方法仅改变了 isAnimating 的状态，但并未直接改变 props.rotateAnimation。因此，如果需要此方法生效，可能需要在父组件中结合 isAnimating 的状态来动态修改 rotateAnimation 属性，或者修改组件内部逻辑，使其根据 isAnimating 来控制 animate 函数中的旋转行为。 |

## 注意事项

1. 数据格式：确保传递给 data 的参数是一个有效的二维数字数组。如果提供的数据不符合要求，组件会使用默认的示例数据代替。
2. 性能考虑：对于非常大的数据集（如超过100x100的矩阵），渲染可能会变得缓慢或导致浏览器卡顿。考虑对大数据集进行适当的预处理或降采样。
3. 相机位置：合理设置 cameraPosition 可以帮助你获得更好的视角效果。调整这些参数时，请注意它们会影响最终视觉效果。
4. 色彩模式：根据您的需求选择是否启用 isStandardColor。不同的色彩模式可能更适合不同的应用场景或数据分布情况。
5. 交互性：如果启用了 enableOrbit，用户可以通过鼠标交互来旋转和缩放视图。这可以极大地增强用户体验，但同时也可能增加复杂度，尤其是在移动设备上。
6. 动画控制：如果启用了 rotateAnimation 或 autoAnimate，请确保适当调整 rotationSpeed 和其他相关参数，以避免过快的动画造成视觉不适。
7. 通过遵循上述指南，您可以充分利用 JBHeatMap3D 组件的强大功能，创建出既美观又实用的三维热力图。
