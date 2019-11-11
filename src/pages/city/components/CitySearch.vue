<template>
    <div>
        <div class="search">
            <input v-model="keyword" type="text" class="search-input" placeholder="输入城市名或拼音"/>
        </div>
        <div class="search-content" ref="search" v-show="keyword">
            <ul>
                <li class="search-item border-bottom" v-for="item of list" :key="item.id" @click="handleCityClick(item.name)">{{item.name}}</li>
                <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import BScroll from "better-scroll"
    import {mapMutations} from 'vuex'
    export default {
        name: "CitySearch",
        props:{
            cities: Object
        },
        data(){
            return{
                keyword: '',
                list: [],
                timer: null
            }
        },
        methods:{
            ...mapMutations(['changeCity']),
            handleCityClick(city){
                this.changeCity(city)
                // this.$store.dispatch('changeCity',city)
                this.$router.push('/')
            },
            // handleCityClick(city){
            //     this.$store.dispatch('changeCity',city)
            //     this.$router.push('/')
            // }
        },
        watch:{
            keyword(){
                if(this.timer){
                    clearTimeout(this.timer)
                }
                if(!this.keyword){
                    this.list = []
                    return
                }
                this.timer = setTimeout(() =>{
                    const result=[]
                    for (let i in this.cities){

                        this.cities[i].forEach((value) => {
                            if(value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) >-1){
                                result.push(value)
                            }
                        })
                    }
                    this.list = result
                },100)
            }
        },
        mounted(){

            this.scroll= new BScroll(this.$refs.search)
        },
        computed:{
            hasNoData(){
                return !this.list.length
            }
        }
    }
</script>

<style scoped lang="stylus">
    @import "~@s/varibles.styl";

    .search {
        padding: .1rem;
        background-color: $bgColor;
        padding-top: 0;

    .search-input {
        display: block;
        box-sizing: border-box;
        padding: 0 .1rem;
        margin: 0 auto;
        height: .62rem;
        width: 96%;
        line-height: .62rem;
        border-radius: .1rem;
        outline: none;
        border: none;
        text-align: center;
        color: #666;
        font-size: .3rem;
    }
    }
    .search-content {
        position: absolute;
        top: 1.6rem;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1;
        overflow: hidden;
        background-color: #eee;
        font-size: .3rem;
        .search-item {
            background-color: #fff;
            line-height: .7rem;
            padding-left: .3rem;
        }
    }
</style>
