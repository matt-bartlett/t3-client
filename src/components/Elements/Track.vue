<template>
  <div>
    <div
      class="flex align-items-center spotify-track"
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
        <div v-if="track.playlists">
          <router-link
            :key="playlist.id"
            :to="{ name: 'Tracks', params: {id : playlist.id }}"
            class="track-belongs-to-playlist"
            v-for="playlist in track.playlists.data"
          ><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span>&nbsp;{{ playlist.name }}
          </router-link>
        </div>
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
