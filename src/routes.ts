/*
 * @Author: your name
 * @Date: 2021-05-08 23:54:20
 * @LastEditTime: 2021-05-09 00:10:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hello-vue3\src\routes.ts
 */
const Home = ()=>import('./components/Home.vue')
const NotFound = ()=>import('./components/NotFound.vue')

const routes = [
    {
    path:'/',
    name:'Home',
    component:Home
},
    {
    path:'/:pathMatch(.*)*',
    name:'NotFound',
    component:NotFound
},
]
export default routes;