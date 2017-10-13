<template>
  <div class="container">
    <div class="col-md-8 col-md-offset-2 col-sm-12">
      <div class="form-group" id="searchbar">
        <input @keyup.enter="searchForTracks(term)"
          placeholder="Search"
          v-model="term"
          class="form-control"
          type="text"
          name="track"
        >
        <button @click.prevent="searchForTracks(term)" type="button" class="close">
          <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
        </button>
      </div>
      <div v-if="tracks.length > 0">
        <track-element v-for="track in tracks" :key="track.id" :track="track"></track-element>
      </div>
      <p v-else-if="!hasUserSearched" class="search-notice text-center">Search for an Artist, Album or Track.</p>
      <p v-else class="search-notice text-center">Whoops, no results found.</p>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import TrackElement from './Track'

  export default {
    name: 'search',
    data () {
      return {
        term: null
      }
    },
    components: {
      TrackElement
    },
    computed: {
      ...mapGetters({
        tracks: 'tracks/getTracks',
        hasUserSearched: 'tracks/hasUserSearched'
      })
    },
    methods: {
      ...mapActions({
        searchForTracks: 'tracks/searchForTracks',
        setBanner: 'tracks/setBanner'
      })
    },
    mounted () {
      this.setBanner()
    }
  }
</script>

<style>
  #searchbar {
    position: relative;
    display: block;
  }
  #searchbar > .close {
    top: calc(50% - 11px);
    position: absolute;
    outline: none;
    right: 10px;
    z-index: 2;
  }
  #searchbar > .close > span {
    font-size: 16px;
  }
  .search-notice {
    margin-top: 20px;
  }
</style>

