import VueRouter from 'vue-router'
import index from './components/index.vue'
import cimena from "./components/cimena.vue"
const router = new VueRouter({
    routes: [

        { path: '/', redirect: '/index' },
        { path: '/index', component: index },
        { path: '/cimena', component: cimena }
    ]
})
export default router