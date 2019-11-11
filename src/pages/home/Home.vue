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

    export default {
        name: 'home',
        data(){
            return{
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
        methods: {
            getHomeInfo() {
                axios.get('/api/index.json')
                    .then(res=>{
                        if(res.data.ret && res.data.data){
                            const data = res.data.data;
                            window.console.log(data)
                            this.swiperlist = data.bannerList;
                            this.iconlist=data.iconList;
                            this.recommendlist=data.recommendList;
                            this.weekendlist=data.weekendList;
                        }

                    })

            },


        },
        mounted: function () {
            this.getHomeInfo()
        }
    }
</script>
