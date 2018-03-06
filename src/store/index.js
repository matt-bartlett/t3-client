import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import statistics from './modules/statistics'
import playlists from './modules/playlists'
import tracks from './modules/tracks'

export default new Vuex.Store({
  modules: {
    statistics: statistics,
    playlists: playlists,
    tracks: tracks
  }
})
