import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/Login.vue'
import Start from '../views/Start.vue'
import Register from '../views/Register.vue'
import Community from '../views/Community.vue'

import Loading from '../views/Loading.vue'
import AddContent from '../views/AddContent.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Start',
    component: Start
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/community',
    name: 'Community',
    component: Community
  },
  {
    path: '/loading',
    name: 'Loading',
    component: Loading
  },
  {
    path:'/community/addContent',
    name:'AddContent',
    component:AddContent
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
