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
        external: ["@ant-design/icons-vue", "ant-design-vue", "element-plus", "unplugin-vue-components", "unplugin-auto-import", "vue"],
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAic2NyaXB0cy9wcmV2aWV3LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRjpcXFxcXHU0RTJBXHU0RUJBXHU1RjAwXHU2RTkwXHU5ODc5XHU3NkVFXFxcXGhzay1UcmFpbmluZy1FbmRcXFxcbXktdml0ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJGOlxcXFxcdTRFMkFcdTRFQkFcdTVGMDBcdTZFOTBcdTk4NzlcdTc2RUVcXFxcaHNrLVRyYWluaW5nLUVuZFxcXFxteS12aXRlcHJlc3NcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Y6LyVFNCVCOCVBQSVFNCVCQSVCQSVFNSVCQyU4MCVFNiVCQSU5MCVFOSVBMSVCOSVFNyU5QiVBRS9oc2stVHJhaW5pbmctRW5kL215LXZpdGVwcmVzcy92aXRlLmNvbmZpZy50c1wiOy8qXG4gKiBAQXV0aG9yOiB3eWtcbiAqIEBEYXRlOiAyMDIyLTExLTIyIDEwOjIyOjQ4XG4gKiBATGFzdEVkaXRUaW1lOiAyMDI0LTA4LTMwIDE3OjE5OjA2XG4gKiBARGVzY3JpcHRpb246XG4gKi9cbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgdnVlIGZyb20gXCJAdml0ZWpzL3BsdWdpbi12dWVcIjtcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHsgcGx1Z2luc0NvbmZpZywgcmVzb2x2ZUNvbmZpZyB9IGZyb20gXCIuL3NjcmlwdHMvcHJldmlld1wiO1xuaW1wb3J0IEluc3BlY3QgZnJvbSBcInZpdGUtcGx1Z2luLWluc3BlY3RcIjtcbmltcG9ydCBkdHMgZnJvbSBcInZpdGUtcGx1Z2luLWR0c1wiO1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBidWlsZDoge1xuICAgICAgICAgICAgb3V0RGlyOiBcImJ1aWxkXCIsXG4gICAgICAgICAgICBjc3NDb2RlU3BsaXQ6IHRydWUsXG4gICAgICAgICAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgZXh0ZXJuYWw6IFtcIkBhbnQtZGVzaWduL2ljb25zLXZ1ZVwiLCBcImFudC1kZXNpZ24tdnVlXCIsIFwiZWxlbWVudC1wbHVzXCIsIFwidW5wbHVnaW4tdnVlLWNvbXBvbmVudHNcIiwgXCJ1bnBsdWdpbi1hdXRvLWltcG9ydFwiLCBcInZ1ZVwiXSxcbiAgICAgICAgICAgICAgICBvdXRwdXQ6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBcImVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRyeUZpbGVOYW1lczogXCJbbmFtZV0uanNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cG9ydHM6IFwibmFtZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiSmJEZXNpZ25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcjogXCIuL2J1aWxkL2Rpc3RcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBcImVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRyeUZpbGVOYW1lczogXCJbbmFtZV0uanNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cG9ydHM6IFwibmFtZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlcnZlTW9kdWxlczogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlcnZlTW9kdWxlc1Jvb3Q6IFwicGFja2FnZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcjogXCIuL2J1aWxkL2VzXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdDogXCJjanNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5RmlsZU5hbWVzOiBcIltuYW1lXS5qc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwb3J0czogXCJuYW1lZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VydmVNb2R1bGVzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VydmVNb2R1bGVzUm9vdDogXCJwYWNrYWdlc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlyOiBcIi4vYnVpbGQvbGliXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsaWI6IHtcbiAgICAgICAgICAgICAgICBlbnRyeTogcmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9wYWNrYWdlcy9pbmRleC50c1wiKSxcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkpiRGVzaWduXCIsXG4gICAgICAgICAgICAgICAgZmlsZU5hbWU6IChmb3JtYXQpID0+IGBXeS1kZXNpZ24uJHtmb3JtYXR9LmpzYCxcbiAgICAgICAgICAgICAgICBmb3JtYXRzOiBbXCJlc1wiLCBcImNqc1wiXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgICAgIHZ1ZSgpLFxuICAgICAgICAgICAgZHRzKHtcbiAgICAgICAgICAgICAgICB0c2NvbmZpZ1BhdGg6IFwiLi90c2NvbmZpZy5wcm9kLmpzb25cIixcbiAgICAgICAgICAgICAgICBvdXREaXI6IFwiYnVpbGQvbGliXCIsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGR0cyh7XG4gICAgICAgICAgICAgICAgdHNjb25maWdQYXRoOiBcIi4vdHNjb25maWcucHJvZC5qc29uXCIsXG4gICAgICAgICAgICAgICAgb3V0RGlyOiBcImJ1aWxkL2VzXCIsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIC4uLnBsdWdpbnNDb25maWcsXG4gICAgICAgICAgICAvLyBJbnNwZWN0KHtcbiAgICAgICAgICAgIC8vICAgICBidWlsZDogdHJ1ZSxcbiAgICAgICAgICAgIC8vICAgICBvdXRwdXREaXI6IFwiLnZpdGUtaW5zcGVjdFwiLFxuICAgICAgICAgICAgLy8gfSksXG4gICAgICAgIF0sXG4gICAgICAgIHJlc29sdmU6IHJlc29sdmVDb25maWcsXG4gICAgfTtcbn0pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFxcdTRFMkFcdTRFQkFcdTVGMDBcdTZFOTBcdTk4NzlcdTc2RUVcXFxcaHNrLVRyYWluaW5nLUVuZFxcXFxteS12aXRlcHJlc3NcXFxcc2NyaXB0c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRjpcXFxcXHU0RTJBXHU0RUJBXHU1RjAwXHU2RTkwXHU5ODc5XHU3NkVFXFxcXGhzay1UcmFpbmluZy1FbmRcXFxcbXktdml0ZXByZXNzXFxcXHNjcmlwdHNcXFxccHJldmlldy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRjovJUU0JUI4JUFBJUU0JUJBJUJBJUU1JUJDJTgwJUU2JUJBJTkwJUU5JUExJUI5JUU3JTlCJUFFL2hzay1UcmFpbmluZy1FbmQvbXktdml0ZXByZXNzL3NjcmlwdHMvcHJldmlldy50c1wiOy8qXG4gKiBAQXV0aG9yOiB3eWtcbiAqIEBEYXRlOiAyMDI0LTA1LTE2IDExOjQ0OjAxXG4gKiBATGFzdEVkaXRUaW1lOiAyMDI0LTA4LTMwIDE3OjE2OjQyXG4gKiBARGVzY3JpcHRpb246XG4gKi9cbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gXCJ1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlXCI7XG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tIFwidW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZVwiO1xuaW1wb3J0IHByb2dyZXNzIGZyb20gXCJ2aXRlLXBsdWdpbi1wcm9ncmVzc1wiO1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gXCJwYXRoXCI7XG5jb25zdCBpc1Byb2QgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCI7XG5cbmNvbnN0IHBsdWdpbnNDb25maWcgPSBbXG4gICAgLy8gcHJvZ3Jlc3MoeyBzcmNEaXI6IFwicGFja2FnZXNcIiB9KSxcbiAgICAhaXNQcm9kICYmIHByb2dyZXNzKHsgc3JjRGlyOiBcInBhY2thZ2VzXCIgfSksXG4gICAgQXV0b0ltcG9ydCh7XG4gICAgICAgIGluY2x1ZGU6IFtcbiAgICAgICAgICAgIC9cXC5bdGpdc3g/JC8sIC8vIC50cywgLnRzeCwgLmpzLCAuanN4XG4gICAgICAgICAgICAvXFwudnVlJC8sXG4gICAgICAgICAgICAvXFwudnVlXFw/dnVlLywgLy8gLnZ1ZVxuICAgICAgICAgICAgL1xcLm1kJC8sIC8vIC5tZFxuICAgICAgICBdLFxuICAgICAgICAvLyB7IFwiQC9hcGkvaW5kZXhcIjogW1tcIipcIiwgXCJhcGlcIl1dIH0sIHsgXCJAL3N0b3JlXCI6IFtbXCJkZWZhdWx0XCIsIFwic3RvcmVcIl1dIH1cbiAgICAgICAgaW1wb3J0czogW1widnVlXCIsIFwidnVlLXJvdXRlclwiLCBcInBpbmlhXCJdLFxuICAgICAgICBkaXJzOiBbcmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi4vcGFja2FnZXMvaG9va3NcIildLFxuICAgICAgICBkdHM6IHJlc29sdmUoX19kaXJuYW1lLCBcIi4uL3BhY2thZ2VzL2F1dG8taW1wb3J0cy5kLnRzXCIpLFxuICAgICAgICBlc2xpbnRyYzoge1xuICAgICAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgICBmaWxlcGF0aDogcmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi4vLmVzbGludHJjLWF1dG8taW1wb3J0Lmpzb25cIiksXG4gICAgICAgICAgICBnbG9iYWxzUHJvcFZhbHVlOiB0cnVlLFxuICAgICAgICB9LFxuICAgIH0pLFxuXG4gICAgQ29tcG9uZW50cyh7XG4gICAgICAgIGR0czogcmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi4vcGFja2FnZXMvY29tcG9uZW50cy5kLnRzXCIpLFxuICAgICAgICBkaXJzOiBbcmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi4vcGFja2FnZXMvY29tcG9uZW50c1wiKV0sXG4gICAgfSksXG5dO1xuY29uc3QgcmVzb2x2ZUNvbmZpZyA9IHtcbiAgICBhbGlhczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBmaW5kOiBcIkBcIixcbiAgICAgICAgICAgIHJlcGxhY2VtZW50OiByZXNvbHZlKF9fZGlybmFtZSwgXCIuLi9wYWNrYWdlc1wiKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgZmluZDogXCJAZXhhbXBsZXNcIixcbiAgICAgICAgICAgIHJlcGxhY2VtZW50OiByZXNvbHZlKF9fZGlybmFtZSwgXCIuLi9wYWNrYWdlcy9leGFtcGxlc1wiKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgZmluZDogXCJAdGhlbWUtY2hhbGtcIixcbiAgICAgICAgICAgIHJlcGxhY2VtZW50OiByZXNvbHZlKF9fZGlybmFtZSwgXCIuLi9wYWNrYWdlcy90aGVtZS1jaGFsa1wiKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgZmluZDogXCJwdWJsaWNcIixcbiAgICAgICAgICAgIHJlcGxhY2VtZW50OiByZXNvbHZlKF9fZGlybmFtZSwgXCIuLi9wdWJsaWNcIiksXG4gICAgICAgIH0sXG4gICAgXSxcbn07XG5leHBvcnQgeyByZXNvbHZlQ29uZmlnLCBwbHVnaW5zQ29uZmlnIH07XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBTUEsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLFNBQVMsV0FBQUEsZ0JBQWU7OztBQ0Z4QixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGNBQWM7QUFDckIsU0FBUyxlQUFlO0FBVHhCLElBQU0sbUNBQW1DO0FBVXpDLElBQU0sU0FBUyxRQUFRLElBQUksYUFBYTtBQUV4QyxJQUFNLGdCQUFnQjtBQUFBO0FBQUEsRUFFbEIsQ0FBQyxVQUFVLFNBQVMsRUFBRSxRQUFRLFdBQVcsQ0FBQztBQUFBLEVBQzFDLFdBQVc7QUFBQSxJQUNQLFNBQVM7QUFBQSxNQUNMO0FBQUE7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBO0FBQUEsTUFDQTtBQUFBO0FBQUEsSUFDSjtBQUFBO0FBQUEsSUFFQSxTQUFTLENBQUMsT0FBTyxjQUFjLE9BQU87QUFBQSxJQUN0QyxNQUFNLENBQUMsUUFBUSxrQ0FBVyxtQkFBbUIsQ0FBQztBQUFBLElBQzlDLEtBQUssUUFBUSxrQ0FBVywrQkFBK0I7QUFBQSxJQUN2RCxVQUFVO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxVQUFVLFFBQVEsa0NBQVcsK0JBQStCO0FBQUEsTUFDNUQsa0JBQWtCO0FBQUEsSUFDdEI7QUFBQSxFQUNKLENBQUM7QUFBQSxFQUVELFdBQVc7QUFBQSxJQUNQLEtBQUssUUFBUSxrQ0FBVyw2QkFBNkI7QUFBQSxJQUNyRCxNQUFNLENBQUMsUUFBUSxrQ0FBVyx3QkFBd0IsQ0FBQztBQUFBLEVBQ3ZELENBQUM7QUFDTDtBQUNBLElBQU0sZ0JBQWdCO0FBQUEsRUFDbEIsT0FBTztBQUFBLElBQ0g7QUFBQSxNQUNJLE1BQU07QUFBQSxNQUNOLGFBQWEsUUFBUSxrQ0FBVyxhQUFhO0FBQUEsSUFDakQ7QUFBQSxJQUNBO0FBQUEsTUFDSSxNQUFNO0FBQUEsTUFDTixhQUFhLFFBQVEsa0NBQVcsc0JBQXNCO0FBQUEsSUFDMUQ7QUFBQSxJQUNBO0FBQUEsTUFDSSxNQUFNO0FBQUEsTUFDTixhQUFhLFFBQVEsa0NBQVcseUJBQXlCO0FBQUEsSUFDN0Q7QUFBQSxJQUNBO0FBQUEsTUFDSSxNQUFNO0FBQUEsTUFDTixhQUFhLFFBQVEsa0NBQVcsV0FBVztBQUFBLElBQy9DO0FBQUEsRUFDSjtBQUNKOzs7QUQ5Q0EsT0FBTyxTQUFTO0FBWGhCLElBQU1DLG9DQUFtQztBQVl6QyxJQUFPLHNCQUFRLGFBQWEsTUFBTTtBQUM5QixTQUFPO0FBQUEsSUFDSCxPQUFPO0FBQUEsTUFDSCxRQUFRO0FBQUEsTUFDUixjQUFjO0FBQUEsTUFDZCxlQUFlO0FBQUEsUUFDWCxVQUFVLENBQUMseUJBQXlCLGtCQUFrQixnQkFBZ0IsMkJBQTJCLHdCQUF3QixLQUFLO0FBQUEsUUFDOUgsUUFBUTtBQUFBLFVBQ0o7QUFBQSxZQUNJLFFBQVE7QUFBQSxZQUNSLGdCQUFnQjtBQUFBLFlBQ2hCLFNBQVM7QUFBQSxZQUNULE1BQU07QUFBQSxZQUNOLEtBQUs7QUFBQSxVQUNUO0FBQUEsVUFDQTtBQUFBLFlBQ0ksUUFBUTtBQUFBLFlBQ1IsZ0JBQWdCO0FBQUEsWUFDaEIsU0FBUztBQUFBLFlBQ1QsaUJBQWlCO0FBQUEsWUFDakIscUJBQXFCO0FBQUEsWUFDckIsS0FBSztBQUFBLFVBQ1Q7QUFBQSxVQUNBO0FBQUEsWUFDSSxRQUFRO0FBQUEsWUFDUixnQkFBZ0I7QUFBQSxZQUNoQixTQUFTO0FBQUEsWUFDVCxpQkFBaUI7QUFBQSxZQUNqQixxQkFBcUI7QUFBQSxZQUNyQixLQUFLO0FBQUEsVUFDVDtBQUFBLFFBQ0o7QUFBQSxNQUNKO0FBQUEsTUFDQSxLQUFLO0FBQUEsUUFDRCxPQUFPQyxTQUFRQyxtQ0FBVyxxQkFBcUI7QUFBQSxRQUMvQyxNQUFNO0FBQUEsUUFDTixVQUFVLENBQUMsV0FBVyxhQUFhLE1BQU07QUFBQSxRQUN6QyxTQUFTLENBQUMsTUFBTSxLQUFLO0FBQUEsTUFDekI7QUFBQSxJQUNKO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDTCxJQUFJO0FBQUEsTUFDSixJQUFJO0FBQUEsUUFDQSxjQUFjO0FBQUEsUUFDZCxRQUFRO0FBQUEsTUFDWixDQUFDO0FBQUEsTUFDRCxJQUFJO0FBQUEsUUFDQSxjQUFjO0FBQUEsUUFDZCxRQUFRO0FBQUEsTUFDWixDQUFDO0FBQUEsTUFDRCxHQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUtQO0FBQUEsSUFDQSxTQUFTO0FBQUEsRUFDYjtBQUNKLENBQUM7IiwKICAibmFtZXMiOiBbInJlc29sdmUiLCAiX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUiLCAicmVzb2x2ZSIsICJfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSJdCn0K
