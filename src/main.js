import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './api'
Vue.prototype.$api = api
Vue.config.productionTip = false
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
