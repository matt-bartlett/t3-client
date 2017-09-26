import axios from 'axios'

export const getPlaylists = ({ commit }, page = 1) => {
  return axios.get(`${process.env.API_URL}/playlists?page=${page}`)
    .then((response) => {
      commit('setPlaylists', response.data.data)
      commit('setPageData', {
        current: page,
        max: response.data.meta.pagination.total_pages
      })
      commit('banner/setBannerWithTitle', null, { root: true })
    })
    .catch((response) => {
      console.log(response)
    })
}

export const getMorePlaylists = ({ commit, state }, page = 1) => {
  return axios.get(`${process.env.API_URL}/playlists?page=${state.page.current + 1}`)
    .then((response) => {
      commit('appendToPlaylists', response.data.data)
      commit('setPageData', {
        current: state.page.current + 1,
        max: response.data.meta.pagination.total_pages
      })
    })
}
