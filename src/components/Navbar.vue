<template>
  <div class="container navbar text-center">
    <router-link class="anchor navbar-link" id="playlist-button" to="/">
      <span class="glyphicon glyphicon-th" aria-hidden="true"></span>&nbsp;Playlists
    </router-link>
    <router-link class="anchor navbar-link" id="search-button" to="/search">
      <span class="glyphicon glyphicon-search" aria-hidden="true"></span>&nbsp;Search
    </router-link>
    <router-link class="anchor navbar-link" id="stats-button" to="/statistics">
      <span class="glyphicon glyphicon-signal" aria-hidden="true"></span>&nbsp;Statistics
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'navbar'
  }
</script>
