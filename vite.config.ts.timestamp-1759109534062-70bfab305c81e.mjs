// vite.config.ts
import { defineConfig } from "file:///F:/%E4%B8%AA%E4%BA%BA%E5%BC%80%E6%BA%90%E9%A1%B9%E7%9B%AE/hsk-Training-End/my-vitepress/node_modules/vite/dist/node/index.js";
import vue from "file:///F:/%E4%B8%AA%E4%BA%BA%E5%BC%80%E6%BA%90%E9%A1%B9%E7%9B%AE/hsk-Training-End/my-vitepress/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { resolve as resolve2 } from "path";

// scripts/preview.ts
import AutoImport from "file:///F:/%E4%B8%AA%E4%BA%BA%E5%BC%80%E6%BA%90%E9%A1%B9%E7%9B%AE/hsk-Training-End/my-vitepress/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///F:/%E4%B8%AA%E4%BA%BA%E5%BC%80%E6%BA%90%E9%A1%B9%E7%9B%AE/hsk-Training-End/my-vitepress/node_modules/unplugin-vue-components/dist/vite.js";
import progress from "file:///F:/%E4%B8%AA%E4%BA%BA%E5%BC%80%E6%BA%90%E9%A1%B9%E7%9B%AE/hsk-Training-End/my-vitepress/node_modules/vite-plugin-progress/dist/index.mjs";
import { resolve } from "path";
var __vite_injected_original_dirname = "F:\\\u4E2A\u4EBA\u5F00\u6E90\u9879\u76EE\\hsk-Training-End\\my-vitepress\\scripts";
var isProd = process.env.NODE_ENV === "production";
var pluginsConfig = [
  // progress({ srcDir: "packages" }),
  !isProd && progress({ srcDir: "packages" }),
  AutoImport({
    include: [
      /\.[tj]sx?$/,
      // .ts, .tsx, .js, .jsx
      /\.vue$/,
      /\.vue\?vue/,
      // .vue
      /\.md$/
      // .md
    ],
    // { "@/api/index": [["*", "api"]] }, { "@/store": [["default", "store"]] }
    imports: ["vue", "vue-router", "pinia"],
    dirs: [resolve(__vite_injected_original_dirname, "../packages/hooks")],
    dts: resolve(__vite_injected_original_dirname, "../packages/auto-imports.d.ts"),
    eslintrc: {
      enabled: false,
      filepath: resolve(__vite_injected_original_dirname, "../.eslintrc-auto-import.json"),
      globalsPropValue: true
    }
  }),
  Components({
    dts: resolve(__vite_injected_original_dirname, "../packages/components.d.ts"),
    dirs: [resolve(__vite_injected_original_dirname, "../packages/components")]
  })
];
var resolveConfig = {
  alias: [
    {
      find: "@",
      replacement: resolve(__vite_injected_original_dirname, "../packages")
    },
    {
      find: "@examples",
      replacement: resolve(__vite_injected_original_dirname, "../packages/examples")
    },
    {
      find: "@theme-chalk",
      replacement: resolve(__vite_injected_original_dirname, "../packages/theme-chalk")
    },
    {
      find: "public",
      replacement: resolve(__vite_injected_original_dirname, "../public")
    }
  ]
};

