export const setPlaylists = (state, playlists) => {
  state.playlists = playlists
}

export const appendToPlaylists = (state, playlists) => {
  state.playlists.push(...playlists)
}

export const setPageData = (state, { current, max }) => {
  state.page.current = current
  state.page.max = max || state.page.max
}
