import axios from 'axios'
import router from '@/router'

export const getPlaylist = ({ commit, dispatch }, id) => {
  return axios.get(`${process.env.API_URL}/playlists/${id}`)
    .then((response) => {
      commit('setPlaylist', response.data.data)
    })
    .catch(() => {
      router.push('/')
    })
}

export const search = ({ commit }, searchTerm) => {
  return axios.get(`${process.env.API_URL}/search?q=${searchTerm}`)
    .then((response) => {
      commit('setTracks', response.data.data)
      commit('setHasUserSearched', true)
    })
}

export const clear = ({ commit }) => {
  commit('setTracks', [])
  commit('setHasUserSearched', false)
}
