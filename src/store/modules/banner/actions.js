export const setBanner = ({ commit }, { title, duration, tracks }) => {
  commit('setBanner', { title, duration, tracks })
}
