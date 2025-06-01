import { createRouter, createWebHistory } from 'vue-router'

import SignUp from './components/SignUp.vue'
import LogIn from './components/LogIn.vue'

const routes = [
    { path: '/sign-up', component: SignUp },
    { path: '/log-in', component: LogIn }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router