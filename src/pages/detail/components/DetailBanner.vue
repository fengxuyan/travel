<template>
    <div>
    <div class="wrapper"  @click="handleShowGallery">
        <img class="banner-img"
             :src="bannerImg"/>
        <div class="banner-info">
            <div class="info-left">{{sightName}}</div>
            <div class="info-right"><span class="iconfont back-icon">&#xe6bd;</span>{{commentsNum}}</div>
        </div>
    </div>
        <fade-animation>
        <common-gallery :swiperlist="swiperlist" v-show="showGallery" @galleryClose="handleCloseGallery"></common-gallery>
        </fade-animation>
    </div>
</template>

<script>
    import CommonGallery from 'common/gallery/Gallery.vue'
    import FadeAnimation from 'common/fade/FadeAnimation.vue'
    export default {
        name: "DetailBanner",
        props:{
            swiperlist:Array,
            sightName: String,
            bannerImg:String,
            commentsNum:Number
        },
        data(){
          return{
              showGallery:false,
          }
        },
        methods:{
            handleShowGallery(){
                this.showGallery=true;
            },
            handleCloseGallery(){
                this.showGallery=false;
            }
        },
        components:{
            CommonGallery,
            FadeAnimation
        }
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
        left: 0;
        right: 0;
        padding: 0 .3rem;
        font-size: 0.32rem;
        color: #fff;
        line-height: .8rem;

        background-image:linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,.8));

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
