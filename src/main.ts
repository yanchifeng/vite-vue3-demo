import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import ElementPlus from 'element-plus'
import axios from './utils/axios';
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
import { useMainStore } from './store/main'

const app =createApp(App)
const pinia = createPinia()
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
  const main = useMainStore(pinia)

  if (to.meta.requiresAuth && !main.isLoggedIn) return '/login'
})



