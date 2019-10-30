<template>
    <div class="wrapper">
        <div class="recommend-title">周末去哪儿</div>
        <ul>
            <li class="item border-bottom" v-for="item of weekendlist" :key="item.id">
                <div class="item-img-wrapper"><img class="item-img" :src="item.imgUrl"/></div>
                <div class="item-info">
                    <p class="item-title">{{item.name}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Weekend",
        props:{
            weekendlist:Array
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
        padding-bottom: 37.09%;
        img {
            width:100%;
        }
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
        font-size: .26rem;
        color: #ccc;
    }

    }

</style>
