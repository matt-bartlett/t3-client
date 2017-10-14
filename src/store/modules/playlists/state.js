export default {
  playlists: [],
  page: {
    max: null,
    current: 1,
    hasMore () {
      return this.current < this.max
    }
  }
}
