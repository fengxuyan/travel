<template>
  <header class="home">
    <home-header></home-header>
  </header>
</template>

<script>
// @ is an alias to /src
import HomeHeader from '@/components/HomeHeader.vue'

export default {
  name: 'home',
  components: {
    HomeHeader
  }
}
</script>
