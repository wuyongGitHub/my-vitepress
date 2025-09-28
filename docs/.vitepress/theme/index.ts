import Theme from "vitepress/theme";
import { App, h, defineAsyncComponent } from "vue";
import asyncComponents from "@/examples/index";
import { domResize } from "@/directives/domResize";

// 样式
import "element-plus/dist/index.css";
import "@arco-design/web-vue/dist/arco.css";
import "../../../packages/styles/element/index.scss";

// 必须引入并注册组件库
import ElementPlus from "element-plus";
import ArcoVue from "@arco-design/web-vue";

const BqBasicsDocsImage = defineAsyncComponent(() => asyncComponents.then((Components) => Components["BqBasicsDocsImage"]));

export default {
    ...Theme,
    Layout() {
        return h(Theme.Layout, null, {
            "home-hero-image": () => {
                return h(BqBasicsDocsImage);
            },
        });
    },
    async enhanceApp({ app }: { app: App }) {
        let Components = await asyncComponents;
        app.directive("domResize", domResize);

        //  注册 UI 库
        app.use(ElementPlus);
        app.use(ArcoVue);

        //  注册你二次封装的组件
        for (let i in Components) {
            app.use(Components[i]);
        }
    },
};
