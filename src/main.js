import Vue from 'vue'

Vue.config.devtools = true

import App from './App.vue'
import router from './router'
import store from './store'

import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'

import FastClick from 'fastclick'
import  '@s/reset.css'
import  '@s/border.css'
import  '@s/iconfont.css'

Vue.config.productionTip = false
FastClick.attach(document.body)
Vue.use(VueAwesomeSwiper, /* { default global options } */)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
