<template>
    <div class="wrapper">
        <swiper :options="swiperOption"  v-if="showswiper">
            <swiper-slide v-for="item of swiperlist" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl"/>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: "HomeSwiper",
        props:{
            swiperlist: Array
        },
        data() {
            return {
                swiperOption: {
                    pagination: '.swiper-pagination',
                    loop: true
                },
            }
        },
        computed: {
            showswiper(){
                return this.swiperlist.length
            }
        }
    }
</script>

<style scoped lang="stylus">
    .wrapper >>> .swiper-pagination-bullet-active {
        background: #fff !important;
    }

    .wrapper {
        overflow: hidden;
        widdth: 100%;
        height: 0;
        padding-bottom: 31.25%;
        background: #eee;
        /*swiper-pagination-bullet */
    }

    .swiper-img {
        width: 100%;
    }
</style>
