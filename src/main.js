import Vue from 'vue'
import app from './app.vue'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
import VueRouter from 'vue-router'
import router from './router.js'
import './font/iconfont.css'
import store from './store/index.js'
Vue.use(VueRouter)
Vue.use(Mint);
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)




new Vue({
    el:'#app',
    render:(c)=>{return c(app)},
    router,
    store
})