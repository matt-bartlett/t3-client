import axios from 'axios'
import router from '@/router'

export const getPlaylist = ({ commit, dispatch, state }, id) => {
  commit('setLoading', true)
  return axios.get(`${process.env.API_URL}/playlists/${id}`)
    .then((response) => {
      commit('setPlaylist', response.data.data)
    })
    .catch(() => {
      router.push('/')
    })
    .finally(() => {
      commit('setLoading', false)
    })
}

export const search = ({ commit, dispatch }, searchTerm) => {
  dispatch('clear').then(() => {
    commit('setLoading', true)
  })
  return axios.get(`${process.env.API_URL}/search?q=${searchTerm}`)
    .then((response) => {
      commit('setTracks', response.data.data)
      commit('setHasUserSearched', true)
    })
    .catch((response) => {
      console.log(response)
    })
    .finally(() => {
      commit('setLoading', false)
    })
}

export const clear = ({ commit }) => {
  return new Promise((resolve, reject) => {
    commit('setTracks', [])
    commit('setHasUserSearched', false)
    resolve()
  })
}
