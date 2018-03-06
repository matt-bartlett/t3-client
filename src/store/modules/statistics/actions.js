import axios from 'axios'

export const getStatistics = ({ commit }) => {
  commit('setLoading', true)
  return axios.get(`${process.env.API_URL}/stats`)
    .then((response) => {
      commit('setStatistics', response.data.data)
      commit('setLoading', false)
    })
    .catch((response) => {
      console.log(response)
      commit('setLoading', false)
    })
}
