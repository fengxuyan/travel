<template>
    <div class="search">
        <input type="text" class="search-input" placeholder="输入城市名或拼音"/>
    </div>
</template>

<script>
    export default {
        name: "CitySearch"
    }
</script>

<style scoped lang="stylus">
    @import "~@s/varibles.styl";

    .search {
        padding: .1rem;
        background-color: $bgColor;
        padding-top: 0;
    .search-input {
        display: block;
        box-sizing: border-box;
        padding: 0 .1rem;
        margin: 0 auto;
        height: .62rem;
        width: 96%;
        line-height: .62rem;
        border-radius: .1rem;
        outline: none;
        border: none;
        text-align: center;
        color:#666;
        font-size: .3rem;
    }

    }
</style>
