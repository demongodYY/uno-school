<template>
  <page-header></page-header>
</template>

<script>
import pageHeader from '../components/header'
export default {
  name: 'index',
  components: {
    'page-header': pageHeader
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
