import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(),react()],
  server:{
    proxy:{
      '/api': {
        changeOrigin: true,
        target: 'https://e-commerce-tdq7.onrender.com/',
        secure: false,
      }
    }
  }
})
