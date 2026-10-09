import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
        // 优先解析 .ts，避免同名的编译残留 .js 覆盖 TypeScript 源码
        extensions: ['.mjs', '.mts', '.ts', '.tsx', '.js', '.jsx', '.json'],
    },
});
