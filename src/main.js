import Vue from 'vue'
import app from './app.vue'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
import VueRouter from 'vue-router'
import router from './router.js'
Vue.use(VueRouter)
Vue.use(Mint);

new Vue({
    el:'#app',
    render:(c)=>{return c(app)},
    router,
})