<template>
    <div class="wrapper" ref="wrapper">
        <div>
        <div class="area">
            <div class="title border-topbottom">当前城市</div>
            <div class="button-list">
                <div class="button-wrapper">
                    <div class="button">{{currentCity}}</div>
                </div>
            </div>
        </div>
        <div class="area">
            <div class="title border-topbottom">热门城市</div>
            <div class="button-list">
                <div class="button-wrapper" v-for="item of hotCities" :key="item.id">
                    <div class="button" @click="handleCityClick(item.name)">{{item.name}}</div>
                </div>
            </div>
        </div>
        <div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
            <div class="title border-topbottom">{{key}}</div>
            <div class="item-list" v-for="inneritem of item" :key="inneritem.id">
                <div class="item border-bottom" @click="handleCityClick(inneritem.name)">{{inneritem.name}}</div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
    import BScroll from "better-scroll"
    import {mapState,mapMutations} from 'vuex'
    export default {
        name: "CityList",
        props:{
            cities: Object,
            hotCities: Array,
            letter: String
        },
        methods:{
            ...mapMutations(['changeCity']),
            handleCityClick(city){
                this.changeCity(city)
                // this.$store.dispatch('changeCity',city)
                this.$router.push('/')
            },
        },
        computed:{
            ...mapState({currentCity:'city'})
        },
        mounted(){
            this.scroll=new BScroll(this.$refs.wrapper)
        },
        watch:{
            letter(){
                const element=this.$refs[this.letter.trim()][0]
                this.scroll.scrollToElement(element)
            }
        }
    }
</script>

<style scoped lang="stylus">
    @import "~@s/varibles.styl";

    .border-topbottom {

    &
    :before {
        border-color: #ccc;
    }

    &
    :after {
        border-color: #ccc;
    }

    }
    .wrapper {
        overflow: hidden;
        position: absolute;
        top: 1.6rem;
        left: 0;
        right: 0;
        bottom: 0;
    }
    .title {
        padding: .2rem;
        background-color: #eeeeee;
        color: #666;
        font-size: .26rem;
    }

    .button-list {
        overflow: hidden;
        padding: .1rem;

    .button-wrapper {
        float: left;
        display: inline-block;
        width: 33.33%;

    .button {
        margin: .1rem .2rem;
        padding: .15rem 0;
        border: 1px solid #eee;
        text-align: center;
        font-size: .26rem;
        color: #666;
    }
    }
    }

    .item-list {
        font-size: .26rem;
        color: #666;
        .item {
            padding-left: .2rem;
            line-height: .8rem;
            height: .8rem;
        }
    }
</style>
