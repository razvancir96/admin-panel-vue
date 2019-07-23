import Vue from 'vue'
import App from './App.vue'
import {store} from './store'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
