<template>
  <div class="container navbar text-center">
    <router-link class="anchor navbar-link" id="playlist-button" to="/">
      <span class="glyphicon glyphicon-list" aria-hidden="true"></span>&nbsp;Playlists
    </router-link>
    <router-link class="anchor navbar-link" id="search-button" to="/search">
      <span class="glyphicon glyphicon-search" aria-hidden="true"></span>&nbsp;Search
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'navbar'
  }
</script>
