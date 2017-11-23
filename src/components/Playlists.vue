<template>
  <div class="container text-center" id="playlists">
    <playlist :key="playlist.id" v-for="playlist in playlists" :playlist="playlist"></playlist>
    <a class="anchor" v-if="page.hasMore()" @click.prevent="getMorePlaylists">Load more playlists</a>
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
        page: 'playlists/page',
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
