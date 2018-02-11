<template>
  <div class="container-fluid" id="app">
    <div class="row">
      <banner></banner>
      <navbar></navbar>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss'
  import '@/assets/scss/app.scss'
  import Banner from '@/components/Banner'
  import Navbar from '@/components/Navbar'

  export default {
    name: 'app',
    components: {
      Banner,
      Navbar
    }
  }
</script>
