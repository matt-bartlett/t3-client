<template>
  <div class="container-fluid" id="app">
    <div class="row">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss'
  export default {
    name: 'app'
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500');

  body {
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  #app {
    margin-bottom: 3em;
  }
</style>
