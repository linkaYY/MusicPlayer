<template>
  <div id="app">
    <div class="navbar"></div>
    <router-view/>
  </div>
</template>
<script>
export default {
  data () {
    return {
      test: 'hahah'
    }
  },
  created () {
    // this.$axios.get('/api/search?keywords=海阔天空')
    //   .then(res => {
    //     console.log(res)
    //   }).catch(err => {
    //     throw new Error(err) })
  },
  methods: {
    clickOne () {
      this.test = 'wwww'
    }
  }
}
</script>
<style lang="scss">
.navbar {
}
</style>
