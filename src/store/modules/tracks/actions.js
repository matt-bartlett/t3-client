import axios from 'axios'

export const getPlaylist = ({ commit }, id) => {
  return axios.get(`${process.env.API_URL}/playlists/${id}`)
    .then((response) => {
      commit('setPlaylist', response.data.data)
      commit('banner/setBannerWithPlaylistDetails', response.data.data, { root: true })
    })
}

export const searchForTracks = ({ commit }, searchTerm) => {
  return axios.get(`${process.env.API_URL}/search?q=${searchTerm}`)
    .then((response) => {
      commit('setTracks', response.data.data)
    })
}
