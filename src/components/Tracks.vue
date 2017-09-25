<template>
  <div class="container loading-height">
    <track-element :key="track.id" v-for="track in playlist.tracks.data" :track="track"></track-element>
  </div>
</template>

<style>
  .loading-height {
    min-height: 100px;
  }
</style>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import TrackElement from './Track'
  import Banner from './Banner'

  export default {
    name: 'tracks',
    components: {
      TrackElement,
      Banner
    },
    computed: {
      ...mapGetters({
        playlist: 'tracks/getPlaylist'
      })
    },
    methods: {
      ...mapActions({
        getPlaylist: 'tracks/getPlaylist'
      })
    },
    mounted () {
      this.getPlaylist(this.$route.params.id)
    }
  }
</script>

