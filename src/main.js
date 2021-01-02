import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//reset.css
import '@/assets/css/reset.css'

// element-ui
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"

import VueAwesomeSwiper from "vue-awesome-swiper"
import "swiper/dist/css/swiper.css"
import seamlessScroll from "vue-seamless-scroll"
// import './assets/css/reset.scss';
/*兼容IE浏览器*/
import "babel-polyfill"


Vue.config.productionTip = false
/*UI控件*/
Vue.use(ElementUI)
/*轮播控件*/
Vue.use(VueAwesomeSwiper)
Vue.use(seamlessScroll)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
