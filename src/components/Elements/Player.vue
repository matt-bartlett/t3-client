<template>
  <div id="player">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-12">
          <h5>{{ track.title }}</h5>
          <p>{{ track.artist }} - <span>{{ track.album }}</span></p>
          <audio v-if="track.spotify_preview_url" controls autoplay ref="player">
            <source type="audio/mp3" :src="track.spotify_preview_url">
              Your browser does not support the audio HTML element.
          </audio>
          <p class="unavailable" v-else>Track not available</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    props: [
      'track'
    ],
    watch: {
      track () {
        // Safari workaround for loading new tracks to the player
        setTimeout(() => {
          this.$refs.player.load()
        }, 100)
      }
    },
    methods: {
      ...mapActions({
        setPlaying: 'player/setPlaying'
      })
    },
    mounted () {
      this.$refs.player.addEventListener('ended', () => {
        this.setPlaying(null)
      })
    }
  }
</script>
