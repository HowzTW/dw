import { fileURLToPath, URL } from 'node:url'
import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
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
      '/data': '/data'
    }
  }
})
