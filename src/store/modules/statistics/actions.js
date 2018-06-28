import axios from 'axios'

export const getStatistics = ({ commit }) => {
  commit('setError', null)
  commit('setLoading', true)
  return axios.get(`${process.env.API_URL}/stats`)
    .then((response) => {
      commit('setStatistics', response.data.data)
      commit('setLoading', false)
    })
    .catch((error) => {
      commit('setError', error.response.data.message)
      commit('setLoading', false)
    })
}
