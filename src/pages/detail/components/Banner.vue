<template>
    <div>
    <div class="wrapper" @click="handleShowGallery">
        <img class="banner-img"
             src="//img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg"/>
        <div class="banner-info">
            <div class="info-left">故宫(AAAAA景区)</div>
            <div class="info-right"><span class="iconfont back-icon">&#xe6bd;</span>12</div>
        </div>
    </div>
        <common-gallery :swiperlist="swiperlist" v-show="showGallery" @galleryClose="handleCloseGallery"></common-gallery>
    </div>
</template>

<script>
    import CommonGallery from 'common/gallery/Gallery.vue'
    export default {
        name: "Banner",
        data(){
          return{
              showGallery:false,
              swiperlist:[
                  'http://img1.qunarzz.com/sight/p0/1909/4e/4e1afc2e1133ade7a3.img.jpg_r_800x800_d3eb324d.jpg',
                  'http://img1.qunarzz.com/sight/p0/1909/4e/4e1afc2e1133ade7a3.img.jpg_r_800x800_d3eb324d.jpg']
          }
        },
        methods:{
            handleShowGallery(){
                this.showGallery=true;
            },
            handleCloseGallery(){
                window.console.log('hhheil')
                this.showGallery=false;
            }
        },
        components:{
            CommonGallery
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
        left: .3rem;
        right: .3rem;
        font-size: 0.32rem;
        color: #fff;
        line-height: .8rem;

        background-image:linear-gradient(to top,rgba(0,0,0,0),rgba(0,0,0,.8));

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
