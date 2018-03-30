<template>
  <div class="container">
    <div class="banner">
      <img src="../assets/join-1.jpg" alt="banner"/>
    </div>
    <div class="section">
      <h1 class="title">GET START</h1>
      <div class="block">
        <h3>How to Apply</h3>
        <list-item icon="1" text="Go to world.unomaha.edu/iluno" important=true></list-item>
        <list-item icon="2" text='Click on "How to Apply"'></list-item>
      </div>
      <div class="block">
      <h3>What to Send</h3>
        <list-item icon="1" text="Completed application and $45 application fee"></list-item>
        <list-item icon="2" text='Of cial copy of secondary school diploma'></list-item>
        <list-item icon="3" text='Proof of nancial support (see website for details)'></list-item>
      </div>
      <div class="block">
        <h3>Conditional Admission</h3>
        <list-item icon="1" text="If you lack English pro ciency, but are otherwise quali ed for undergraduate or graduate courses, let the admissions advisor know. You may apply for conditional admission at UNO."></list-item>
      </div>
    </div>
  </div>
</template>

<script>
// import pageHeader from '../components/header'
import listItem from '@/components/list-item'
export default {
  name: 'index',
  components: {
    'list-item': listItem
  },
  data () {
    return {
      backgroundImg: `url(${require('../assets/logo.png')})`
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .section {
    text-align: left;
    padding: 0 5% 3vh 5%;
  }
  .block {
    margin-bottom: 50px;
  }
</style>
