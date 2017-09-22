import state from './state'
import * as getters from './getters'
import * as mutations from './mutations'

export default {
  namespaced: true,
  state: state,
  getters: getters,
  mutations: mutations
}
