import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    build: {
        lib: {
            entry: resolve(__dirname, "src/index.ts"),
            name: "prevention-multiplex-vue-libs",
            fileName: (format) => `prevention-multiplex-vue-libs-${format}.js`,
        },
        rollupOptions: {
            external: "vue",
            output: {
                globals: {
                    vue: "Vue",
                },
            },
        },
    },
});
