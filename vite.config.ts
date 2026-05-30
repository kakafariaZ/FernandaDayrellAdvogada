import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/FernandaDayrellAdvogada/', // 👈 ADICIONE ISSO AQUI exatamente com o nome do repositório
})
