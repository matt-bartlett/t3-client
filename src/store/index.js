import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import playlists from './modules/playlists'
import tracks from './modules/tracks'
import banner from './modules/banner'
import loader from './modules/loader'

export default new Vuex.Store({
  modules: {
    playlists: playlists,
    tracks: tracks,
    banner: banner,
    loader: loader
  }
})
