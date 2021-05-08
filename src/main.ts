import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes.ts'
import App from './App.vue'
const app =createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})
app.use(router)
app.mount('#app')



