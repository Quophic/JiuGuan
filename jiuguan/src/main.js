import Vue from 'vue'
import '@mdi/font/css/materialdesignicons.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import VueResource from 'vue-resource' // 导入vue-resource
import Axios from 'axios'


Vue.config.productionTip = false




//网络请求使用
//this.$axios.get('/路径')
//这是全局的
Vue.prototype.$axios = Axios
Axios.defaults.baseURL='/api'

new Vue({
  router,
  store,
  vuetify,
  VueResource,
  render: h => h(App)
}).$mount('#app')
