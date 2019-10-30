<template>
    <div class="header">
        <div class="header-left">
            <span class="iconfont back-icon">&#xe624;</span>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            输入城市/景点/主题/游玩
        </div>
        <router-link to="/city">
            <div class="header-right">
                {{city}}
                <span class="iconfont arrow-icon">&#xe600;</span>
            </div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "HomeHeader",
        props: {
            city: String
        }
    }
</script>

<style scoped lang="stylus">
    @import "~@s/varibles.styl";
    .header {
        display: flex;
        font-size: .3rem;
        height: $hederHeight;
        line-height: $hederHeight;
        background: $bgColor;
        color: #fff;

    .header-left {
        width: .64rem;
        float: left;
        text-align: center;
    }

    .header-right {
        width: 1.24rem;
        float: right;
        text-align: center;
    color: #fff;

    .arrow-icon {
        vertical-align: bottom;
        font-size: .2rem;
    }

    }

    .header-input {
        flex: 1;
        background-color: #fff;
        border-radius: .1rem;
        margin-top: .12rem;
        padding-left: .2rem;
        height: .64rem;
        margin-left: .2rem;
        line-height: .64rem;
        color: #ccc;
    }

    }
</style>
