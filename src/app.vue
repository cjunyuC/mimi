<template>
  <div>
  
    <mt-header fixed :title="title"></mt-header>
  
  
  
    <div id="box">
  
      <transition mode="out-in">
  
        <router-view></router-view>
  
      </transition>
  
    </div>
  
  
  
  
  
    <mt-tabbar v-model="selected">
  
  
  
      <mt-tab-item id="movie">电影<span class="iconfont icon-dianying" slot="icon"></span></mt-tab-item>
  
  
  
      <mt-tab-item id="cimena">影院<span class="iconfont icon-dianyingyuan" slot="icon"></span></mt-tab-item>
  
    </mt-tabbar>
  
  </div>
</template>
<script>
// import {
//         getLocalCity
//     } from './services/api.js'
  export default {
  
    data() {
  
      return {
  
        selected: "movie",
  
        title: ''
  
      }
  
    },
  
    created() {
  
      this.title = this.$route.meta
  
      if (this.$route.path == "/index") {
  
        this.selected = "movie";
  
      } else if (this.$route.path == "/cimena") {
  
        this.selected = "cimena";
  
      }
//触发获取本地城市
    //   getLocalCity().then(res=>{
    //    ((val)=>{
    //   this.$store.commit('getCity',val)
    // })(res.data.nm)
    // })
  
    },
  
    watch: {
  
      selected: function(newval) {
  
        if (newval == "cimena" && this.$route.path !== '/cimena') {
  
          this.$router.push({
  
            path: "/cimena"
  
          });
  
        } else if (newval == "movie" && this.$route.path !== '/index') {
  
          this.$router.push({
  
            path: "/index"
  
          });
  
        }
  
      },
  
      $route: function(newval) {
  
        //做一个meta的非空校验
  
        if (newval.meta != null || newval.meta != 'undefiend' || newval.meta != '') {
  
          this.title = newval.meta
  
        }
  
  
  
      }
  
    }
  
  };
</script>
<style lang="css">
  #box {
  
    margin-top: 40px;
  
    height: calc(100vh - 66px);
  
    background-color: #fff;
  
    overflow-x: hidden;
  
  }
  
  
  
  body {
  
    margin: 0;
  
  }
  
  
  
  .v-enter,
  
  .v-leave-to {
  
    transform: translateX(200px);
  
    opacity: 0;
  
  }
  
  
  
  .v-enter-active,
  
  .v-leave-active {
  
    transition: all 1s ease
  
  }
</style>