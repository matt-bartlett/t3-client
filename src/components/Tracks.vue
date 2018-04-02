<template>
  <div class="container-fluid" :class="{ 'is-playing' : isTrackPlaying }" v-if="playlist" id="tracks">
    <loader v-if="isLoading"></loader>
    <div v-if="!isLoading" class="row">
      <div class="col-xs-12 playlist-profile">
        <div class="row">
          <div class="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-12">
            <div class="playlist-profile-inner flex justify-content-space-between">
              <div class="playlist-thumbnail-container">
                <img class="image-max-width" :src="playlist.playlist_thumbnail_url">
              </div>
              <div class="playlist-details-container item-align-center">
                <h5 class="hidden-xs uppercase">Playlist</h5>
                <h1>{{ playlist.name }}</h1>
                <p>Created by <span>{{ playlist.owner_name }}</span></p>
                <div>
                  <p class="sub-details">
                    <span class="glyphicon glyphicon-time" aria-hidden="true"></span>
                    &nbsp;{{ playlist.duration }} Minutes
                  </p>
                  <p class="sub-details">
                    <span class="glyphicon glyphicon-music" aria-hidden="true"></span>
                    &nbsp;{{ playlist.tracks.data.length }} Tracks
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!isLoading" class="row">
      <div class="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-12">
        <track-element :key="track.id" v-for="track in playlist.tracks.data" :track="track"></track-element>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import TrackElement from './Track'
  import Loader from './Loader'

  export default {
    name: 'tracks',
    components: {
      TrackElement,
      Loader
    },
    computed: {
      ...mapGetters({
        isLoading: 'tracks/loading',
        playlist: 'tracks/playlist',
        isTrackPlaying: 'player/getPlaying'
      })
    },
    methods: {
      ...mapActions({
        getPlaylist: 'tracks/getPlaylist'
      })
    },
    created () {
      this.getPlaylist(this.$route.params.id)
    }
  }
</script>

