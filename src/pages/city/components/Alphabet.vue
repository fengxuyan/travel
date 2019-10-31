<template>
    <ul class="list">
        <li class="item" @touchmove.prevent
            v-for="item of letters"
            :key="item"
            :ref="item"
            @click="handleletterclick"
            @touchstart="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
        >
            {{item}}
        </li>
    </ul>
</template>

<script>
    export default {
        name: "CityAlphabet",
        props: {
            cities: Object
        },
        data() {
            return {
                touchStatus: false
            }
        },
        computed: {
            letters() {
                const letters = []
                for (let i in this.cities) {
                    letters.push(i)
                }
                return letters
            }
        },
        methods: {
            handleletterclick(e) {
                this.$emit('letterchange', e.target.innerHTML)
            },
            handleTouchStart() {
                this.touchStatus = true;
            },
            handleTouchMove(e) {
                const startY = this.$refs['A'][0].offsetTop;
                const touchY = e.touches[0].clientY - 79;
                const index = Math.floor((touchY - startY) / 20);

                if (index >= 0 && index < this.letters.length) {
                    this.$emit('letterchange', this.letters[index])
                }
            },
            handleTouchEnd() {
                this.touchStatus = false;

            }
        }

    }
</script>

<style scoped lang="stylus">
    .list {
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: absolute;
        right: 0;
        top: 1.68rem;
        bottom: 0;
        width: 0.4rem;
        overflow: hidden
    .item {
        width: .38rem;
        text-align: center;
        line-height: .4rem;
        color: #00bcd4;
        font-size: .26rem;
    }
    }

</style>
