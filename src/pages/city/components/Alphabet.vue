<template>
    <ul class="list">
        <li class="item" v-for="(item,key) of cities" :key="key">{{key}}</li>
    </ul>
</template>

<script>
    export default {
        name: "CityAlphabet",
        props:{
            cities: Object
        }

    }
</script>

<style scoped lang="stylus">
    @import "~@s/varibles.styl";
    .list {
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: absolute;
        right:0;
        top: 1.68rem;
        bottom: 0;
        .item {
            width: .38rem;
            text-align: center;
            line-height: .42rem;
            color: #00bcd4;
            font-size: .26rem;
        }
    }

</style>
