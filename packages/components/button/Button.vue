<!--
 * @Author: wyk
 * @Date: 2024-05-14 15:33:01
 * @LastEditTime: 2024-05-24 09:39:18
 * @Description:
-->
<template>
    <ElButton v-bind="attrs" :class="[attrs.class, customClass]" @click="handleClick">
        <slot />
    </ElButton>
</template>

<script setup lang="ts">
defineOptions({
    name: "WyButton",
});
import { useAttrs, computed } from "vue";

// 获取所有透传的属性（class, style, onClick, loading 等）
const attrs = useAttrs();

// 可选：扩展自定义 class
const customClass = computed(() => {
    return ["wy-button"]; // 你可以加一些全局定制 class
});

// 可选：处理自定义逻辑（如埋点、权限）
const handleClick = (e: Event) => {
    // 先触发原始 click
    if (typeof attrs.onClick === "function") {
        attrs.onClick(e);
    }

    // 自定义逻辑：埋点
    console.log("[Button Click]", {
        type: attrs.type,
        text: (e.target as HTMLElement).textContent?.trim(),
    });

    //  自定义逻辑：权限校验
    // if (attrs.permission && !checkPermission(attrs.permission)) {
    //   e.preventDefault()
    //   return
    // }
};
</script>
<style lang="scss" scoped>
@import "../../theme-chalk/button";
</style>
