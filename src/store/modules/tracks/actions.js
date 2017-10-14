import axios from 'axios'
import router from '@/router'

export const getPlaylist = ({ commit }, id) => {
  return axios.get(`${process.env.API_URL}/playlists/${id}`)
    .then((response) => {
      let playlist = response.data.data
      commit('setPlaylist', playlist)
      commit('banner/setBanner', {
        title: playlist.name,
        duration: playlist.duration,
        tracks: playlist.tracks.data.length
      }, { root: true })
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
