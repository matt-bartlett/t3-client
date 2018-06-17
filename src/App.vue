<template>
  <div class="container-fluid" :class="{ 'is-playing' : isTrackPlaying }" id="app">
    <div class="row">
      <header class="flex banner justify-content-center align-items-center">
        <h1 class="banner-title uppercase">#ThrowTogetherThursdays</h1>
      </header>
      <navbar></navbar>
      <router-view></router-view>
      <player v-if="isTrackPlaying" :class="{ 'is-playing' : isTrackPlaying }" :track="isTrackPlaying"></player>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss'
  import '@/assets/scss/app.scss'
  import Player from '@/components/Elements/Player'
  import Navbar from '@/components/Navbar'

  export default {
    name: 'app',
    components: {
      Navbar,
      Player
    },
    computed: {
      ...mapGetters({
        isTrackPlaying: 'player/getPlaying'
      })
    }
  }
</script>
