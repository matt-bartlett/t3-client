<template>
  <div>
    <div class="col-md-4 col-sm-12">
      <div class="spotify-playlist">
        <router-link :to="{ name: 'Tracks', params: {id : playlist.id }}">
          <div class="spotify-playlist-thumbnail">
            <img :src="playlist.playlist_thumbnail_url">
            <div class="spotify-playlist-thumbnail-overlay">
              <h3>{{ playlist.name }}</h3>
              <span>{{ playlist.owner_name }}</span>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'playlist',
    props: ['playlist']
  }
</script>
