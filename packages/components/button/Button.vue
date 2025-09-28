<!--
 * @Author: wyk
 * @Date: 2024-05-14 15:33:01
 * @LastEditTime: 2024-05-24 09:39:18
 * @Description:
-->
<template>
    <div class="bq-button">
        <span>-测试按钮-6</span>
        -----------------------------
        <el-button>Default</el-button>
        <el-button type="primary">Primary</el-button>
        <el-button type="success">Success</el-button>
        <el-button type="info">Info</el-button>
        <el-button type="warning">Warning</el-button>
        <el-button type="danger">Danger</el-button>
        <el-button>中文</el-button>
        -----------------------------
        <a-button type="primary">Primary</a-button>
        <a-button>Secondary</a-button>
        <a-button type="dashed">Dashed</a-button>
        <a-button type="outline">Outline</a-button>
        <a-button type="text">Text</a-button>
    </div>
</template>

<script setup lang="ts">
import "@/styles/element/index.scss";
defineOptions({
    name: "BqButton",
});
</script>
<style lang="scss" scoped></style>
