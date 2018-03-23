<template>
  <div id="app">
    <page-header></page-header>
    <router-view/>
    <page-footer></page-footer>
  </div>
</template>

<script>
import pageHeader from './components/header'
import pageFooter from './components/footer'
export default {
  components: {
    'page-header': pageHeader,
    'page-footer': pageFooter
  },
  name: 'App'
}
</script>

<style>
  body {
    margin: 0;
    padding: 0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif;
  }
  h1,h2,h3,h4 {
    color: #0E0E0E;
  }
  p {
    color: #606060;
  }
  .banner {
    width: 100%;
    height: 35vh;
  }
  .banner img {
    width: 100%;
    height: 100%;
  }
</style>
