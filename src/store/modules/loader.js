export default {
  namespaced: true,
  state: {
    loading: true
  },
  getters: {
    getLoadingState: (state) => {
      return state.loading
    }
  },
  mutations: {
    setLoadingStatus: (state, status) => {
      state.loading = status
    }
  }
}
