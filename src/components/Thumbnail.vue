<template>
  <img :src="srcImage">
</template>

<script>
  export default {
    name: 'thumbnail',
    props: ['src'],
    data () {
      return {
        observer: null,
        intersected: null
      }
    },
    computed: {
      srcImage () {
        return this.intersected ? this.src : ''
      }
    },
    mounted () {
      this.observer = new IntersectionObserver(entries => {
        const image = entries[0]
        if (image.isIntersecting) {
          this.intersected = true
          this.observer.disconnect()
        }
      })

      this.observer.observe(this.$el)
    },
    destroyed () {
      this.observer.disconnect()
    }
  }
</script>
