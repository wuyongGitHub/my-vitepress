<!--
 * @Author: wyk
 * @Date: 2024-05-16 14:44:35
 * @LastEditTime: 2024-08-30 11:10:37
 * @Description:
-->
<template>
    <div>
        <Button>默认按钮</Button>
        <Button type="primary">主要按钮</Button>
        <Button type="success">成功按钮</Button>
        <Button type="info">信息按钮</Button>
        <Button type="warning">警告按钮</Button>
        <Button type="danger">危险按钮</Button>
        <br />
    </div>
</template>

<script setup lang="ts">
defineOptions({ name: "WyButton" });
</script>

<style lang="scss" scoped></style>
