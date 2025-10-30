import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


const repoName = 'react-task-manager'; 

export default defineConfig({
  plugins: [react()],
  
  
  base: `/${repoName}/`, 
})