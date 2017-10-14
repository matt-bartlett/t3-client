import Vue from 'vue'
import Router from 'vue-router'
import Playlists from '@/components/Playlists'
import Tracks from '@/components/Tracks'
import Search from '@/components/Search'

Vue.use(Router)

export default new Router({
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
  ]
})
