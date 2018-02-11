<template>
  <div class="container" v-if="playlist" id="tracks">
    <div class="row">
      <div class="col-md-8 col-md-offset-2 col-sm-12">
        <track-element :key="track.id" v-for="track in playlist.tracks.data" :track="track"></track-element>
      </div>
    </div>
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
        playlist: 'tracks/playlist'
      })
    },
    methods: {
      ...mapActions({
        getPlaylist: 'tracks/getPlaylist'
      })
    },
    created () {
      this.getPlaylist(this.$route.params.id)
    }
  }
</script>

