<template>
    <div>
        <detail-banner></detail-banner>
        <detail-header></detail-header>
        <detail-list :list="list"></detail-list>
        <div class="content"></div>
    </div>
</template>

<script>
    import DetailBanner from './components/DetailBanner.vue'
    import DetailHeader from './components/DetailHeader.vue'
    import DetailList from './components/DetailList.vue'
    export default {
        name: "Detail",
        components:{
           DetailBanner,
            DetailHeader,
            DetailList
        },
        data(){
            return{
                list:[
                    {
                        title:'成人票',
                        children:[
                            {title:'成人3馆联票',
                                children:[
                                    {title:'成人3馆联票'},
                                    {title:'成人3馆联票'},
                                    {title:'成人3馆联票'}
                                ]},
                            {title:'成人3馆联票'},
                            {title:'成人3馆联票'}
                        ]
                    },
                    {title:'儿童票'},
                    {title:'学生票'}
                    ]
            }
        }
    }
</script>

<style scoped lang="stylus">
.content {
    height: 50rem;
}
</style>
