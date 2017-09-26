<template>
  <div class="container" v-if="playlist">
    <track-element :key="track.id" v-for="track in playlist.tracks.data" :track="track"></track-element>
  </div>
</template>

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

