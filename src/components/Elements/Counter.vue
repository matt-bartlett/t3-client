<template>
  <div>
    <h1>{{ incrementedValue }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'counter',
    props: {
      max: {
        default: 0,
        type: Number
      }
    },
    data () {
      return {
        value: 0
      }
    },
    computed: {
      incrementedValue () {
        return this.value
      }
    },
    methods: {
      increment () {
        const interval = 25
        const range = Math.floor(this.max - this.value)
        const increment = Math.floor(range / interval)

        var timer = setInterval(() => {
          this.value += increment
          if (this.value > this.max) {
            this.value = this.max
            clearInterval(timer)
          }
        }, interval)
      }
    },
    mounted () {
      this.increment()
    }
  }
</script>