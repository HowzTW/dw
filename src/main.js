import './assets/main.css'

import { createApp } from 'vue'
//import App from './App.vue'
import App from './AppDW.vue'

import Antd from 'ant-design-vue'
import '@ant-design/icons-vue'


//antd css
import 'ant-design-vue/dist/reset.css'


//createApp(App).mount('#app')

const app = createApp(App)
app.use(Antd)
app.mount('#app')
