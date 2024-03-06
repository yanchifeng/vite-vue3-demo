import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import ElementPlus from 'element-plus'
// import axios from './utils/axios';
// import "~/styles/element/index.scss";

// import ElementPlus from "element-plus";
// import all element css, uncommented next line
import "element-plus/dist/index.css";

// or use cdn, uncomment cdn link in `index.html`

import "~/styles/index.scss";
import 'uno.css'

// If you want to use ElMessage, import it.
import "element-plus/theme-chalk/src/message.scss"


import routes from './routes/routes'
import App from './App.vue'
import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'
import { useMainStore } from './store/main'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'


const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
const pinia = createPinia()
pinia.use(piniaPluginPersist)
app.use(ElementPlus)
app.use(pinia)

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})
app.use(router)
app.mount('#app')

router.beforeEach((to) => {
  // ✅ 这将确保正确的商店用于
  // 当前运行的应用
  const main = useMainStore()

  // if (to.meta.requiresAuth && !main.isLoggedIn) return '/login'
})



