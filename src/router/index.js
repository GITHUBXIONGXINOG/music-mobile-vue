import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home/index'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: "Home",
    component: Home
  },
  {
    path: '/artists',
    name: "Artists",
    component: () => import('@/views/Artists/index')
  },
  {
    path: '/mine',
    name: "Mine",
    component: () => import('@/views/Mine/index')
  },
  {
    path: '/search',
    name: "Search",
    component: () => import('@/views/Search/index')
  },
  {
    path: '/songList',
    name: "SongList",
    component: () => import('@/views/SongList/index')
  },
  {
    path: '/top',
    name: "Top",
    component: () => import('@/views/Top/index')
  },

]

const router = new VueRouter({
  routes,
})

export default router
