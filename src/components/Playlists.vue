<template>
  <div class="container loading-height">
    <playlist :key="playlist.id" v-for="playlist in playlists" :playlist="playlist"></playlist>
    <a href="#" v-if="page.hasMore()" @click.prevent="getMorePlaylists">Load more playlists</a>
  </div>
</template>

<style>
  .loading-height {
    min-height: 100px;
  }
</style>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import Playlist from './Playlist'

  export default {
    name: 'playlists',
    components: {
      Playlist
    },
    computed: {
      ...mapGetters({
        playlists: 'playlists/getPlaylists',
        page: 'playlists/getPage'
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
