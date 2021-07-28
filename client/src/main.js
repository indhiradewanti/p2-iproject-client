import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "../src/assets/img/favicon.png"
import "../src/assets/img/apple-touch-icon.png"
import "../src/assets/vendor/animate.css/animate.min.css"
import "../src/assets/vendor/bootstrap/css/bootstrap.min.css"
import "../src/assets/vendor/bootstrap-icons/bootstrap-icons.css"
import "../src/assets/vendor/boxicons/css/boxicons.min.css"
import "../src/assets/vendor/fontawesome-free/css/all.min.css"
import "../src/assets/vendor/glightbox/css/glightbox.min.css"
import "../src/assets/vendor/remixicon/remixicon.css"
import "../src/assets/vendor/swiper/swiper-bundle.min.css"
import "../src/assets/css/style.css"
import VueSocketIO from 'vue-socket.io'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(
  new VueSocketIO({
    debug : true,
    connection : "http://localhost:3000/"
  })
)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
