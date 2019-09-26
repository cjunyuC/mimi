<template>
  <div>
    <ul id="tab">
     <li> <router-link to="/index/getCity" tag="p">石家庄</router-link></li>
     <li> <router-link to="/index/watching" tag="p">正在上映</router-link></li>
     <li> <router-link to="/index/willWatch" tag="p"> 即将上映</router-link></li>
     <li> <router-link to="/index/search" tag="p">
        <span class="iconfont icon-dianyingyuan"></span>
      </router-link></li>
    </ul>
   <router-view></router-view>
  </div>
</template>
<script>
export default {};
</script>
<style lang="css" scope>
*{
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
  width:25%;
  text-align: center;


}
#tab li p {
      padding: 7px 0px;
}
.router-link-active{
    border-bottom: 2px solid red;
}
</style>