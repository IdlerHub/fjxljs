import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Detail from '../views/Detail'
import News from '../views/News'
import SuccessDemo from '../views/SuccessDemo'
import ContactUs from '../views/ContactUs'
import NewsContent from '../views/NewsContent'
import SuccessDetail from '../views/SuccessDetail'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/news',
    name: 'News',
    component: News
  },
  {
    path: '/successDemo',
    name: 'SuccessDemo',
    component: SuccessDemo
  },
  {
    path: '/contactUs',
    name: 'ContactUs',
    component: ContactUs
  },
  {
    path: '/newsDetail',
    name: 'NewsContent',
    component: NewsContent
  },
  {
    path: '/successDetail',
    name: 'SuccessDetail',
    component: SuccessDetail
  }
]

const router = new VueRouter({
  routes
})

export default router
