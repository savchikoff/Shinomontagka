import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    define: {
      'process.env': {}
    },
    plugins: [react()],
  }
})