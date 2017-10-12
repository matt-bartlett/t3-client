<template>
  <div>
    <div class="spotify-track clearfix">
      <div class="spotify-track-thumbnail">
        <img :src="track.spotify_thumbnail_url">
      </div>
      <div class="spotify-track-information details pull-left">
        <h5 class="track-title">{{ track.title }}</h5>
        <p class="track-artist">{{ track.artist }} - <span>{{ track.album }}</span></p>
      </div>
      <div class="spotify-track-information pull-right">
        <p class="track-duration">{{ track.duration_formatted }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'track-element',
    props: ['track']
  }
</script>

<style>
  .spotify-track {
    padding: 5px 10px;
    border-bottom: 1px solid #f9f9f9;
    -webkit-transition: background-color 200ms ease-in-out;
    -moz-transition: background-color 200ms ease-in-out;
    -o-transition: background-color 200ms ease-in-out;
    transition: background-color 200ms ease-in-out;
  }
  .spotify-track:hover {
    background-color: #f8f8f8;
  }
  .spotify-track-thumbnail {
    float: left;
    padding-right: 15px;
  }
  .spotify-track-thumbnail > img {
    width: 50px;
  }
  .spotify-track-information > * {
    margin: 0;
  }
  .spotify-track-information .track-title {
    margin-top: 10px;
  }
  .spotify-track-information .track-duration {
    margin-top: 18px;
  }
  .spotify-track-information .track-artist,
  .spotify-track-information .track-duration {
    font-size: 12px;
    font-weight: 300;
  }
  @media screen and (max-width: 480px) {
    .spotify-track-information.details {
      width: 65%;
    }
  }
</style>
