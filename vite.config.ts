import path from 'node:path'
import react from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'

export default {
  plugins: [UnoCSS(), react()],
  server: {
    port: 8888,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
}
