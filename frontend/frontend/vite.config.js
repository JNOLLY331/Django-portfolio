import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' 
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(), // react plugin
    tailwindcss(),
  ],

  // This must match your STATIC_URL in Django settings.py
  base: '/assets/', 
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
})