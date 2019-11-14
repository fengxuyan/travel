<template>
    <div class="wrapper-detailheader" ref="detailheader">
        <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
            <span class="iconfont back-icon">&#xe624;</span>
        </router-link>
        <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
            景点详情
            <router-link to="/">
                <span class="iconfont back-icon">&#xe624;</span>
            </router-link>
        </div>

    </div>
</template>

<script>
    // import BScroll from "better-scroll"
    export default {
        name: "DetailHeader",
        data(){
            return{
                showAbs: true,
                opacityStyle:{
                    opacity : 0
                }
            }
        },
        methods:{
            handleScroll(){
                const top = document.documentElement.scrollTop ||
                    window.pageYOffset ||
                    document.body.scrollTop ||
                    document.querySelector('.wrapper-detailheader').scrollTop;

                if(top>60){
                    const opacity= top / 140;
                    opacity >1 ?1 : opacity;
                    this.opacityStyle={
                        opacity: opacity
                    }
                    this.showAbs =false;
                }
                else {
                    this.showAbs=true;
                }
            }
        },
        activated(){
            let _this = this
            window.addEventListener('scroll',_this.handleScroll)
        },
        deactivated(){
            window.removeEventListener('scroll',this.handleScroll)
        }
    }
</script>

<style scoped lang="stylus">
    @import "~@s/varibles.styl";
.wrapper-detailheader {
    position: absolute;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
}
    .header-abs {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0.2rem;
    left: 0.3rem;
    padding: .2rem;
    background-color: rgba(0,0,0,0.8);
    border-radius: 50%;
    .back-icon {
        color: #fff;
    }
}
    .header-fixed {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        overflow: hidden;
        z-index: 3;
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
