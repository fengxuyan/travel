<template>
    <div>
        <city-header></city-header>
        <city-search :cities="cities"></city-search>
        <city-list
                :hotCities="hotCities"
                :cities="cities"
                :letter="letter"
        >
        </city-list>
        <city-alphabet
                :cities="cities"
                @letterchange="handleletterchange"
        >
        </city-alphabet>
    </div>
</template>

<script>
    import CityHeader from "./components/CityHeader.vue"
    import CitySearch from "./components/CitySearch.vue"
    import CityList from "./components/CityList.vue"
    import CityAlphabet from "./components/Alphabet.vue"
    import axios from "axios"

    export default {
        name: "",
        components: {
            CityHeader,
            CitySearch,
            CityList,
            CityAlphabet
        },
        data(){
            return{
                cities:{},
                hotCities:[],
                letter:''
            }
        },
        methods:{
            getCityInfo:function () {
                axios.get('/api/city')
                    .then(res=>{
                        if(res.data.ret && res.data.data){
                            const data = res.data.data;
                            window.console.log(data)
                            this.hotCities = data.hotCities;
                            this.cities = data.cities;
                        }

                    })
            },
            handleletterchange(letter){
                window.console.log(letter)
                this.letter=letter;
            }
        },
        mounted: function () {
            this.getCityInfo()
        }
    }
</script>

<style scoped>

</style>
