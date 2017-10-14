export const setBanner = (state, { title, duration = null, tracks = null }) => {
  state.title = title
  state.duration = duration
  state.tracks = tracks
}
