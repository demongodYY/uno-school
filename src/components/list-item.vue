<template>
  <div class="container">
    <div class="left-icon">{{icon}}</div>
    <div class="right-text important" v-if="important === true">{{text}}</div>
    <div class="right-text important" v-else-if="link === true"><span>{{title}}</span> {{text}}</div>
    <div class="right-text" v-else>{{text}}</div>
  </div>
</template>

<script>
export default {
  name: 'listItem',
  props: {
    'icon': String,
    'text': String,
    'title': String,
    'link': {
      Type: Boolean,
      default: false
    },
    'important': {
      Type: Boolean,
      default: false}
  }
}
</script>

<style scoped>
  .container {
    display:flex;
  }
  .right-text {
    color: #606060;
    width: 90%;
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
    width:10%;
    padding-bottom: .7rem;
    padding-top: .7rem;
    height: 2rem;
  }
  .important span {
    color: #606060;
  }
</style>
