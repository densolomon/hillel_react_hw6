import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import alias from '@rollup/plugin-alias'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/hillel_react_hw6/",
  plugins: [
    react(),
    // alias({
    //   entries: [
    //     {find: '@', replacement: path.resolve(__dirname, 'src')},
    //   ]
    // })
  ],
})
