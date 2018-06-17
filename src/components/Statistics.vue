<template>
  <div class="container text-center">
    <div class="row" v-if="!isLoading">
      <div class="statistics">
        <div class="col-xs-12 col-sm-4">
          <h3 class="uppercase">Playlists</h3>
          <h1>{{ statistics.PlaylistCount }}</h1>
        </div>
        <div class="col-xs-12 col-sm-4">
          <h3 class="uppercase">Tracks</h3>
          <h1>{{ statistics.TrackCount }}</h1>
        </div>
        <div class="col-xs-12 col-sm-4">
          <h3 class="uppercase">Minutes</h3>
          <h1>{{ statistics.AllTrackDuration }}</h1>
        </div>
      </div>
    </div>
    <loader v-else-if="isLoading"></loader>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import Loader from './Elements/Loader'

  export default {
    name: 'statistics',
    components: {
      Loader
    },
    computed: {
      ...mapGetters({
        isLoading: 'statistics/loading',
        statistics: 'statistics/statistics'
      })
    },
    methods: {
      ...mapActions({
        getStatistics: 'statistics/getStatistics'
      })
    },
    created () {
      this.getStatistics()
    }
  }
</script>