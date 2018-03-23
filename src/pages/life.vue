<template>
  <div class="container">
    <div class="banner">
      <img src="../assets/test2.jpg" alt="banner"/>
    </div>
    <div class="section">
      <h1>{{$t('pages.life.section1.title')}}</h1>
      <paragraph  v-for="(item, index) in $t('pages.life.section1.paragraphs')" :key="index" :title="item.title" :texts="item.text"></paragraph>
    </div>
    <div class="banner">
      <img src="../assets/test.jpg" alt="banner2"/>
    </div>
    <div class="section">
      <h1>{{$t('pages.life.section2.title')}}</h1>
      <paragraph  v-for="(item, index) in $t('pages.life.section2.paragraphs')" :key="index" :title="item.title" :texts="item.text"></paragraph>
    </div>
    <div class="banner">
      <img src="../assets/test2.jpg" class="half-img" alt="banner"/>
      <img src="../assets/test3.jpg" class="half-img" alt="banner"/>
    </div>
    <div class="mission">
      <p>{{$t('pages.life.mission.text')}}</p>
    </div>
    <div class="banner">
      <img src="../assets/test.jpg" alt="banner"/>
    </div>
  </div>
</template>

<script>
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
    padding: 3vh 5% 5vh 5%;
    text-align: left;
  }
  .banner .half-img {
    float: left;
    width: 50%;
    display: inline-block;
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
