<template>
  <div>
    <header class="banner">
      <div>
        <h1 class="banner-title">{{ title }}</h1>
        <div class="banner-details" v-if="duration && tracks">
          <h3 class="banner-span"><span class="glyphicon glyphicon-time" aria-hidden="true"></span>&nbsp;&nbsp;{{ duration }} Minutes</h3>
          <h3 class="banner-span"><span class="glyphicon glyphicon-music" aria-hidden="true"></span>&nbsp;&nbsp;{{ tracks }} Tracks</h3>
        </div>
        <router-link v-if="duration && tracks" class="btn btn-default" to="/">Go back</router-link>
        <a v-if="duration && tracks" class="btn btn-danger" :href="playlistUrl" target="_blank">Go To Playlist</a>
        <a v-if="duration && tracks" class="btn btn-danger" :href="profileUrl" target="_blank">Go To Creator</a>
      </div>
    </header>
  </div>
</template>

<script>
  export default {
    props: [
      'title',
      'duration',
      'tracks',
      'playlistUrl',
      'profileUrl'
    ]
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
  .banner .btn {
    -webkit-transition: all 200ms ease-out;
    -moz-transition: all 200ms ease-out;
    -o-transition: all 200ms ease-out;
    transition: all 200ms ease-out;
    text-transform: uppercase;
  }
  .banner .btn-default {
    color: #d4d4d4;
    border-color: #d4d4d4;
    background-color: transparent;
  }
  .banner .btn-default:hover {
    color: #fff;
    border-color: #fff;
    background-color: transparent;
  }
</style>
