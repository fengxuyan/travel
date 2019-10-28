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
        data() {
            return {
                iconList: [
                    {
                        id: '0001',
                        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                        desc: '景点门票'
                    },
                    {
                        id: '0002',
                        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
                        desc: '一日游'
                    },
                    {
                        id: '0003',
                        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
                        desc: '青岛必游'
                    },
                    {
                        id: '0004',
                        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/89/55083b0f1951f302.png',
                        desc: '帆船体验'
                    },
                    {
                        id: '0005',
                        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
                        desc: '海底世界'
                    },
                    {
                        id: '0006',
                        imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/f04285731d7121da1b9028e2bf431695.png',
                        desc: '崂山'
                    },
                    {
                        id: '0007',
                        imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/8671dfb53aecb10748c86b4c29971a14.png',
                        desc: '动物园'
                    },
                    {
                        id: '0008',
                        imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/e48e868a92b508a04da2a3bfdd35d4cd.png',
                        desc: '博物馆'
                    },
                    {
                        id: '0009',
                        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
                        desc: '青岛极地'
                    },


                ],
                swiperOption: {
                    loop: false
                }
            }
        },
        computed: {
            pages() {
                const pages = [];
                this.iconList.forEach((item, index) => {
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
        bottom: .3rem;
        padding: .2rem;

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
