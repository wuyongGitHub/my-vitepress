import { defineConfig } from "vitepress";
import { resolveConfig, pluginsConfig } from "../../scripts/preview.ts";

export default defineConfig({
    title: "Wy-design",
    description: "组件库",
    base: "/", // GitHub 仓库名
    vite: {
        server: {
            port: 5175,
        },
        resolve: resolveConfig,
        plugins: pluginsConfig,
    },
    themeConfig: {
        nav: [
            { text: "Home", link: "/" },
            { text: "组件", link: "/guide-examples" },
            { text: "图表", link: "/demo" },
        ],
        sidebar: [
            // 第一组：组件
            {
                text: "组件",
                items: [
                    { text: "操作指南", link: "/guide-examples" },
                    { text: "按钮", link: "/btn-examples" },
                ],
            },
            // 第二组：图表
            {
                text: "图表",
                items: [{ text: "demo1", link: "/demo" }],
            },
        ],
        socialLinks: [{ icon: "github", link: "https://github.com/wuyongGitHub/wuyongGitHub.github.io" }],
    },
});
