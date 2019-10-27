<template>
    <header class="home">
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
    </header>
</template>

<script>
    // @ is an alias to /src
    import HomeHeader from '@p/home/components/HomeHeader.vue';
    import HomeSwiper from '@p/home/components/HomeSwiper.vue'
    import HomeIcons from '@p/home/components/HomeIcons.vue'


    export default {
        name: 'home',
        components: {
            HomeHeader,
            HomeSwiper,
            HomeIcons
        }
    }
</script>
