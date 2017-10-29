<template>
  <div>
    <div class="col-md-4 col-sm-12">
      <div class="spotify-playlist">
        <router-link :to="{ name: 'Tracks', params: {id : playlist.id }}">
          <div class="spotify-playlist-thumbnail">
            <img :src="playlist.playlist_thumbnail_url">
            <div class="spotify-playlist-thumbnail-overlay">
              <h3>{{ playlist.name }}</h3>
              <span>{{ playlist.owner_name }}</span>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'playlist',
    props: ['playlist']
  }
</script>

<style>
  .spotify-playlist {
    overflow: hidden;
    padding: 0px;
    margin-bottom: 30px;
    background-color: #eee;
    -webkit-box-shadow: 2px 2px 5px 0px rgba(217,217,217,1);
    -moz-box-shadow: 2px 2px 5px 0px rgba(217,217,217,1);
    box-shadow: 2px 2px 5px 0px rgba(217,217,217,1);
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
  }
  .spotify-playlist .spotify-playlist-thumbnail {
    position: relative;
  }
  .spotify-playlist .spotify-playlist-thumbnail > img {
    width: 100%;
  }
  .spotify-playlist-thumbnail-overlay {
    -webkit-transition: opacity 300ms ease-in;
    -moz-transition: opacity 300ms ease-in;
    -o-transition: opacity 300ms ease-in;
    transition: opacity 300ms ease-in;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
    -webkit-flex-direction: column;
    -webkit-align-items: center;
    -moz-align-items: center;
    -o-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    -moz-justify-content: center;
    -o-justify-content: center;
    background: rgba(0,0,0,0.75);
    position: absolute;
    height: 100%;
    width: 100%;
    opacity: 0;
    left: 0;
    top: 0;
  }
  .spotify-playlist-thumbnail-overlay h3 {
    text-align: center;
    color: #f9f9f9;
    font-size: 2rem;
    text-transform: uppercase;
  }
  .spotify-playlist-thumbnail-overlay span {
    text-align: center;
    color: #f9f9f9;
  }
  .spotify-playlist:hover .spotify-playlist-thumbnail-overlay {
    opacity: 1;
  }
</style>
