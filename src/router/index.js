import Vue from 'vue'
import Router from 'vue-router'
import Tracks from '@/components/Tracks'
import Search from '@/components/Search'
import Playlists from '@/components/Playlists'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Playlists',
      component: Playlists
    },
    {
      path: '/playlist/:id',
      name: 'Tracks',
      component: Tracks
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '*',
      redirect: '/'
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
