<!--
 * @Author: wyk
 * @Date: 2024-09-23 09:02:13
 * @LastEditTime: 2024-06-04 18:22:00
 * @Description:
-->

# 操作指南

## 拉取代码仓库地址

https://gitlab.atjuboyun.com/cpyf/components/jb-design-ui

## 打包上传方式

**1. 进入`JB-design`项目根目录下执行以下命令**

```
npm run build
```

**2. 进入`JB-design/build`项目根目录下打开`package.json`文件，植入`scripts`内容的`npm publish`代码**

```ts
{
    "name": "JB-design", // 组件库的名称
    "version": "1.0.7",  // 版本
    "description": "JB组件库",  // 组件库的介绍
    "main": "./lib/index.js",
    "module": "./es/index.js",
    "unpkg": "./dist/index.js",
    "typings": "./es/index.d.ts",
    "types": "./es/index.d.ts",
    "style": "dist/index.css",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "JB-design:dev": "npm publish --registry https://nexus.atjuboyun.com/repository/npm-hosted-dev/",  // 开发环境
        "JB-design:test": "npm publish --registry https://nexus.atjuboyun.com/repository/npm-hosted-test/",  // 测试环境
        "JB-design:prod": "npm publish --registry https://nexus.atjuboyun.com/repository/npm-hosted/",  // 生产环境
        "JB-design:pre": "npm publish --registry https://nexus.atjuboyun.com/repository/npm-hosted-pre/" // 预发布环境
    },
    "homepage": "https://wuyonggithub.github.io/", // 项目的仓库地址
    "sideEffects": [
        "dist/*",
        "*.css",
        "*.md"
    ],
    "keywords": [
        "fit",
        "适配",
        "组件库",
        "scale",
        "ScaleBox",
        "vue3"
    ],
    "vetur": {
        "tags": "tags.json",
        "attributes": "attributes.json"
    },
    "author": "wyk",  // 作者
    "license": "ISC"
}
```

**3. 进入`JB-design/build`项目根目录下执行以下命令即可完成打包上传私服仓库**

```ts
npm run JB-design:dev // 将包上传到开发环境
or
npm run JB-design:dev // 将包上传到开发环境
or
npm run JB-design:dev // 将包上传到开发环境

```

**4. 查看是否上传成功，记住更新一版本就要在版本后面++1**

![nexus私服仓库是否已经上传](relatedImages/nexus.png)

## 包管理器安装使用

**我们建议您使用包管理器（如 NPM、Yarn 或 pnpm）安装 JB-design**

```
# 选择一个你喜欢的包管理器
# NPM
$ npm install JB-design@x.x.x --registry https://nexus.atjuboyun.com/repository/npm-hosted-dev/

# Yarn
$ yarn add JB-design --registry https://nexus.atjuboyun.com/repository/npm-hosted-dev/

# pnpm
$ pnpm install JB-design --registry https://nexus.atjuboyun.com/repository/npm-hosted-dev/

```

## 完整引入

如果对打包后的文件大小不是很在乎，那么使用完整导入会更方便,但你需要提前下载好相关组件的依赖。

```ts
// main.ts
import { createApp } from "vue";
import JbDesign from "JB-design";
import "JB-design/dist/index.css";
import App from "./App.vue";

const app = createApp(App);

app.use(JbDesign);
app.mount("#app");
```

## 按需引入

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
                    from: "JB-design",
                    path: `JB-design/es/components/${pathName}/index.js`,
                    sideEffects: `JB-design/es/components/${pathName}/${name.slice(2)}.css`,
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

`JB-design` 提供了基于 ES Module 的开箱即用的`Tree Shaking` 功能。

但你需要加载该插件vite-plugin-import，解决本地开发时的动态加载、代码如下：

```ts
export default function importPlugin() {
    const regStr = /(?<!\/\/.*|\/\*[\s\S]*?\*\/\s*)import\s*{\s*([^{}]+)\s*}\s*from\s*['"]JB-design['"]/g;
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
                        const str = `import ${item.trim()} from 'JB-design/es/components/${name.trim()}';
                        import 'JB-design/es/components/${name.trim()}/${item.trim().slice(2)}.css'`;
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
exclude中必须排除JB-design、因为 JB-design 存在第三方包，vite预加载会报错、当然如果已安装了JB-design所有组件需要的包、则不需要做该处理
:::

```ts{7}
// vite.config.ts
import Components from "unplugin-vue-components/vite";
import ViteImportPlugin from "./src/utils/vite-plugin-import";

export default defineConfig({
    optimizeDeps:{
        exclude: ["JB-design"],
    },
  // ...
  plugins: [
     ViteImportPlugin(),
  ],
})

```

## 关于Webpack构建的项目

支持`完整引入`和`按需导入`，但`手动导入`需要自行配置`babel-plugin-import` 详情见[文档](https://www.npmjs.com/package/babel-plugin-import)
