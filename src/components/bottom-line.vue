<template>
  <div class="wrapper">
    <span class="left"></span>
    <span class="right"></span>
  </div>
</template>

<script>
export default {
  name: 'bottom-line'
}
</script>

<style scoped>
  div.wrapper{
    margin-top: 2rem;
    display: flex;
  }
  span.left{
    width:80px;
    height:3px;
    background:rgba(215,25,32,1);
  }
  span.right {
    width:354px;
    height:1px;
    background:rgba(235,235,235,1);
  }
</style>
