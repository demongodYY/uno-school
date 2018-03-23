<template>
  <div class="container">
    <div class="left-icon">{{icon}}</div>
    <div class="right-text" v-if="important === false">{{text}}</div>
    <div class="right-text important" v-else>{{text}}</div>
  </div>
</template>

<script>
export default {
  name: 'listItem',
  props: {
    'icon': String,
    'text': String,
    'important': {
      Type: Boolean,
      default: false}
  }
}
</script>

<style scoped>
  .container {
    padding:0 3%;

  }
  .right-text {
    color: #606060;
    width: 80%;
    display: inline-block;
    vertical-align: top;
    padding-bottom: .7rem;
    padding-top: .7rem;
    border-bottom: rgba(153,153,153,0.4) solid 1px;
  }
  .right-text.important {
    color: #D71920;
  }
  .left-icon {
    font-size: 1.2rem;
    color:#dadadb;
    width:15%;
    padding-bottom: .7rem;
    padding-top: .7rem;
    display: inline-block;
    vertical-align: top;
    height: 2rem;
  }
</style>
