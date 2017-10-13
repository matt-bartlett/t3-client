export const setDefaultBanner = (state) => {
  state.title = '#THROWBACKTHURSDAYS'
  state.duration = null
  state.tracks = null
}

export const setBannerTrack = (state, playlist) => {
  state.title = playlist.name
  state.duration = playlist.duration
  state.tracks = playlist.tracks.data.length
}
