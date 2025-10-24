# 前端组件库版本控制与私有仓库发布规范

> **项目名称：** JB-DESIGN-UI  
> **维护团队：** 前端架构组  
> **最后更新：** 2025年10月20日  
> **适用范围：** 所有基于 npm + Nexus 的前端组件库项目

---

## 目标

1. 统一组件库版本管理流程
2. 规范发布到私有 NPM 仓库（Nexus）的操作
3. 支持多环境（开发、测试、预发、生产）发布
4. 保障版本稳定性与可追溯性
5. 防止错误发布或覆盖线上版本

---

## 私有 NPM 仓库地址

| 环境              | Registry 地址                                             |
| ----------------- | --------------------------------------------------------- |
| 开发环境（dev）   | `https://nexus.atjuboyun.com/repository/npm-hosted-dev/`  |
| 测试环境（test）  | `https://nexus.atjuboyun.com/repository/npm-hosted-test/` |
| 预发布环境（pre） | `https://nexus.atjuboyun.com/repository/npm-hosted-pre/`  |
| 生产环境（prod）  | `https://nexus.atjuboyun.com/repository/npm-hosted/`      |

> **登录认证**
>
> 所有发布操作需提前配置 `.npmrc` 并登录：
>
> ```bash
> npm login --registry=https://nexus.atjuboyun.com/repository/npm-hosted/
> ```

---

## 版本号规范（Semantic Versioning）

采用 [SemVer 2.0.0](https://semver.org/) 语义化版本规范：  
**MAJOR.MINOR.PATCH**

| 版本位  | 变更说明             | 示例              |
| ------- | -------------------- | ----------------- |
| `MAJOR` | 不兼容的 API 修改    | `1.0.0` → `2.0.0` |
| `MINOR` | 新功能（向下兼容）   | `1.2.0` → `1.3.0` |
| `PATCH` | 修复 bug（向下兼容） | `1.2.3` → `1.2.4` |

> **禁止手动修改 `package.json` 中的 `version` 字段！**  
> 请使用 `npm version` 命令自动更新并生成 Git Tag。

---

## 发布脚本配置（`package.json`）

```json
{
    "name": "JB-design",
    "version": "1.0.7",
    "description": "JB组件库",
    "main": "./lib/index.js",
    "module": "./es/index.js",
    "unpkg": "./dist/index.js",
    "typings": "./es/index.d.ts",
    "types": "./es/index.d.ts",
    "style": "dist/index.css",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "JB-design:dev": "npm publish --registry https://nexus.atjuboyun.com/repository/npm-hosted-dev/",
        "JB-design:test": "npm publish --registry https://nexus.atjuboyun.com/repository/npm-hosted-test/",
        "JB-design:pre": "npm publish --registry https://nexus.atjuboyun.com/repository/npm-hosted-pre/",
        "JB-design:prod": "npm publish --registry https://nexus.atjuboyun.com/repository/npm-hosted/"
    },
    "homepage": "https://wuyonggithub.github.io/",
    "sideEffects": ["dist/*", "*.css", "*.md"],
    "keywords": ["fit", "适配", "组件库", "scale", "ScaleBox", "vue3"],
    "vetur": {
        "tags": "tags.json",
        "attributes": "attributes.json"
    },
    "author": "wyk",
    "license": "ISC"
}
```

## 发布流程（标准操作）

### 1. 开发阶段（本地）

```
git checkout dev
git pull origin dev

# 开发完成后
git add .
git commit -m "feat: 新增 Button loading 状态"
git push origin dev
```

### 2. 发布开发版（供本地调试）

```
npm run JB-design:dev
```

**供本地项目通过以下方式安装测试：**

```npm
npm install JB-design@latest --registry https://nexus.atjuboyun.com/repository/npm-hosted-dev/
```

### 3. 发布测试版（测试环境）

```
git checkout test
git merge dev
git push origin test
npm run JB-design:test
```

**通知测试团队使用：**

```
npm install JB-design@latest --registry https://nexus.atjuboyun.com/repository/npm-hosted-test/
```

### 4. 发布预发布版（Pre-release）

# 创建预发布版本（如 1.2.3-rc.1）

```
npm version 1.2.3-rc.1 -m "chore: pre-release version %s"
# 发布到 pre 仓库
npm publish --registry https://nexus.atjuboyun.com/repository/npm-hosted-pre/
```

用于灰度发布或内部体验，不推荐线上使用。

### 5. 发布正式版（Production）

```
git checkout main
git merge test
git push origin main

npm run version:patch # 或 minor / major
npm run JB-design:prod
```

⚠️ 生产发布必须由负责人操作，且需双人复核。
