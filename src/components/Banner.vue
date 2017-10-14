<template>
  <div>
    <header class="banner">
      <div>
        <h1 class="banner-title">{{ data.title }}</h1>
        <div class="banner-details" v-if="data.duration && data.tracks">
          <h3 class="banner-span"><span class="glyphicon glyphicon-time" aria-hidden="true"></span>&nbsp;&nbsp;{{ data.duration }} Minutes</h3>
          <h3 class="banner-span"><span class="glyphicon glyphicon-music" aria-hidden="true"></span>&nbsp;&nbsp;{{ data.tracks }} Tracks</h3>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'banner',
    computed: {
      ...mapGetters({
        data: 'banner/banner'
      })
    }
  }
</script>

<style>
  .banner {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    -moz-align-items: center;
    -o-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    -moz-justify-content: center;
    -o-justify-content: center;
    justify-content: center;
    text-align: center;
    height: 450px;
    margin-bottom: 50px;
    background-size: cover;
    background: linear-gradient(rgba(0,0,0,0.75),rgba(0,0,0,0.45)), url(../assets/banner.jpg) no-repeat center;
  }
  .banner .banner-title {
    color: #f9f9f9;
    font-size: 3em;
    margin-bottom: 0;
    text-transform: uppercase;
  }
  .banner .banner-details {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .banner .banner-details .banner-span {
    font-weight: 300;
    color: #d4d4d4;
    font-size: 1em;
    margin: 22px 15px;
    text-transform: uppercase;
  }
  @media screen and (max-width: 767px) {
    .banner .banner-title {
      font-size: 2.5em;
    }
  }
  @media screen and (max-width: 480px) {
    .banner .banner-title {
      font-size: 1.8em;
    }
  }
</style>
