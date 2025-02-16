import {resolve} from 'path'
import { defineConfig } from "vite"

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

export default defineConfig({
    root,
    build: {
        outDir,
        emptyOutDir: true,
        rollupOptions: {  // Fixed typo: 'roolupOptions' → 'rollupOptions'
            input: {
                main: resolve(root, 'index.html'),
                basicTypes: resolve(root, 'basicTypes', 'index.html'),  // Fixed typo: 'baseicTypes' → 'basicTypes'
                // nested: resolve(root, 'nested/index.html'),
            }
        }
    },
    server: {
        port: 2720
    }
})