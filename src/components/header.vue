<template>
  <mt-header fixed class="header-container">
    <div slot="left">
      logo+title
    </div>
    <div slot="right">
      <mt-button size="normal" plain class="button-switch">中文</mt-button>
      <mt-button icon="more"></mt-button>
    </div>
  </mt-header>
</template>

<script>
import { Header, Button } from 'mint-ui'
export default {
  name: 'page-header',
  components: {
    'mt-header': Header,
    'mt-button': Button
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
  .header-container{
    background-color: #0e0e0e;
    height:10%;
  }
  .button-switch{
    padding: 0 1rem;
    border: 1px solid #ffffff;
  }
  .mint-button{
    margin: .5rem .5rem;
  }
</style>
