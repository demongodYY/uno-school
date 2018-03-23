<template>
  <div class="container">
    <h2>{{title}}</h2>
    <p v-for="(item, index) in texts" :key="index" >{{item}}</p>
  </div>
</template>

<script>
export default {
  name: 'listItem',
  props: {
    'title': String,
    'texts': Array
  }
}
</script>

<style scoped>
  .container {
    padding:0 3% 1.5rem 3%;
    margin-bottom: 2vh;
    margin-top: 3vh;
  }
</style>
