<template>
  <div class="container-fluid" id="search">
    <div class="row">
      <div class="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-12">
        <div class="form-group" id="searchbar">
          <label class="control-label placeholder" :class="{ 'active' : this.active }">Search</label>
          <input
            @keyup.enter="triggerSearch(term)"
            @focus="active = true"
            @blur="canBlur()"
            v-model="term"
            class="form-control"
            type="text"
            name="track"
            ref="search"
            autocomplete="off"
          >
          <button @click.prevent="triggerSearch()" type="button" class="close">
            <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
          </button>
        </div>
      </div>
      <div class="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-12">
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
  import TrackElement from './Elements/Track'
  import Loader from './Elements/Loader'

  export default {
    name: 'search',
    data () {
      return {
        term: null,
        active: false
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
      }),
      triggerSearch () {
        if (this.term) {
          this.search(this.term)
        }
      },
      canBlur () {
        this.active = this.term !== null && this.term !== ''
      }
    },
    mounted () {
      this.$refs.search.focus()
    }
  }
</script>
