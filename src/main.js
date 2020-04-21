import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueWindowSize from 'vue-window-size'
 
Vue.use(VueAxios, axios)
Vue.use(VueWindowSize)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
