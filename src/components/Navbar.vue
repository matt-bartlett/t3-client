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

<style>
  .navbar {
    margin-bottom: 35px;
  }
  .navbar-link {
    -webkit-transition: color, background 200ms ease-in-out;
    -moz-transition: color, background 200ms ease-in-out;
    -o-transition: color, background 200ms ease-in-out;
    transition: color, background 200ms ease-in-out;
    display: inline-block;
    padding: 10px 20px;
    min-width: 135px;
    background: #fff;
  }
  .navbar-link.router-link-exact-active {
    background: #000;
    color: #fff;
  }
</style>
