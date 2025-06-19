import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

const path = resolve(__dirname, 'src')

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@components': resolve(path, 'components'),
      '@components/*': resolve(path, 'components/*'),
      '@pages': resolve(path, 'pages'),
      '@pages/*': resolve(path, 'pages/*'),
      '@assets': resolve(path, 'assets'),
      '@assets/*': resolve(path, 'assets/*'),
    }
  }
})