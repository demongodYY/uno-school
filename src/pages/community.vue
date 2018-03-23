<template>
  <div class="container">
    <div class="banner">
      <img src="../assets/test2.jpg" alt="banner"/>
    </div>
    <div class="section">
      <h1>{{$t('pages.community.section.title')}}</h1>
      <p>{{$t('pages.community.section.intro')}}</p>
      <paragraph  v-for="(item, index) in $t('pages.community.section.paragraphs')" :key="index" :title="item.title" :texts="item.text"></paragraph>
    </div>
    <card v-for="(item, index) in $t('pages.community.section.cards')" :key="index" :text="item.text" :img="item.img"></card>
  </div>
</template>

<script>
// import pageHeader from '../components/header'
import Paragraph from '@/components/paragraph'
import Card from '@/components/card'
export default {
  name: 'index',
  components: {
    'card': Card,
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
</style>
