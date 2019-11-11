<template>
    <div class="wrapper">
        <img class="banner-img"
             src="//img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg"/>
        <div class="banner-info">
            <div class="info-left">故宫(AAAAA景区)</div>
            <div class="info-right"><span class="iconfont back-icon">&#xe6bd;</span>12</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Banner"
    }
</script>

<style scoped lang="stylus">

    .wrapper {
        position: relative;
        overflow: hidden;
        height: 0;
        padding-bottom: 55%;

    .banner-img {
        width: 100%;
    }

    .banner-info {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: space-between;
        bottom: 0;
        left: .3rem;
        right: .3rem;
        font-size: 0.32rem;
        color: #fff;
        line-height: .8rem;

        background-image:linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.8));

    .info-right {
        background-color: rgba(0,0,0,0.8);
        border-radius: 0.3rem;
        font-size: 0.28rem;
        height: .5rem;
        line-height: .5rem;
        padding: 0 .22rem;
    }

    }
    }
</style>
