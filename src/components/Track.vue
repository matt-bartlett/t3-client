<template>
  <div>
    <div class="flex align-items-start spotify-track">
      <div class="spotify-track-thumbnail">
        <image-thumbnail :src="track.spotify_thumbnail_url"></image-thumbnail>
      </div>
      <div class="spotify-track-information details">
        <h5 class="track-title">{{ track.title }}</h5>
        <p class="track-artist">{{ track.artist }} - <span>{{ track.album }}</span></p>
        <p class="track-duration visible-xs">{{ track.duration_formatted }}</p>
        <router-link class="track-belongs-to-playlist" v-if="track.playlist" :to="{ name: 'Tracks', params: {id : track.playlist.data.id }}">
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
  import ImageThumbnail from './Thumbnail'

  export default {
    name: 'track-element',
    props: ['track'],
    components: {
      ImageThumbnail
    }
  }
</script>
