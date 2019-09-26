import VueRouter from 'vue-router'
import index from './components/index.vue'
import cimena from "./components/cimena.vue"
import search from './components/sub_index/search.vue'
import watching from './components/sub_index/watching.vue'
import willWatch from './components/sub_index/willWatch.vue'
import getCity from './components/sub_index/getCity.vue'
const router = new VueRouter({
    routes: [

        { path: '/', redirect: '/index' },
        { path: '/index', component: index,meta:'电影',
    children:[
        {path:'',redirect:'watching'},
        {path:'search',component:search,meta:'搜索',},
        {path:'watching',component:watching,meta:'正在上映',},
        {path:'willWatch',component:willWatch,meta:'即将上映',},
        {path:'getCity',component:getCity,meta:'城市',}
    ]
    
    },
        { path: '/cimena', component: cimena,meta:'影院',}
    ]
})
export default router