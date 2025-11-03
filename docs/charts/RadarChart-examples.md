<!--
 * @Author: wyk
 * @Date: 2025-10-14 15:30:17
 * @LastEditTime: 2025-10-27 16:51:04
 * @Description:
-->

# 雷达图

::: tip

<!-- 使用该组件需要提前安装threeJs、当前所用版本0.164.1 -->

雷达图 <br />
:::

**雷达图组件`<JBRadarChart />`**
<JBRadarChart></JBRadarChart>

**代码示例**

```vue
<!--
 * @Author: wyk
 * @Date: 2025-10-16 14:44:35
 * @LastEditTime: 2024-08-30 11:10:37
 * @Description:
 * 
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
```

## 参数说明

| 参数名称   | 参数含义     | 说明                                                                                        |
| ---------- | ------------ | ------------------------------------------------------------------------------------------- |
| names      | Array:String | 雷达图每个维度的名称，如 ['学习能力', '沟通能力']                                           |
| maxValues  | Array:Number | 每个维度的最大值，决定雷达轴长度，需与 names 长度一致                                       |
| seriesData | Array:Object | 数据系列数组，每个对象包含name: 系列名,value: 数值数组,color: 显示颜色                      |
| width      | String       | 图表容器的宽度，支持 CSS 单位（如 "600px"、"80%" 等）。                                     |
| height     | String       | 图表容器的高度，支持 CSS 单位（如 "500px"、"100%" 等）。                                    |
| showLegend | Boolean      | 是否显示图例（legend）。图例用于标识不同数据系列的颜色和名称。设置为 false 时将不显示图例。 |

## 暴露方法说明

| 方法名称   | 说明                                                                                                    |
| ---------- | ------------------------------------------------------------------------------------------------------- |
| getChart() | 获取底层的 ECharts 实例，用于调用 ECharts 提供的高级 API。 支持手动刷新、导出图片、添加事件监听等操作。 |

## 注意事项

1. 数据一致性：names、maxValues 的长度必须与 seriesData[i].value 的长度一致，否则可能导致图表显示异常。
2. 响应式更新：当 props 中的数据发生变化时（如 seriesData 更新），图表会自动重新渲染。
3. 性能建议：若数据量较大或更新频繁，建议对 seriesData 做好防抖或节流处理，避免频繁触发 watch 导致性能下降。
4. 样式隔离：组件样式使用 scoped，不会影响外部样式，也不受外部样式干扰。
