<!--
 * @Author: wyk
 * @Date: 2024-09-23 09:02:13
 * @LastEditTime: 2024-06-04 18:22:00
 * @Description:
-->

# 操作指南

## npm run \*\*指南

**执行以下命令进行启动预览组件文档平台**

```
npm run docs:dev
```

**执行以下命令进行单独组件预览与测试**

```
npm run start
```

## 打包指南

**进入`./build`目录，执行`npm run build`后进行打包组件库**

```
    npm run build
```

**进入`./build`目录，执行一下命令进行发布到npm私服组件库的各个环境仓库中**

```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "WY-design:dev": "npm publish --registry https://nexus.atjuboyun.com/repository/npm-hosted-dev/",
    "WY-design:test": "npm publish --registry https://nexus.atjuboyun.com/repository/npm-hosted-test/",
    "WY-design:prod": "npm publish --registry https://nexus.atjuboyun.com/repository/npm-hosted/",
    "WY-design:pre": "npm publish --registry https://nexus.atjuboyun.com/repository/npm-hosted-pre/"
},
```

## 使用包管理器

**我们建议您使用包管理器（如 NPM、Yarn 或 pnpm）安装 WY-design**

```
# 选择一个你喜欢的包管理器
# NPM
$ npm install WY-design --save

# Yarn
$ yarn add WY-design

# pnpm
$ pnpm install WY-design

```

## 完整引入

如果对打包后的文件大小不是很在乎，那么使用完整导入会更方便,但你需要提前下载好相关组件的依赖。

```ts
// main.ts
import { createApp } from "vue";
import JbDesign from "WY-design";
import "WY-design/dist/index.css";
import App from "./App.vue";

const app = createApp(App);

app.use(JbDesign);
app.mount("#app");
```

## 按需引入 ⭐️

1、您需要使用额外的插件来导入要使用的组件。

首先你需要安装`unplugin-vue-components`

```shell
pnpm add  unplugin-vue-components -D
```

2、复制该解析器

```ts
const JbDesignResolver = () => {
    return {
        type: "component" as const,
        resolve: (name) => {
            if (name.startsWith("Bq")) {
                const pathName = name.slice(2).toLowerCase();
                return {
                    importName: name,
                    from: "WY-design",
                    path: `WY-design/es/components/${pathName}/index.js`,
                    sideEffects: `WY-design/es/components/${pathName}/${name.slice(2)}.css`,
                };
            }
        },
    };
};
```

3、在`unplugin-vue-components`引用该解析器

```ts
// vite.config.ts
import Components from "unplugin-vue-components/vite";
import { JbDesignResolver } from "xxxx-你存储JbDesignResolver的文件";

export default defineConfig({
    // ...
    plugins: [
        Components({
            //...
            resolvers: [JbDesignResolver()],
        }),
    ],
});
```

## 手动导入

`WY-design` 提供了基于 ES Module 的开箱即用的`Tree Shaking` 功能。

但你需要加载该插件vite-plugin-import，解决本地开发时的动态加载、代码如下：

```ts
export default function importPlugin() {
    const regStr = /(?<!\/\/.*|\/\*[\s\S]*?\*\/\s*)import\s*{\s*([^{}]+)\s*}\s*from\s*['"]WY-design['"]/g;
    return {
        name: "vite-plugin-import",
        enforce: "pre",
        transform: (code: string, id: string) => {
            if (id.endsWith(".vue")) {
                const str = code.replaceAll(regStr, (match, imports) => {
                    const list = imports.split(",");
                    const pathList: string[] = [];
                    list.forEach((item: string) => {
                        item = item.trim();
                        const name = item.slice(2).charAt(0).toLowerCase() + item.slice(3);
                        const str = `import ${item.trim()} from 'WY-design/es/components/${name.trim()}';
                        import 'WY-design/es/components/${name.trim()}/${item.trim().slice(2)}.css'`;
                        pathList.push(str);
                    });
                    return pathList.join(";");
                });
                return str;
            }
            return code;
        },
    };
}
```

::: warning
exclude中必须排除WY-design、因为 WY-design 存在第三方包，vite预加载会报错、当然如果已安装了WY-design所有组件需要的包、则不需要做该处理
:::

```ts{7}
// vite.config.ts
import Components from "unplugin-vue-components/vite";
import ViteImportPlugin from "./src/utils/vite-plugin-import";

export default defineConfig({
    optimizeDeps:{
        exclude: ["WY-design"],
    },
  // ...
  plugins: [
     ViteImportPlugin(),
  ],
})

```

## 关于Webpack构建的项目

支持`完整引入`和`按需导入`，但`手动导入`需要自行配置`babel-plugin-import` 详情见[文档](https://www.npmjs.com/package/babel-plugin-import)
