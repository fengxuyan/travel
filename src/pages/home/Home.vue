<template>
    <header class="home">
        <home-header></home-header>
        <home-swiper :swiperlist="swiperlist"></home-swiper>
        <home-icons :iconlist="iconlist"></home-icons>
        <recommend :recommendlist="recommendlist"></recommend>
        <weekend :weekendlist="weekendlist"></weekend>
    </header>
</template>

<script>
    // @ is an alias to /src
    import HomeHeader from './components/HomeHeader.vue';
    import HomeSwiper from './components/HomeSwiper.vue'
    import HomeIcons from './components/HomeIcons.vue'
    import Recommend from './components/Recommend.vue'
    import Weekend from './components/Weekend.vue'

    import axios from 'axios'
    import { mapState } from 'vuex'

    export default {
        name: 'home',
        data(){
            return{
                lastCity:'',
                swiperlist:[],
                iconlist: [],
                recommendlist:[],
                weekendlist:[]
            }
        },
        components: {
            HomeHeader,
            HomeSwiper,
            HomeIcons,
            Recommend,
            Weekend
        },
        computed:{
            ...mapState(['city'])
        },
        methods: {
            getHomeInfo() {
                axios.get('/api/index.json?city=' + this.city)
                    .then(res=>{
                        if(res.data.ret && res.data.data){
                            const data = res.data.data;
                            this.swiperlist = data.bannerList;
                            this.iconlist=data.iconList;
                            this.recommendlist=data.recommendList;
                            this.weekendlist=data.weekendList;
                        }

                    })

            },


        },
        mounted: function () {
            this.lastCity = this.city;
            this.getHomeInfo()
        },
        activated(){
            if(this.lastCity !== this.city){
                this.lastCity = this.city;
                this.getHomeInfo()
            }
        }
    }
</script>
