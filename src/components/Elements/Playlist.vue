<template>
  <div>
    <div class="col-lg-3 col-md-4 col-sm-12">
      <div class="playlist">
        <router-link :to="{ name: 'Tracks', params: {id : playlist.id }}">
          <div class="playlist-container">
            <image-thumbnail class="image-max-width" :src="playlist.playlist_thumbnail_url"></image-thumbnail>
            <div class="flex align-items-center justify-content-center playlist-overlay">
              <h1 class="uppercase text-center">{{ playlist.name }}</h1>
              <span>{{ playlist.owner_name }}</span>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import ImageThumbnail from './Thumbnail'

  export default {
    name: 'playlist',
    props: ['playlist'],
    components: {
      ImageThumbnail
    }
  }
</script>
