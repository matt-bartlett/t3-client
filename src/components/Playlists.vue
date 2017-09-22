<template>
  <div class="container text-center">
    <playlist :key="playlist.id" v-for="playlist in playlists" :playlist="playlist"></playlist>
    <a href="#" v-if="page.hasMore()" @click.prevent="getMorePlaylists">Load more playlists</a>
  </div>
</template>

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
