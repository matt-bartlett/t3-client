<template>
  <div>
    <div class="spotify-track">
      <div class="spotify-track-thumbnail">
        <img :src="track.spotify_thumbnail_url">
      </div>
      <div class="spotify-track-information details">
        <h5 class="track-title">{{ track.title }}</h5>
        <p class="track-artist">{{ track.artist }} - <span>{{ track.album }}</span></p>
        <p class="track-duration visible-xs">{{ track.duration_formatted }}</p>
        <router-link class="track-belongs-to-playlist" v-if="track.playlist" :to="{ name: 'Tracks', params: {id : track.playlist.data.id }}">
          Appeared In <strong>{{ track.playlist.data.name }}</strong>
        </router-link>
      </div>
      <div class="spotify-track-information duration hidden-xs">
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
  .spotify-track a {
    color: inherit;
  }
  .spotify-track {
    -webkit-transition: background-color 200ms ease-in-out;
    -moz-transition: background-color 200ms ease-in-out;
    -o-transition: background-color 200ms ease-in-out;
    transition: background-color 200ms ease-in-out;
    border-bottom: 1px solid #f9f9f9;
    padding: 5px 10px;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: flex-start;
    -moz-align-items: flex-start;
    -o-align-items: flex-start;
    align-items: flex-start;
  }
  .spotify-track:hover {
    background-color: #f8f8f8;
  }
  .spotify-track-thumbnail {
    margin-right: 15px;
  }
  .spotify-track-thumbnail > img {
    width: 65px;
  }
  .spotify-track-information > * {
    margin: 0;
  }
  .spotify-track-information.duration {
    margin-left: auto;
  }
  .spotify-track-information .track-title {
    margin-top: 10px;
  }
  .spotify-track-information .track-duration {
    margin-top: 25px;
  }
  .spotify-track-information .track-artist,
  .spotify-track-information .track-duration,
  .spotify-track-information .track-belongs-to-playlist {
    font-size: 12px;
    font-weight: 300;
  }
  @media screen and (max-width: 768px) {
    .spotify-track-information .track-title,
    .spotify-track-information .track-duration {
      margin-top: 0;
    }
  }
</style>
