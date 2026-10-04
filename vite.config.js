import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const [owner, repository] = process.env.GITHUB_REPOSITORY?.split('/') ?? []
const isUserOrOrganizationPage = repository?.toLowerCase() === `${owner?.toLowerCase()}.github.io`

export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_ACTIONS === 'true' && repository && !isUserOrOrganizationPage
    ? `/${repository}/`
    : '/',
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'framer-motion'],
        }
      }
    }
  }
})
