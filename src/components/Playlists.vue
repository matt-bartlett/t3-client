<template>
  <div>
    <banner :title="title"></banner>
    <div class="container text-center">
      <playlist :key="playlist.id" v-for="playlist in playlists" :playlist="playlist"></playlist>
      <a href="#" v-if="page.hasMore()" @click.prevent="getMorePlaylists">Load more playlists</a>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import Playlist from './Playlist'
  import Banner from './Banner'

  export default {
    name: 'playlists',
    data () {
      return {
        title: '#THROWTOGETHERTHURSDAYS'
      }
    },
    components: {
      Playlist,
      Banner
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
