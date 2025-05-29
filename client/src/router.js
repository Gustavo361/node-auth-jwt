import { createRouter, createWebHistory } from 'vue-router'

import SignUp from './components/SignUp.vue'

const routes = [
    { path: '/sign-up', component: SignUp }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router