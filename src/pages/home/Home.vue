<template>
    <header class="home">
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
        <recommend></recommend>
        <weekend></weekend>
    </header>
</template>

<script>
    // @ is an alias to /src
    import HomeHeader from '@p/home/components/HomeHeader.vue';
    import HomeSwiper from '@p/home/components/HomeSwiper.vue'
    import HomeIcons from '@p/home/components/HomeIcons.vue'
    import Recommend from '@p/home/components/Recommend.vue'
    import Weekend from '@p/home/components/Weekend.vue'

    import axios from 'axios'

    export default {
        name: 'home',
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
                        console.log(res)
                    })

            },


        },
        mounted: function () {
            this.getHomeInfo()
        }
    }
</script>
