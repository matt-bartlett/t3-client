<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 col-md-offset-2 col-sm-12">
        <div class="form-group" id="searchbar">
          <input @keyup.enter="search(term)"
            placeholder="Search"
            v-model="term"
            class="form-control"
            type="text"
            name="track"
          >
          <button @click.prevent="search(term)" type="button" class="close">
            <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
          </button>
        </div>
        <loader v-if="isLoading"></loader>
        <div v-else-if="tracks.length > 0" id="search-results">
          <track-element v-for="track in tracks" :key="track.id" :track="track"></track-element>
        </div>
        <p v-else-if="!hasUserSearched" class="search-notice text-center">Search for an Artist, Album or Track.</p>
        <p v-else class="search-notice text-center">Whoops, no results found.</p>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import TrackElement from './Track'
  import Loader from './Loader'

  export default {
    name: 'search',
    data () {
      return {
        term: null
      }
    },
    components: {
      TrackElement,
      Loader
    },
    computed: {
      ...mapGetters({
        tracks: 'tracks/tracks',
        isLoading: 'tracks/loading',
        hasUserSearched: 'tracks/hasUserSearched'
      })
    },
    methods: {
      ...mapActions({
        search: 'tracks/search'
      })
    }
  }
</script>
