import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import Axios from 'axios'

Vue.config.productionTip = false


//网络请求使用
//this.$axios.get('/路径')
//这是全局的
Vue.prototype.$axios = Axios
Axios.defaults.baseURL='/api'

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
