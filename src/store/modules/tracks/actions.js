import axios from 'axios'
import router from '@/router'

export const getPlaylist = ({ commit }, id) => {
  return axios.get(`${process.env.API_URL}/playlists/${id}`)
    .then((response) => {
      commit('setPlaylist', response.data.data)
      commit('banner/setBannerTrack', response.data.data, { root: true })
    })
    .catch(() => {
      router.push('/')
    })
}

export const searchForTracks = ({ commit }, searchTerm) => {
  return axios.get(`${process.env.API_URL}/search?q=${searchTerm}`)
    .then((response) => {
      commit('setTracks', response.data.data)
      commit('setHasUserSearched', true)
    })
}

export const resetSearchedTracks = ({ commit }, searchTerm) => {
  commit('setTracks', [])
  commit('setHasUserSearched', false)
}

export const setBanner = ({ commit }) => {
  commit('banner/setDefaultBanner', null, { root: true })
}
