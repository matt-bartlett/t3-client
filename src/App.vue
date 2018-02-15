<template>
  <div class="container-fluid" id="app">
    <div class="row">
      <header class="flex banner justify-content-center align-items-center">
        <h1 class="banner-title uppercase">#ThrowTogetherThursdays</h1>
      </header>
      <navbar></navbar>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss'
  import '@/assets/scss/app.scss'
  import Navbar from '@/components/Navbar'

  export default {
    name: 'app',
    components: {
      Navbar
    }
  }
</script>
