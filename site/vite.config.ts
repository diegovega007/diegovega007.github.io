import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Deployed as a GitHub Pages *user* site (diegovega007.github.io), served from the
// domain root, so `base` stays '/'. A project repo would need '/<repo-name>/'.
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
})
