// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/FernandaDayrellAdvogada/',  // ← exatamente assim
  plugins: [react()],
})