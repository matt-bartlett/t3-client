import axios from 'axios'

export const getStatistics = ({ commit, state }) => {
  // Make API call if no stats currently exist, or if
  // an error occurred in a previous call
  if (Object.keys(state.statistics).length === 0 || state.error !== null) {
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
}
