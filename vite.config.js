import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // Enables proper routing in dev mode
    historyApiFallback: true,
  },
  build: {
    // Optional: helps ensure clean deploy output
    outDir: 'dist',
  },
})
