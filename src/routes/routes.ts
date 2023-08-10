const Home = () => import('~/pages/Home.vue')
const NotFound = () => import('~/components/NotFound.vue')
const Login = () => import('~/pages/Login.vue')

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/',
        name: 'Home',
        meta: {
            requiresAuth: true
        },
        component: Home
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    },
]
export default routes;