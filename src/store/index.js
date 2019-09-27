import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state:{
        cities:''
    },
    mutations:{
        changeCities(state,payLoad){
            state.cities=payLoad.city
        },
        getCity(state,payLoad){
            console.log(payLoad)
            state.cities=payLoad
        }
    },
   
})
export default store