<template>
  <div class="container text-center">
    <div class="row">
      <div v-if="error">
        <p class="text-center">{{ error }}</p>
      </div>
      <div class="statistics" v-if="!isLoading && !error">
        <div class="col-xs-12 col-sm-4">
          <h3 class="uppercase">Playlists</h3>
          <Counter :max="statistics.total_playlist_count"></Counter>
        </div>
        <div class="col-xs-12 col-sm-4">
          <h3 class="uppercase">Tracks</h3>
          <Counter :max="statistics.total_track_count"></Counter>
        </div>
        <div class="col-xs-12 col-sm-4">
          <h3 class="uppercase">Minutes</h3>
          <Counter :max="statistics.total_track_duration"></Counter>
        </div>
      </div>
    </div>
    <loader v-if="isLoading"></loader>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import Counter from './Elements/Counter'
  import Loader from './Elements/Loader'

  export default {
    name: 'statistics',
    components: {
      Counter,
      Loader
    },
    computed: {
      ...mapGetters({
        error: 'statistics/error',
        isLoading: 'statistics/loading',
        statistics: 'statistics/statistics'
      })
    },
    methods: {
      ...mapActions({
        getStatistics: 'statistics/getStatistics'
      })
    },
    mounted () {
      this.getStatistics()
    }
  }
</script>