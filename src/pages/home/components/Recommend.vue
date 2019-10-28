<template>
    <div class="wrapper">
        <div class="recommend-title">热门推荐</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
                <img class="item-img" :src="item.imgUrl" />
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Recommend",
        data() {
            return{
                recommendList:[
                    {
                        id: '0001',
                        imgUrl: 'https://imgs.qunarzz.com/sight/p0/201403/06/887808fb718f9a39c880878125f18eb7.jpg_200x200_65775d3a.jpg',
                        title: '青岛海昌极地海洋公园',
                        desc: '好评如潮，小伙伴热推景点~'
                    },
                    {
                        id: '0002',
                        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1804/7f/7fcb9862905c5e99a3.water.jpg_200x200_1e6da401.jpg',
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
        margin-top: .2rem;
        line-height: .8rem;
        background: #eee;
        text-indent: .2rem;
    }

    .item {
        display: flex;
        padding: .1rem;
        height: 1.9rem;
        overflow: hidden;
    .item-img {
        width: 1.7rem;
        height: 1.7rem;
        padding: .1rem;
    }

    .item-info {
        flex: 1;
        min-width: 0;

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

    .item-button {
        padding: .08rem .1rem;
        margin-top: .15rem;
        background-color: #ff9300;
        border-radius: 3px;
        color: #fff;
        border: 0;
    }

    }
    }
</style>
