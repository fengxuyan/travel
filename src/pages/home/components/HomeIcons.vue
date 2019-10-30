<template>
    <div class="wraper">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page,index) of pages" :key="index">
                <div class="icon"
                     v-for="item of page"
                     :key="item.id">
                    <div class="icon-img">
                        <img :src="item.imgUrl"/>
                    </div>
                    <p class="icon-content">{{item.desc}}</p>
                </div>
            </swiper-slide>

        </swiper>
    </div>
</template>

<script>
    export default {
        name: "HomeIcons",
        props:{
            iconlist: Array
        },
        data() {
            return {
                swiperOption: {
                    autoplay: false
                }
            }
        },
        computed: {
            pages() {
                const pages = [];
                this.iconlist.forEach((item, index) => {
                    const page = Math.floor(index / 8)
                    if (!pages[page]) {
                        pages[page] = []
                    }
                    pages[page].push(item)
                })
                return pages
            }
        }
    }
</script>

<style scoped lang="stylus">
    @import "~@s/varibles.styl";
    @import "~@s/mixins.styl";

    .wraper >>> .swiper-container {
        overflow: hidden;
        height: 0;
        width: 100%;
        padding-bottom: 50%;
    }

    .wraper {
        /*background: green;*/
        font-size: .28rem;

    .icon {
        float: left;
        overflow: hidden;
        position: relative;
        width: 25%;
        padding-bottom: 25%;
        height: 0;

    .icon-img {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: .15rem;
        padding: .35rem;

    img {
        display: block;
        margin: 0 auto;
        height: 100%;
    }

    }
    .icon-content {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: .4rem;
        line-height: .4rem;
        text-align: center;
        color: $darkTextColor;
        ellipsis()
    }

    }

    }
</style>
