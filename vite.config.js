import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  base: '/https://makubex64.github.io/example/', // Establece la base en '/' para GitHub Pages
})
