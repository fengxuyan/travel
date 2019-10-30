<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
    </div>
</template>

<script>
    import CityHeader from "./components/CityHeader.vue"
    import CitySearch from "./components/CitySearch.vue"

    export default {
        name: "",
        components: {
            CityHeader,
            CitySearch
        }
    }
</script>

<style scoped>

</style>
