<template>
  <div class="container navbar text-center">
    <router-link class="anchor navbar-link" to="/">Playlists<span class="navbar-link-border"></span>
    </router-link>
    <router-link class="anchor navbar-link" to="/search">Search
      <span class="navbar-link-border"></span>
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
