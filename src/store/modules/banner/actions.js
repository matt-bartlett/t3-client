export const setDefault = ({ commit }) => {
  commit('setBanner', { title: '#THROWTOGETHERTHURSDAYS' })
}

export const setPlaylist = ({ commit }, playlist) => {
  commit('setBanner', {
    title: playlist.name,
    duration: playlist.duration,
    tracks: playlist.tracks.data.length
  })
}
