<template>
  <div class="container">
    <div class="banner">
      <img src="../assets/test2.jpg" alt="banner"/>
    </div>
    <div class="section">
      <h1 class="title">CONTACT <span style="color:#D71920">ILUNO</span><br/><span class="subtitle">International Admissions</span></h1>
      <list-item icon="A" text="6001 Dodge Street, Omaha, NE 68182-0082, USA"></list-item>
      <list-item icon="W" text="world.unomaha.edu" important=true></list-item>
      <list-item icon="E" text="world@unomaha.edu" important=true></list-item>
      <list-item icon="T" text="1.402.554.2293"></list-item>
      <list-item icon="F" text="1.402.554.2949"></list-item>
      <p class="commet">For whom in China wants to know more, please contact:</p>
      <h3>Mike Oven</h3>
      <list-item icon="E" text="mdowen@unomaha.edu" important=true></list-item>
      <div class="qr-code">
        <img src="@/assets/qr.jpg" alt="qr code"/>
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
    padding: 0 5% 5vh 5%;
  }
  .subtitle {
    font-size: 1rem;
    line-height: 1rem;
    font-weight: normal;
    color: #606060;
  }
  .commet {
    margin: 30px 0;
  }
  .qr-code {
    text-align: center;
    margin: 5vh auto;
  }
  .qr-code img{
    height: 56vw;
    width: 56vw;
  }
</style>
