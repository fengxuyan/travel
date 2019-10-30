<template>
    <ul class="list">
        <li class="item">A</li>
        <li class="item">B</li>
        <li class="item">C</li>
        <li class="item">D</li>
    </ul>
</template>

<script>
    export default {
        name: "CityAlphabet"
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
            width: .5rem;
            text-align: center;
            line-height: .5rem;
            color: $bgColor;
            font-size: .33rem;

        }
    }

</style>
