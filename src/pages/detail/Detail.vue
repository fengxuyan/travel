<template>
    <div>
        <detail-banner
                :swiperlist="swiperlist"
                :sightName="sightName"
                :bannerImg="bannerImg"
                :commentsNum="commentsNum"
        ></detail-banner>
        <detail-header></detail-header>
        <detail-list :list="list"></detail-list>
        <div class="content"></div>
    </div>
</template>

<script>
    import DetailBanner from './components/DetailBanner.vue'
    import DetailHeader from './components/DetailHeader.vue'
    import DetailList from './components/DetailList.vue'
    import axios from 'axios'

    export default {
        name: "Detail",
        components:{
           DetailBanner,
            DetailHeader,
            DetailList
        },
        data(){
            return{
                list:[],
                swiperlist:[],
                sightName:'',
                bannerImg:'',
                commentsNum:0,
                lastid:null
            }
        },
        methods:{
            getDetail(){
                axios.get('/api/detail.json',{
                    params:{
                        id:this.$route.params.id
                    }
                })
                    .then(res=>{
                        if(res.data.ret && res.data.data){
                            const data = res.data.data;
                            this.list = data.categoryList;
                            this.swiperlist=data.gallaryImgs;
                            this.sightName=data.sightName;
                            this.bannerImg=data.bannerImg;
                            this.commentsNum=data.commentsNum;
                            this.lastid=this.$route.params.id;
                        }

                    })
            }
        },
        mounted(){
            this.lastid=this.$route.params.id;
            this.getDetail()
        },
        activated(){
            if(this.lastid !== this.$route.params.id){
                this.getDetail()
            }
        }
    }
</script>

<style scoped lang="stylus">
.content {
    height: 50rem;
}
</style>
