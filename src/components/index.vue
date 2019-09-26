<template>
  <div>
  
    <ul id="tab">
  
      <li>
  
        <router-link to="/index/getCity" tag="p">{{mes}}</router-link>
  
      </li>
  
      <li>
  
        <router-link to="/index/watching" tag="p">正在上映</router-link>
  
      </li>
  
      <li>
  
        <router-link to="/index/willWatch" tag="p"> 即将上映</router-link>
  
      </li>
  
      <li>
  
        <router-link to="/index/search" tag="p">
  
          <span class="iconfont icon-dianyingyuan"></span>
  
        </router-link>
  
      </li>
  
    </ul>
  
    <transition name='cjy' mode="out-in" appear>
  
      <router-view></router-view>
  
    </transition>
  
  </div>
</template>
<script>
 import {
        getLocalCity
    } from '../services/api.js'
  export default {
   data(){
     return{localCity:''}
   },
    created() {
    getLocalCity().then(res=>{
      // console.log(res)
      // this.localCity = res.data.nm
       ((val)=>{
    //  debugger
      this.$store.commit('getCity',val)
    })(res.data.nm)
    })
  
    },
    // 为什么用计算属性来写呢，第一可以有缓存，不会有传值赋值的问题
    computed: {
      mes(){
   return this.$store.state.cities
      }
    },
  };
</script>
<style lang="css" scope>
  * {
  
    margin: 0;
  
    padding: 0;
  
  }
  #tab {
  
    display: flex;
  
    justify-content: space-around;
  
    border-bottom: 1px solid #ccc;
  
  }
  #tab li {
  
    list-style: none;
  
    width: 25%;
  
    text-align: center;
    background-color:#eec;
  
  }
  
  
  
  #tab li p {
  
    padding: 7px 0px;
  
  }
  .router-link-active {
  
    border-bottom: 2px solid red;
  
  }
  .cjy-enter,
  
  .cjy-leave-to {
  
    transform: translateX(200px);
  
    opacity: 0;
  
  }
  .cjy-enter-active,
  
  .cjy-leave-active {
  
    transition: all 0.6s ease
  
  }
</style>