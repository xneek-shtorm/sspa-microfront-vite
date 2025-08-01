import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginSingleSpa from 'vite-plugin-single-spa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vitePluginSingleSpa(
    {
      type: 'mife',
      serverPort: 4040,
      spaEntryPoints: 'src/ui-kit.tsx'
    }
  )],
  server: {
    hmr: false
  }
})