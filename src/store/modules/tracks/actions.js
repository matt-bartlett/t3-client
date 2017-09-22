import axios from 'axios'

export const getPlaylist = ({ commit }, id) => {
  commit('loader/setLoadingStatus', true, { root: true })
  return axios.get(`${process.env.API_URL}/playlists/${id}`)
    .then((response) => {
      commit('setPlaylist', response.data.data)
      commit('banner/setBannerWithPlaylistDetails', response.data.data, { root: true })
      commit('loader/setLoadingStatus', false, { root: true })
    })
}
