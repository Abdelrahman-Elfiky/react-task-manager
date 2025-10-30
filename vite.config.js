import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 💡 القيمة الصحيحة: اسم المستودع بالضبط
const repoName = 'react-task-manager'; 

export default defineConfig({
  plugins: [react()],
  
  // يضمن أن جميع المسارات (assets) تبدأ باسم المستودع
  base: `/${repoName}/`, 
})