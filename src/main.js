import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './sass/main.scss'
import Navbar from './components/Navbar.vue'
import Notification from './components/Notification.vue'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



Vue.component('app-navbar', Navbar)
Vue.component('app-notification', Notification)