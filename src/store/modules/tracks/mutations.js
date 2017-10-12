export const setPlaylist = (state, playlist) => {
  state.playlist = playlist
}

export const setTracks = (state, tracks) => {
  state.tracks = tracks
  state.hasUserSearched = true
}
