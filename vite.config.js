import { fileURLToPath, URL } from 'node:url'
import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue'
import 'dotenv/config';


// https://vitejs.dev/config/
export default defineConfig( ({ command, mode }) => {
  // 根據當前工作目錄中的 `mode` 加載 .env 文件
  // 設置第三個參數為 '' 來加載所有環境變量，而不管是否有 `VITE_` 前綴
  const env = loadEnv(mode, process.cwd(), '');
  console.log('REPOSITORY NAME : ', env.REPOSITORY_NAME);

  return {
    base: mode === 'production' ? `/${env.REPOSITORY_NAME}/` : '/',
  publicPath: '/dw/',
  plugins: [
    vue(),
    VitePWA({
      manifest: {
        name: '追劇小幫手VUE',
        short_name: '追劇小幫手',
        description: '追劇小幫手 VUE PWA 版',
        theme_color: '#ffffff',
        icons: [		//增加 icon 圖檔，注意路徑和像素正確
        {
          "src": "images/icon-128.png",
          "sizes": "128x128",
          "type": "image/png",
          "purpose": "maskable"
      },
      {
          "src": "images/icon-144.png",
          "sizes": "144x144",
          "type": "image/png",
          "purpose": "maskable"
      },
      {
          "src": "images/icon-152.png",
          "sizes": "152x152",
          "type": "image/png",
          "purpose": "maskable"
      },
      {
          "src": "images/icon-192.png",
          "sizes": "192x192",
          "type": "image/png",
          "purpose": "maskable"
      },
      {
          "src": "images/icon-256.png",
          "sizes": "256x256",
          "type": "image/png",
          "purpose": "maskable"
      },
      {
          "src": "images/icon-512.png",
          "sizes": "512x512",
          "type": "image/png",
          "purpose": "maskable"
      }
      ]
      },
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],		//緩存相關靜態資源资源
      },
      devOptions: {
        enabled: true
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    }
  }
}
})
