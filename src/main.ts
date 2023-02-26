import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import ElementPlus from 'element-plus'
// import "~/styles/element/index.scss";

// import ElementPlus from "element-plus";
// import all element css, uncommented next line
import "element-plus/dist/index.css";

// or use cdn, uncomment cdn link in `index.html`

import "~/styles/index.scss";
import 'uno.css'

// If you want to use ElMessage, import it.
import "element-plus/theme-chalk/src/message.scss"

import routes from './routes'
import App from './App.vue'
const app =createApp(App)
app.use(ElementPlus)

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})
app.use(router)
app.mount('#app')



