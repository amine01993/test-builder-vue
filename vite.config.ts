import { fileURLToPath, URL } from 'node:url';

import { defineConfig, UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import { InlineConfig } from 'vitest/node';

type ViteConfig = UserConfig & { test: InlineConfig };

// https://vite.dev/config/
const config: ViteConfig = {
    plugins: [
        vue(),
        vueDevTools(),
    ],
    resolve: {
        alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '~bootstrap': fileURLToPath(new URL('./node_modules/bootstrap', import.meta.url)),
        '~bootstrap-icons': fileURLToPath(new URL('./node_modules/bootstrap-icons', import.meta.url)),
        },
    },
    css: {
        devSourcemap: true,
        preprocessorOptions: {
            scss: {
                quietDeps: true,
                api: 'modern-compiler',
            }
        }
    },
    build: {
        cssCodeSplit: true,
    },
    test: {
        reporters: ['verbose', 'html'],
    }
};

export default defineConfig(config);
