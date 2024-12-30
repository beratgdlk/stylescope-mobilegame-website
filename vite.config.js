import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true // Tarayıcıyı otomatik açar
  },
  // Eğer build hatası varsa
  build: {
    sourcemap: true,
    outDir: 'dist'
  }
}) 