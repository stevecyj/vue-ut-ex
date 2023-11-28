import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { normalizePath } from "vite";

const resolve = (str) => normalizePath(path.resolve(__dirname, str));
const variablePath = resolve("src/variables.scss");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "${variablePath}";`,
      },
    },
  },
});
