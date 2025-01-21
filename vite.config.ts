import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue({
            template: {
                compilerOptions: {
                    // isCustomElement: tag => ['draggable'].includes(tag)
                }
            }
        }),
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
})
