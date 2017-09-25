<template>
  <div class="container-fluid" id="app">
    <div class="row">
      <banner></banner>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss'
  import Banner from '@/components/Banner'

  export default {
    name: 'app',
    components: {
      Banner
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500');

  body {
    font-family: 'Montserrat', sans-serif !important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  #app {
    margin-bottom: 3em;
  }
</style>
