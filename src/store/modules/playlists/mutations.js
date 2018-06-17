export const setPlaylists = (state, playlists) => {
  state.playlists = playlists
}

export const appendPlaylists = (state, playlists) => {
  state.playlists.push(...playlists)
}

export const setPageData = (state, { current, max }) => {
  state.page.current = current
  state.page.max = max || state.page.max
}

export const setLoading = (state, loading) => {
  state.loading = loading
}

export const setError = (state, error) => {
  state.error = error
}
