import { createApp } from 'vue'
import { createPinia } from 'pinia'

import "@/styles/common.scss"
import "@/styles/element-dark.scss"
import "@/styles/element.scss";
import "element-plus/theme-chalk/dark/css-vars.css";
import 'element-plus/dist/index.css'
import "@/styles/var.scss"

import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(createPinia())
app.use(ElementPlus)
app.use(router)

app.mount('#app')
