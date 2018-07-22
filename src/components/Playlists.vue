<template>
  <div class="container-fluid" id="playlists">
    <div class="row">
      <playlist v-if="playlists.length > 0" :key="playlist.id" v-for="playlist in playlists" :playlist="playlist"></playlist>
      <p v-if="playlists.length === 0 && !isLoading" class="text-center uppercase">No Playlists found</p>
    </div>
    <div v-if="error" class="row">
      <p class="text-center">{{ error }}</p>
    </div>
    <div v-if="!isLoading && !error" class="row text-center">
      <a class="anchor" v-if="page.hasMore()" @click.prevent="getMorePlaylists">Load more playlists</a>
    </div>
    <loader v-if="isLoading"></loader>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import Playlist from './Elements/Playlist'
  import Loader from './Elements/Loader'

  export default {
    name: 'playlists',
    components: {
      Playlist,
      Loader
    },
    computed: {
      ...mapGetters({
        page: 'playlists/page',
        error: 'playlists/error',
        isLoading: 'playlists/loading',
        playlists: 'playlists/playlists'
      })
    },
    methods: {
      ...mapActions({
        getPlaylists: 'playlists/getPlaylists',
        getMorePlaylists: 'playlists/getMorePlaylists'
      })
    },
    mounted () {
      this.getPlaylists()
    }
  }
</script>

<style>
  .anchor {
    padding: 10px 20px;
  }
</style>
