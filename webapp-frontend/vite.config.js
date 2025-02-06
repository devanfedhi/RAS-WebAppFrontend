import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  server: { 
    port: 3000,
  },

  preview: {
    host: true,
    strictPort: true,
    port: 3000,
    allowedHosts: [".project-raspberry.me"]
  }
})
