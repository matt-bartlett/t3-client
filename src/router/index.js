import Vue from 'vue'
import Router from 'vue-router'
import Playlists from '@/components/Playlists'
import Tracks from '@/components/Tracks'

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
      path: '*',
      redirect: '/'
    }
  ]
})
