import { URL, fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { viteVueCE } from "unplugin-vue-ce";
import type { PluginOption } from "vite";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      customElement: true,
    }),
    viteVueCE() as PluginOption,
    AutoImport({
      imports: ["vue"],
      dts: "./auto-imports.d.ts",
      dirs: ["src/plugins"],
      eslintrc: {
        enabled: true,
        globalsPropValue: true,
      },
      vueTemplate: true,
    }),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      dirs: ["src/components", "src/routes"],
      extensions: ["vue"],
      dts: "./components.d.ts",
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    minify: false,
  },
});
