import { defineConfig } from "vitepress";
import { resolveConfig, pluginsConfig } from "../../scripts/preview.ts";

export default defineConfig({
    title: "Wy-design",
    description: "组件库",
    base: "/",
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
            { text: "组件", link: "/components/guide-examples" },
            { text: "图表", link: "/charts/3dHeadMao" },
        ],
        // 使用路径映射来控制侧边栏
        sidebar: {
            // 当前路径以 /guide-examples 开头时，显示“组件”侧边栏
            "/components/": [
                {
                    text: "组件",
                    items: [
                        { text: "操作指南", link: "/components/guide-examples" },
                        { text: "按钮", link: "/components/btn-examples" },
                    ],
                },
            ],
            // 当前路径以 /demo 开头时，显示“图表”侧边栏
            "/charts/": [
                {
                    text: "图表",
                    items: [{ text: "3D热力图", link: "/charts/3dHeadMao.md" }],
                },
            ],
        },
        socialLinks: [{ icon: "github", link: "https://github.com/wuyongGitHub/wuyongGitHub.github.io" }],
    },
});
