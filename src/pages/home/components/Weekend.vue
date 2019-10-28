<template>
    <div class="wrapper">
        <div class="recommend-title">周末去哪儿</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
                <div class="item-img-wrapper"><img class="item-img" :src="item.imgUrl"/></div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Weekend",
        data() {
            return {
                recommendList: [
                    {
                        id: '0001',
                        imgUrl: 'https://imgs.qunarzz.com/sight/source/1505/85/708da4ab8dba17.jpg_r_640x214_d3d8cfa5.jpg',
                        title: '青岛海昌极地海洋公园',
                        desc: '好评如潮，小伙伴热推景点~'
                    },
                    {
                        id: '0002',
                        imgUrl: 'https://imgs.qunarzz.com/sight/source/1505/85/708da4ab8dba17.jpg_r_640x214_d3d8cfa5.jpg',
                        title: '青岛海昌极地海洋公园',
                        desc: '好评如潮，小伙伴热推景点~'
                    }
                ]
            }

        }
    }
</script>

<style scoped lang="stylus">
    @import "~@s/mixins.styl";

    .wrapper {
        font-size: .28rem;
    }

    .recommend-title {
        line-height: .8rem;
        background: #eee;
        text-indent: .2rem;
    }

    .item-img-wrapper {
        overflow: hidden;
        height: 0;
        width: 100%;
        padding-bottom: 33.9%;
    }

    .item-info {
        min-width: 0;
        padding: .1rem;

    .item-title {
        line-height: .55rem;
        font-size: .3rem;
    ellipsis()
    }

    .item-desc {
    ellipsis();
        line-height: .45rem;
        font-size: .25rem;
        color: #ccc;
    }

    }

</style>
