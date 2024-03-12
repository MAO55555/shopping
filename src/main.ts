import { createApp } from 'vue'
import { createPinia } from 'pinia'
import "@/assets/style/common.scss"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(ElementPlus)
app.use(router)

app.mount('#app')
