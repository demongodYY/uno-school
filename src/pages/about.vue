<template>
  <div class="container">
    <div class="banner">
      <img src="../assets/about-1.jpg" alt="banner"/>
    </div>
    <div class="section">
      <h1 class="title" v-html="$t('pages.about.section1.title')"></h1>
      <paragraph  v-for="(item, index) in $t('pages.about.section1.paragraphs')" :key="index" :title="item.title" :texts="item.text"></paragraph>
    </div>
    <div class="banner">
      <img src="../assets/about-2.jpg" alt="banner2"/>
    </div>
    <div class="section">
      <h1 class="title">{{$t('pages.about.section2.title')}}</h1>
      <paragraph  v-for="(item, index) in $t('pages.about.section2.paragraphs')" :key="index" :title="item.title" :texts="item.text"></paragraph>
    </div>
    <div class="mission">
      <h1>{{$t('pages.about.mission.title')}}</h1>
      <p>{{$t('pages.about.mission.text')}}</p>
    </div>
    <div class="banner">
      <img src="../assets/about-3.jpg" alt="banner"/>
    </div>
  </div>
</template>

<script>
// import pageHeader from '../components/header'
import Paragraph from '@/components/paragraph'
export default {
  name: 'index',
  components: {
    'paragraph': Paragraph
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .section {
    padding: 0 7% 5vh 7%;
    text-align: left;
  }
  .mission {
    background: #0E0E0E;
    color: #999999;
    padding: 3vh 8%;
  }
  .mission h1 {
    color: #fff;
  }
</style>
