<template>
    <div class="header">
        城市选择
        <router-link to="/">
          <span class="iconfont back-icon">&#xe624;</span>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "CityHeader"
    }
</script>

<style scoped lang="stylus">
    @import "~@s/varibles.styl";
.header {
    position: relative;
    overflow: hidden;
    text-align: center;
    height: $hederHeight;
    line-height: $hederHeight;
    color: #fff;
    font-size: .3rem;
    background-color: $bgColor;
.back-icon {
    position: absolute;
    left: 0;
    width: .64rem;
    color: #fff;
}
}
</style>
