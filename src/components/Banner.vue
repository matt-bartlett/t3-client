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
