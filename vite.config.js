import { defineConfig } from 'vite'
import fs from 'node:fs'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  base: '/Grade-Displayer/',
  plugins: [
    {
      name: 'copy-404',
      closeBundle() {
        const dist = path.resolve(import.meta.dirname, 'dist')
        const indexHtml = path.resolve(dist, 'index.html')
        const notFoundHtml = path.resolve(dist, '404.html')
        if (fs.existsSync(indexHtml)) {
          fs.copyFileSync(indexHtml, notFoundHtml)
        }
      }
    }
  ]
})

