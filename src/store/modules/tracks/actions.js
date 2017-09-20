import axios from 'axios'

export const getPlaylist = ({ commit }, id) => {
  return axios.get(`${process.env.API_URL}/playlists/${id}`)
    .then((response) => {
      commit('setPlaylist', response.data.data)
    })
}
