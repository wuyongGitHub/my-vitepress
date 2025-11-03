<!--
 * @Author: wyk
 * @Date: 2025-10-14 15:30:17
 * @LastEditTime: 2025-10-27 16:51:04
 * @Description:
-->

# 2D热力图

::: tip

<!-- 使用该组件需要提前安装threeJs、当前所用版本0.164.1 -->

HeatMap2D 是一个用于展示二维热图的 Vue 组件。它允许用户通过可视化的方式查看和操作数据，支持自定义尺寸、显示控制面板和颜色图例，并提供了对热图数据的基本操作功能。
:::

**2D热力图`<JBHeatMap2D />`**
<JBHeatMap2D></JBHeatMap2D>

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
```

## 参数说明

| 参数名称       | 参数含义                                | 说明                                                                                      |
| -------------- | --------------------------------------- | ----------------------------------------------------------------------------------------- |
| width          | Number，默认值：612                     | 热图容器的宽度，单位为像素。                                                              |
| height         | Number，默认值：831                     | 热图容器的高度，单位为像素。                                                              |
| blockWidth     | Number，默认值：36                      | 每个热力块的宽度，单位为像素。                                                            |
| blockHeight    | Number，默认值：36                      | 每个热力块的高度，单位为像素。                                                            |
| refreshTrigger | [Number, String, Boolean]，默认值：null | 用于触发热图数据刷新的一个标记。当这个值发生变化时，热图会根据新的 heatmapData 重新渲染。 |
| showControls   | Boolean，默认值：false                  | 是否显示控制面板。控制面板包括随机数据、重置和清除按钮。                                  |
| showLegend     | Boolean，默认值：false                  | 是否显示颜色图例。颜色图例帮助解释不同颜色代表的数值范围。                                |
| heatmapData    | Array，默认值：[]                       | 热图的数据源。它是一个二维数组，其中每个元素代表一个热力块的值。                          |

## 方法说明

组件内部暴露了以下方法，但是请注意这些方法通常不会直接暴露给父组件使用。如果需要在父组件中调用这些方法，可以通过 Vue 的 ref 和 $refs 来实现。

| 方法名称                                           | 说明                                                                       |
| -------------------------------------------------- | -------------------------------------------------------------------------- |
| randomizeData()                                    | 将热图中的数据随机化，以一定概率填充0到100之间的随机数作为热力块的值。     |
| resetData()                                        | 重置热图数据，并添加几个预设的热点区域。                                   |
| clearData()                                        | 清除所有热力块的数据，使它们的值归零。                                     |
| addHotspot(centerX, centerY, radius, intensityVal) | 向指定位置添加一个热点。参数分别为热点中心的X坐标、Y坐标、半径以及强度值。 |
| renderHeatmap()                                    | 根据当前的 heatData 数据重新绘制热图。                                     |

## 注意事项

1. 确保传入的 heatmapData 是一个有效的二维数组，否则可能会导致渲染问题。
2. 如果需要外部控制组件的状态（如调用内部方法），可以通过 ref 和 $refs 实现。
