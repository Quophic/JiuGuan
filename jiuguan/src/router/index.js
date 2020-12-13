import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/Login.vue'
import Start from '../views/Start.vue'
import Register from '../views/Register.vue'
import Community from '../views/Community.vue'
import Home from '../views/Home.vue'
import Music from '../views/Music.vue'
import Charts from '../views/Charts.vue'
import Loading from '../views/Loading.vue'
import Others from '../views/Others.vue'
import AddContent from '../views/AddContent.vue'
import User from '../views/User.vue'
import Reply from '../views/Reply.vue'
import Second from '../views/Second.vue'

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
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/community/addContent',
    name: 'AddContent',
    component: AddContent
  },
  {
    path: '/music',
    name: 'Music',
    component: Music
  },
  {
    path: '/charts',
    name: 'Charts',
    component: Charts
  },
  {

    path:'/user',
    name:'name',
    component:User
  },
  {
    
    path: '/others',
    name: 'Others',
    component: Others

  },
  {
    path: '/reply',
    name: 'Reply',
    component: Reply
  },
  {
    path: '/second',
    name: 'Second',
    component: Second
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

export default router
