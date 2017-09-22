export const setBannerWithTitle = (state) => {
  state.title = '#THROWBACKTHURSDAYS'
  state.duration = null
  state.tracks = null
  state.playlistUrl = null
  state.profileUrl = null
}

export const setBannerWithPlaylistDetails = (state, playlist) => {
  state.title = playlist.name
  state.duration = playlist.duration
  state.tracks = 12
  state.playlistUrl = null
  state.profileUrl = null
}
