<template>
  <div class="container">
    <h2>{{title}}</h2>
    <p v-for="(item, index) in texts" :key="index" >{{item}}</p>
    <bottom-line/>
  </div>
</template>

<script>
import BottomLine from '@/components/bottom-line'
export default {
  name: 'listItem',
  components: {
    'bottom-line': BottomLine
  },
  props: {
    'title': String,
    'texts': Array
  }
}
</script>

<style scoped>
  .container {
    margin-bottom: 60px;
  }
</style>
