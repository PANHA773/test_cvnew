import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/test_profile/', // 👈 this is required for GitHub Pages!
  plugins: [react()],
})
