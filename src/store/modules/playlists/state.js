export default {
  page: {
    max: null,
    current: 1,
    hasMore () {
      return this.current < this.max
    }
  },
  loading: false,
  playlists: []
}
