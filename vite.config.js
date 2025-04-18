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
                basicTypes: resolve(root, 'basicTypes', 'index.html'), 
                function: resolve(root, 'functionTypes', 'index.html'), // Fixed typo: 'baseicTypes' → 'basicTypes'
                interfaces: resolve(root, 'interfaces', 'index.html'),
                classes: resolve(root, 'classes', 'index.html')
                // nested: resolve(root, 'nested/index.html'),
            }
        }
    },
  
    server: {
        port: 2720
    }
})