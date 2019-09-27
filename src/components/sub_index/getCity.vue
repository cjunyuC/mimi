<template>
    <div>
    
        <mt-index-list>
    
            <h2>热门城市</h2>
    
            <ul id="hotCities">
    
                <li v-for="item in hotCities" @click="changeCity(item)" :key="item.id">{{item}}</li>
    
            </ul>
   
            <!--
    
              将对象的key进行排序
    
          -->
    
            <mt-index-section :index="key" v-for="key in Object.keys(citiesObj).sort()" :key="key">
    
            
                   <div @click="changeCity(item.nm)" v-for="(item) in citiesObj[key]" :key="item.id">
                        <mt-cell :title="item.nm"></mt-cell>
                   </div>
             
         
            </mt-index-section>
    
        </mt-index-list>
    
    </div>
</template>
<script>
    import {
    
        getCity,
        getLocalCity
    
    } from '../../services/api.js'
    
    export default {
    
        data() {
    
            return {
    
                list: [],
    
            }
    
        },
    
        created() {
    
            //获取城市列表的数据
    
            getCity().then(res => {
            console.log(res)
                this.list = res.data.cities
    
            })
    
        },
    
        computed: {
    
            //通过计算监听属性，将这个热门城市数组反出去
    
            hotCities() {
    
                const hotList = []
    
                this.list.filter(item => {
    
                    if (item.isHot === 1) {
    
                        hotList.push(item.nm)
    
                    }
    
                })
    
                return hotList
    
            },
    
            // obj:{
    
            //     key:[{}]
    
            // }
    
            citiesObj() {
    
                //将a-z作为键值，向对象里面推相对应的城市
    
                const citiesObj = {}
    
                this.list.filter(item => {
    
                    const firstCode = item.py.charAt(0).toUpperCase()
    
                    if (citiesObj[firstCode]) {
    
    
    
                        citiesObj[firstCode].push(item)
    
                    } else {
                        citiesObj[firstCode] = []

                        citiesObj[firstCode].push(item)
    
                    }
    
                })
    
                return citiesObj
    
            }
    
        },
    methods: {
        changeCity(city){
            console.log(city)
            this.$store.commit('changeCities',{city:city})
        }
    }, 
    }
</script>
<style lang="css" scoped>
    * {
    
        margin: 0;
    
        padding: 0;
    
    }
    
    
    
    h2 {
    
        color: #888888;
    
        background-color: #fff;
    
        text-shadow: 1px 1px 1px
    
    }
    
    
    
    #hotCities {
    
        display: flex;
    
        justify-content: space-between;
    
        flex-wrap: wrap;
        background-color:#aeb;
    
    }
    
    
    
    #hotCities li:hover {
    
        color: black;
    
        background-color: #fff
    
    }
    
    
    
    #hotCities li {
        border :1px solid #ddd;
        width: 30%;
    
        list-style: none;
    
        background-color: #eee;
    
        color: #888888;
    
        text-align: center;
    
        margin-top: 5px;
    
    }
    
    
    
    .mint-indexlist-nav {
    
        border: 0;
    
        color: white;
    
        background-color: #fff;
    
    }
 ::v-deep .mint-indexsection-index{
        background-color:#aad;
    }
    .mint-cell{
        background-color:#eef;
    }
</style>
