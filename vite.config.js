import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/", // ตั้งค่า Base URL ให้เป็น root
  server: {
    historyApiFallback: true, // ให้ Dev Server รองรับ History API
  },
})
