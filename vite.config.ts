import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' = works on GitHub Pages sub-path (/Health-Saathi01/) and anywhere else
export default defineConfig({
  base: './',
  plugins: [react()],
  server: { host: '0.0.0.0', port: 3000 },
})
