import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import playlists from './modules/playlists'
import tracks from './modules/tracks'

export default new Vuex.Store({
  modules: {
    playlists: playlists,
    tracks: tracks
  }
})