// vite.config.ts
import dts from "file:///F:/%E4%B8%AA%E4%BA%BA%E5%BC%80%E6%BA%90%E9%A1%B9%E7%9B%AE/hsk-Training-End/my-vitepress/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname2 = "F:\\\u4E2A\u4EBA\u5F00\u6E90\u9879\u76EE\\hsk-Training-End\\my-vitepress";
var vite_config_default = defineConfig(() => {
  return {
    build: {
      outDir: "build",
      cssCodeSplit: true,
      rollupOptions: {
        external: ["three", "@ant-design/icons-vue", "ant-design-vue", "element-plus", "unplugin-vue-components", "unplugin-auto-import", "vue"],
        output: [
          {
            format: "es",
            entryFileNames: "[name].js",
            exports: "named",
            name: "JbDesign",
            dir: "./build/dist"
          },
          {
            format: "es",
            entryFileNames: "[name].js",
            exports: "named",
            preserveModules: true,
            preserveModulesRoot: "packages",
            dir: "./build/es"
          },
          {
            format: "cjs",
            entryFileNames: "[name].js",
            exports: "named",
            preserveModules: true,
            preserveModulesRoot: "packages",
            dir: "./build/lib"
          }
        ]
      },
      lib: {
        entry: resolve2(__vite_injected_original_dirname2, "./packages/index.ts"),
        name: "JbDesign",
        fileName: (format) => `Wy-design.${format}.js`,
        formats: ["es", "cjs"]
      }
    },
    plugins: [
      vue(),
      dts({
        tsconfigPath: "./tsconfig.prod.json",
        outDir: "build/lib"
      }),
      dts({
        tsconfigPath: "./tsconfig.prod.json",
        outDir: "build/es"
      }),
      ...pluginsConfig
      // Inspect({
      //     build: true,
      //     outputDir: ".vite-inspect",
      // }),
    ],
    resolve: resolveConfig
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAic2NyaXB0cy9wcmV2aWV3LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRjpcXFxcXHU0RTJBXHU0RUJBXHU1RjAwXHU2RTkwXHU5ODc5XHU3NkVFXFxcXGhzay1UcmFpbmluZy1FbmRcXFxcbXktdml0ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJGOlxcXFxcdTRFMkFcdTRFQkFcdTVGMDBcdTZFOTBcdTk4NzlcdTc2RUVcXFxcaHNrLVRyYWluaW5nLUVuZFxcXFxteS12aXRlcHJlc3NcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Y6LyVFNCVCOCVBQSVFNCVCQSVCQSVFNSVCQyU4MCVFNiVCQSU5MCVFOSVBMSVCOSVFNyU5QiVBRS9oc2stVHJhaW5pbmctRW5kL215LXZpdGVwcmVzcy92aXRlLmNvbmZpZy50c1wiOy8qXG4gKiBAQXV0aG9yOiB3eWtcbiAqIEBEYXRlOiAyMDIyLTExLTIyIDEwOjIyOjQ4XG4gKiBATGFzdEVkaXRUaW1lOiAyMDI0LTA4LTMwIDE3OjE5OjA2XG4gKiBARGVzY3JpcHRpb246XG4gKi9cbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgdnVlIGZyb20gXCJAdml0ZWpzL3BsdWdpbi12dWVcIjtcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHsgcGx1Z2luc0NvbmZpZywgcmVzb2x2ZUNvbmZpZyB9IGZyb20gXCIuL3NjcmlwdHMvcHJldmlld1wiO1xuaW1wb3J0IEluc3BlY3QgZnJvbSBcInZpdGUtcGx1Z2luLWluc3BlY3RcIjtcbmltcG9ydCBkdHMgZnJvbSBcInZpdGUtcGx1Z2luLWR0c1wiO1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBidWlsZDoge1xuICAgICAgICAgICAgb3V0RGlyOiBcImJ1aWxkXCIsXG4gICAgICAgICAgICBjc3NDb2RlU3BsaXQ6IHRydWUsXG4gICAgICAgICAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgZXh0ZXJuYWw6IFtcInRocmVlXCIsIFwiQGFudC1kZXNpZ24vaWNvbnMtdnVlXCIsIFwiYW50LWRlc2lnbi12dWVcIiwgXCJlbGVtZW50LXBsdXNcIiwgXCJ1bnBsdWdpbi12dWUtY29tcG9uZW50c1wiLCBcInVucGx1Z2luLWF1dG8taW1wb3J0XCIsIFwidnVlXCJdLFxuICAgICAgICAgICAgICAgIG91dHB1dDogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IFwiZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5RmlsZU5hbWVzOiBcIltuYW1lXS5qc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwb3J0czogXCJuYW1lZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJKYkRlc2lnblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlyOiBcIi4vYnVpbGQvZGlzdFwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IFwiZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5RmlsZU5hbWVzOiBcIltuYW1lXS5qc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwb3J0czogXCJuYW1lZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VydmVNb2R1bGVzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VydmVNb2R1bGVzUm9vdDogXCJwYWNrYWdlc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlyOiBcIi4vYnVpbGQvZXNcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBcImNqc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnlGaWxlTmFtZXM6IFwiW25hbWVdLmpzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBvcnRzOiBcIm5hbWVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZXJ2ZU1vZHVsZXM6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZXJ2ZU1vZHVsZXNSb290OiBcInBhY2thZ2VzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXI6IFwiLi9idWlsZC9saWJcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxpYjoge1xuICAgICAgICAgICAgICAgIGVudHJ5OiByZXNvbHZlKF9fZGlybmFtZSwgXCIuL3BhY2thZ2VzL2luZGV4LnRzXCIpLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiSmJEZXNpZ25cIixcbiAgICAgICAgICAgICAgICBmaWxlTmFtZTogKGZvcm1hdCkgPT4gYFd5LWRlc2lnbi4ke2Zvcm1hdH0uanNgLFxuICAgICAgICAgICAgICAgIGZvcm1hdHM6IFtcImVzXCIsIFwiY2pzXCJdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgcGx1Z2luczogW1xuICAgICAgICAgICAgdnVlKCksXG4gICAgICAgICAgICBkdHMoe1xuICAgICAgICAgICAgICAgIHRzY29uZmlnUGF0aDogXCIuL3RzY29uZmlnLnByb2QuanNvblwiLFxuICAgICAgICAgICAgICAgIG91dERpcjogXCJidWlsZC9saWJcIixcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgZHRzKHtcbiAgICAgICAgICAgICAgICB0c2NvbmZpZ1BhdGg6IFwiLi90c2NvbmZpZy5wcm9kLmpzb25cIixcbiAgICAgICAgICAgICAgICBvdXREaXI6IFwiYnVpbGQvZXNcIixcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgLi4ucGx1Z2luc0NvbmZpZyxcbiAgICAgICAgICAgIC8vIEluc3BlY3Qoe1xuICAgICAgICAgICAgLy8gICAgIGJ1aWxkOiB0cnVlLFxuICAgICAgICAgICAgLy8gICAgIG91dHB1dERpcjogXCIudml0ZS1pbnNwZWN0XCIsXG4gICAgICAgICAgICAvLyB9KSxcbiAgICAgICAgXSxcbiAgICAgICAgcmVzb2x2ZTogcmVzb2x2ZUNvbmZpZyxcbiAgICB9O1xufSk7XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkY6XFxcXFx1NEUyQVx1NEVCQVx1NUYwMFx1NkU5MFx1OTg3OVx1NzZFRVxcXFxoc2stVHJhaW5pbmctRW5kXFxcXG15LXZpdGVwcmVzc1xcXFxzY3JpcHRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJGOlxcXFxcdTRFMkFcdTRFQkFcdTVGMDBcdTZFOTBcdTk4NzlcdTc2RUVcXFxcaHNrLVRyYWluaW5nLUVuZFxcXFxteS12aXRlcHJlc3NcXFxcc2NyaXB0c1xcXFxwcmV2aWV3LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9GOi8lRTQlQjglQUElRTQlQkElQkElRTUlQkMlODAlRTYlQkElOTAlRTklQTElQjklRTclOUIlQUUvaHNrLVRyYWluaW5nLUVuZC9teS12aXRlcHJlc3Mvc2NyaXB0cy9wcmV2aWV3LnRzXCI7LypcbiAqIEBBdXRob3I6IHd5a1xuICogQERhdGU6IDIwMjQtMDUtMTYgMTE6NDQ6MDFcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjQtMDgtMzAgMTc6MTY6NDJcbiAqIEBEZXNjcmlwdGlvbjpcbiAqL1xuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSBcInVucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGVcIjtcbmltcG9ydCBDb21wb25lbnRzIGZyb20gXCJ1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlXCI7XG5pbXBvcnQgcHJvZ3Jlc3MgZnJvbSBcInZpdGUtcGx1Z2luLXByb2dyZXNzXCI7XG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSBcInBhdGhcIjtcbmNvbnN0IGlzUHJvZCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIjtcblxuY29uc3QgcGx1Z2luc0NvbmZpZyA9IFtcbiAgICAvLyBwcm9ncmVzcyh7IHNyY0RpcjogXCJwYWNrYWdlc1wiIH0pLFxuICAgICFpc1Byb2QgJiYgcHJvZ3Jlc3MoeyBzcmNEaXI6IFwicGFja2FnZXNcIiB9KSxcbiAgICBBdXRvSW1wb3J0KHtcbiAgICAgICAgaW5jbHVkZTogW1xuICAgICAgICAgICAgL1xcLlt0al1zeD8kLywgLy8gLnRzLCAudHN4LCAuanMsIC5qc3hcbiAgICAgICAgICAgIC9cXC52dWUkLyxcbiAgICAgICAgICAgIC9cXC52dWVcXD92dWUvLCAvLyAudnVlXG4gICAgICAgICAgICAvXFwubWQkLywgLy8gLm1kXG4gICAgICAgIF0sXG4gICAgICAgIC8vIHsgXCJAL2FwaS9pbmRleFwiOiBbW1wiKlwiLCBcImFwaVwiXV0gfSwgeyBcIkAvc3RvcmVcIjogW1tcImRlZmF1bHRcIiwgXCJzdG9yZVwiXV0gfVxuICAgICAgICBpbXBvcnRzOiBbXCJ2dWVcIiwgXCJ2dWUtcm91dGVyXCIsIFwicGluaWFcIl0sXG4gICAgICAgIGRpcnM6IFtyZXNvbHZlKF9fZGlybmFtZSwgXCIuLi9wYWNrYWdlcy9ob29rc1wiKV0sXG4gICAgICAgIGR0czogcmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi4vcGFja2FnZXMvYXV0by1pbXBvcnRzLmQudHNcIiksXG4gICAgICAgIGVzbGludHJjOiB7XG4gICAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVwYXRoOiByZXNvbHZlKF9fZGlybmFtZSwgXCIuLi8uZXNsaW50cmMtYXV0by1pbXBvcnQuanNvblwiKSxcbiAgICAgICAgICAgIGdsb2JhbHNQcm9wVmFsdWU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgfSksXG5cbiAgICBDb21wb25lbnRzKHtcbiAgICAgICAgZHRzOiByZXNvbHZlKF9fZGlybmFtZSwgXCIuLi9wYWNrYWdlcy9jb21wb25lbnRzLmQudHNcIiksXG4gICAgICAgIGRpcnM6IFtyZXNvbHZlKF9fZGlybmFtZSwgXCIuLi9wYWNrYWdlcy9jb21wb25lbnRzXCIpXSxcbiAgICB9KSxcbl07XG5jb25zdCByZXNvbHZlQ29uZmlnID0ge1xuICAgIGFsaWFzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZpbmQ6IFwiQFwiLFxuICAgICAgICAgICAgcmVwbGFjZW1lbnQ6IHJlc29sdmUoX19kaXJuYW1lLCBcIi4uL3BhY2thZ2VzXCIpLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBmaW5kOiBcIkBleGFtcGxlc1wiLFxuICAgICAgICAgICAgcmVwbGFjZW1lbnQ6IHJlc29sdmUoX19kaXJuYW1lLCBcIi4uL3BhY2thZ2VzL2V4YW1wbGVzXCIpLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBmaW5kOiBcIkB0aGVtZS1jaGFsa1wiLFxuICAgICAgICAgICAgcmVwbGFjZW1lbnQ6IHJlc29sdmUoX19kaXJuYW1lLCBcIi4uL3BhY2thZ2VzL3RoZW1lLWNoYWxrXCIpLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBmaW5kOiBcInB1YmxpY1wiLFxuICAgICAgICAgICAgcmVwbGFjZW1lbnQ6IHJlc29sdmUoX19kaXJuYW1lLCBcIi4uL3B1YmxpY1wiKSxcbiAgICAgICAgfSxcbiAgICBdLFxufTtcbmV4cG9ydCB7IHJlc29sdmVDb25maWcsIHBsdWdpbnNDb25maWcgfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFNQSxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFDaEIsU0FBUyxXQUFBQSxnQkFBZTs7O0FDRnhCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sY0FBYztBQUNyQixTQUFTLGVBQWU7QUFUeEIsSUFBTSxtQ0FBbUM7QUFVekMsSUFBTSxTQUFTLFFBQVEsSUFBSSxhQUFhO0FBRXhDLElBQU0sZ0JBQWdCO0FBQUE7QUFBQSxFQUVsQixDQUFDLFVBQVUsU0FBUyxFQUFFLFFBQVEsV0FBVyxDQUFDO0FBQUEsRUFDMUMsV0FBVztBQUFBLElBQ1AsU0FBUztBQUFBLE1BQ0w7QUFBQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUE7QUFBQSxNQUNBO0FBQUE7QUFBQSxJQUNKO0FBQUE7QUFBQSxJQUVBLFNBQVMsQ0FBQyxPQUFPLGNBQWMsT0FBTztBQUFBLElBQ3RDLE1BQU0sQ0FBQyxRQUFRLGtDQUFXLG1CQUFtQixDQUFDO0FBQUEsSUFDOUMsS0FBSyxRQUFRLGtDQUFXLCtCQUErQjtBQUFBLElBQ3ZELFVBQVU7QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULFVBQVUsUUFBUSxrQ0FBVywrQkFBK0I7QUFBQSxNQUM1RCxrQkFBa0I7QUFBQSxJQUN0QjtBQUFBLEVBQ0osQ0FBQztBQUFBLEVBRUQsV0FBVztBQUFBLElBQ1AsS0FBSyxRQUFRLGtDQUFXLDZCQUE2QjtBQUFBLElBQ3JELE1BQU0sQ0FBQyxRQUFRLGtDQUFXLHdCQUF3QixDQUFDO0FBQUEsRUFDdkQsQ0FBQztBQUNMO0FBQ0EsSUFBTSxnQkFBZ0I7QUFBQSxFQUNsQixPQUFPO0FBQUEsSUFDSDtBQUFBLE1BQ0ksTUFBTTtBQUFBLE1BQ04sYUFBYSxRQUFRLGtDQUFXLGFBQWE7QUFBQSxJQUNqRDtBQUFBLElBQ0E7QUFBQSxNQUNJLE1BQU07QUFBQSxNQUNOLGFBQWEsUUFBUSxrQ0FBVyxzQkFBc0I7QUFBQSxJQUMxRDtBQUFBLElBQ0E7QUFBQSxNQUNJLE1BQU07QUFBQSxNQUNOLGFBQWEsUUFBUSxrQ0FBVyx5QkFBeUI7QUFBQSxJQUM3RDtBQUFBLElBQ0E7QUFBQSxNQUNJLE1BQU07QUFBQSxNQUNOLGFBQWEsUUFBUSxrQ0FBVyxXQUFXO0FBQUEsSUFDL0M7QUFBQSxFQUNKO0FBQ0o7OztBRDlDQSxPQUFPLFNBQVM7QUFYaEIsSUFBTUMsb0NBQW1DO0FBWXpDLElBQU8sc0JBQVEsYUFBYSxNQUFNO0FBQzlCLFNBQU87QUFBQSxJQUNILE9BQU87QUFBQSxNQUNILFFBQVE7QUFBQSxNQUNSLGNBQWM7QUFBQSxNQUNkLGVBQWU7QUFBQSxRQUNYLFVBQVUsQ0FBQyxTQUFTLHlCQUF5QixrQkFBa0IsZ0JBQWdCLDJCQUEyQix3QkFBd0IsS0FBSztBQUFBLFFBQ3ZJLFFBQVE7QUFBQSxVQUNKO0FBQUEsWUFDSSxRQUFRO0FBQUEsWUFDUixnQkFBZ0I7QUFBQSxZQUNoQixTQUFTO0FBQUEsWUFDVCxNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxZQUNJLFFBQVE7QUFBQSxZQUNSLGdCQUFnQjtBQUFBLFlBQ2hCLFNBQVM7QUFBQSxZQUNULGlCQUFpQjtBQUFBLFlBQ2pCLHFCQUFxQjtBQUFBLFlBQ3JCLEtBQUs7QUFBQSxVQUNUO0FBQUEsVUFDQTtBQUFBLFlBQ0ksUUFBUTtBQUFBLFlBQ1IsZ0JBQWdCO0FBQUEsWUFDaEIsU0FBUztBQUFBLFlBQ1QsaUJBQWlCO0FBQUEsWUFDakIscUJBQXFCO0FBQUEsWUFDckIsS0FBSztBQUFBLFVBQ1Q7QUFBQSxRQUNKO0FBQUEsTUFDSjtBQUFBLE1BQ0EsS0FBSztBQUFBLFFBQ0QsT0FBT0MsU0FBUUMsbUNBQVcscUJBQXFCO0FBQUEsUUFDL0MsTUFBTTtBQUFBLFFBQ04sVUFBVSxDQUFDLFdBQVcsYUFBYSxNQUFNO0FBQUEsUUFDekMsU0FBUyxDQUFDLE1BQU0sS0FBSztBQUFBLE1BQ3pCO0FBQUEsSUFDSjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ0wsSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLFFBQ0EsY0FBYztBQUFBLFFBQ2QsUUFBUTtBQUFBLE1BQ1osQ0FBQztBQUFBLE1BQ0QsSUFBSTtBQUFBLFFBQ0EsY0FBYztBQUFBLFFBQ2QsUUFBUTtBQUFBLE1BQ1osQ0FBQztBQUFBLE1BQ0QsR0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFLUDtBQUFBLElBQ0EsU0FBUztBQUFBLEVBQ2I7QUFDSixDQUFDOyIsCiAgIm5hbWVzIjogWyJyZXNvbHZlIiwgIl9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lIiwgInJlc29sdmUiLCAiX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUiXQp9Cg==
