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
    /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    font-size: 18px;
    /* margin-top: 60px; */
    font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif;
  }
  p {
    line-height: 28px;
  }
  h2 {
    font-size: 1.5rem;
  }
  h1 {
    font-size: 1.9rem;
  }
  h1.title{
    margin-top: 60px;
    margin-bottom: 60px;
  }
  h1,h2 {
    color: #0E0E0E;
  }
  h3,h4 {
    color: #353535;
  }
  p {
    color: #606060;
  }
  .banner {
    width: 100%;
    height: 80vw;
  }
  .banner img {
    width: 100%;
    height: 100%;
  }
  a {
    text-decoration: none;
  }
</style>
