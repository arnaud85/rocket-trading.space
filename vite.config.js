import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    {
      name: 'bypass-assets',
      enforce: 'pre',
      resolveId(id) {
        // Let assets be resolved normally but prevent transformation
        if (id.includes('/assets/')) {
          return id
        }
      },
      load(id) {
        // Prevent Vite from loading and transforming asset files
        if (id.includes('/assets/')) {
          return null
        }
      }
    }
  ],
  server: {
    fs: {
      strict: false
    }
  }
})
