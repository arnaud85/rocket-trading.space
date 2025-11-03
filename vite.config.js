import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    fs: {
      strict: false
    }
  },
  publicDir: 'public',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html'
      }
    }
  }
})
