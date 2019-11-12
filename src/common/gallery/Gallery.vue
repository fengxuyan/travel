<template>
    <div class="container">
        <div class="wrapper" @click="handleGalleryClose">
            <swiper :options="swiperOption" v-if="showswiper">
                <swiper-slide v-for="(item,index) of swiperlist" :key="index">
                    <img class="swiper-img" :src="item"/>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CommonGallery",
        props: {
            swiperlist: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        data() {
            return {
                swiperOption: {
                    pagination: '.swiper-pagination',
                    paginationType: 'custom',
                    observer: true,
                    observeParents: true,
                    paginationCustomRender: function (swiper, current, total) {
                        return current + '/' + total;
                    }
                }
            }
        },
        methods: {
            handleGalleryClose() {
                this.$emit('galleryClose')
            }
        },
        computed: {
            showswiper() {
                return this.swiperlist.length
            }
        }
    }
</script>

<style scoped lang="stylus">
    .container >>> .swiper-pagination-custom {
        bottom: -1rem;
        color: #fff;
        font-size: .25rem;
    }

    .container >>> .swiper-container {
        overflow: inherit;
    }

    .container {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 3;
        background-color: #000;
        height: 100vh;

        overflow: hidden;

    .wrapper {
        width: 100%;
        height: 0;
        padding-bottom: 100%;
    .swiper-img {
        width: 100%;
    }

    }
    }
</style>
