<template>
    <div>
        <div v-for="(item,index) of list" :key="index">
            <div class="item-title border-bottom">
                <span class="item-title-icon"></span>
                {{item.title}}
                <div v-if="item.children">
                    <detail-list :list="item.children"></detail-list>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DetailList",
        props: {
            list: Array
        }
    }
</script>

<style scoped lang="stylus">
.item-title {
    padding: 0 0.2rem;
    font-size: 0.3rem;
    line-height: 0.72rem;

    .item-title-icon {
        display: inline-block;
        position: relative;
        width: 0.36rem;
        height: 0.36rem;
        top: .08rem;
        left: 0;
        background: url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -0.45rem no-repeat;
        background-size: 0.4rem 3rem;
    }
}
</style>
