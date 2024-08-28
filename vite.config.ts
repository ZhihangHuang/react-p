import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import UnoCSS from "unocss/vite"
import AutoImport from "unplugin-auto-import/vite"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    UnoCSS(),
    AutoImport({
      dts: 'src/types/auto-imports.d.ts',
      imports: ['react'],
      dirs: ['./src/hooks']
    })
  ]
})