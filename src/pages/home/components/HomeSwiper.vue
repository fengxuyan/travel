<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl"/>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: "HomeSwiper",
        data() {
            return {
                swiperOption: {
                    pagination: '.swiper-pagination',
                    loop: true
                },
                swiperList: [{
                    id: '001',
                    imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201910/78b240572657a6da67e662540c846dd6.jpg_750x200_b75c8be9.jpg'
                }, {
                    id: '002',
                    imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201910/fcc952d6b479db0e7e61922f3ee70f04.jpg_750x200_c5b67f70.jpg'
                }]

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
        padding-bottom: 26.7%;
        background: #eee;
        /*swiper-pagination-bullet */
    }

    .swiper-img {
        width: 100%;
    }
</style>
