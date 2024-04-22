import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        src: resolve(__dirname, ['src/slots-wheel.html','src/sub-wheel.html','src/kevin-spin.html']),
      },
    },
  },
})