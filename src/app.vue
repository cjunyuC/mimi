<template>
  <div>
    <mt-header fixed title="MiMi影院"></mt-header>
    
       <div id="box">
         <transition mode="out-in">
      <router-view></router-view>
    </transition>
    </div>
    
   
    <mt-tabbar v-model="selected">
      <mt-tab-item id="movie">电影</mt-tab-item>
      <mt-tab-item id="cimena">影院</mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return { selected: "movie" };
  },
  created() {
    if (this.$route.path == "/index") {
      this.selected = "movie";
    } else if (this.$route.path == "/cimena") {
      this.selected = "cimena";
    }
  },
  watch: {
    selected: function(newval) {
      if (newval == "cimena" && this.$route.path!=='/cimena') {
        this.$router.push({ path: "/cimena" });
      } else if (newval == "movie"&&this.$route.path!=='/index') {
        this.$router.push({ path: "/index" });
      }
    }
  }
};
</script>
<style lang="css">
#box {
  margin-top: 40px;
  height: calc(100vh - 66px);
  background-color: red;
  overflow: hidden;
}
body {
  margin: 0;
}
.v-enter,.v-leave-to{
  transform: translateX(200px);
  opacity: 0;
}

.v-enter-active,.v-leave-active{
  transition: all 1s ease 
}
</style>