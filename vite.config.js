import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://EduardoMenendez.github.io/React-RickAndMorty/",
  plugins: [react()]
})
