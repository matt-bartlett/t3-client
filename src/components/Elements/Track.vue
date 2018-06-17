<template>
  <div>
    <div
      class="flex align-items-start spotify-track"
      :class="{ 'is-playing' : isTrackPlaying && isTrackPlaying.title === track.title }"
    >
      <div class="spotify-track-thumbnail" @click.prevent="setPlaying(track)">
        <img src="../../assets/images/play.svg" class="spotify-track-play" alt="Play">
        <image-thumbnail :src="track.spotify_thumbnail_url"></image-thumbnail>
      </div>
      <div class="spotify-track-information">
        <h5 class="track-title">{{ track.title }}</h5>
        <p class="track-artist">{{ track.artist }} - <span>{{ track.album }}</span></p>
        <p class="track-duration visible-xs">{{ track.duration_formatted }}</p>
        <router-link
          v-if="track.playlist"
          class="track-belongs-to-playlist"
          :to="{ name: 'Tracks', params: {id : track.playlist.data.id }}"
        >
          Appeared In <strong>{{ track.playlist.data.name }}</strong>
        </router-link>
      </div>
      <div class="spotify-track-information duration hidden-xs">
        <p class="track-duration">{{ track.duration_formatted }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import ImageThumbnail from './Thumbnail'

  export default {
    name: 'track-element',
    props: ['track'],
    components: {
      ImageThumbnail
    },
    computed: {
      ...mapGetters({
        isTrackPlaying: 'player/getPlaying'
      })
    },
    methods: {
      ...mapActions({
        setPlaying: 'player/setPlaying'
      })
    }
  }
</script>
