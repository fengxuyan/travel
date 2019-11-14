<template>
    <ul class="list">
        <li class="item"
            v-for="item of letters"
            :key="item"
            :ref="item"
            @click="handleletterclick"
            @touchstart.prevent="handleTouchStart"
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
                touchStatus: false,
                startY: 0,
                timer: null

            }
        },
        updated: function () {
            this.startY = this.$refs['A'][0].offsetTop
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
                if (this.touchStatus) {
                    if (this.timer) {
                        clearTimeout(this.timer)
                    }
                    this.timer = setTimeout(() => {
                        const touchY = e.touches[0].clientY - 79;
                        const index = Math.floor((touchY - this.startY) / 20);

                        if (index >= 0 && index < this.letters.length) {
                            this.$emit('letterchange', this.letters[index])
                        }
                    }, 10)
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
