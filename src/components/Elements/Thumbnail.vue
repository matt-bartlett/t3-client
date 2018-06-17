<template>
  <img :src="srcImage">
</template>

<script>
  import ImagePlaceholder from '@/assets/images/placeholder.png'

  export default {
    name: 'thumbnail',
    props: ['src'],
    data () {
      return {
        observer: null,
        intersected: null,
        placeholder: ImagePlaceholder
      }
    },
    computed: {
      srcImage () {
        return this.intersected ? this.src : this.placeholder
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
