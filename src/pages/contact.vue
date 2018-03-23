<template>
  <div class="container">
    <div class="banner">
      <img src="../assets/test2.jpg" alt="banner"/>
    </div>
    <div class="section">
      <h1>CONTACT ILUNO</h1>
      <p>International Admissions</p>
      <list-item icon="A" text="6001 Dodge Street, Omaha, NE 68182-0082, USA"></list-item>
      <list-item icon="W" text="world.unomaha.edu" important=true></list-item>
      <list-item icon="E" text="world@unomaha.edu" important=true></list-item>
      <list-item icon="T" text="1.402.554.2293"></list-item>
      <list-item icon="F" text="1.402.554.2949"></list-item>
      <p>For whom in China wants to know more, please contact:</p>
      <h1>Mike Oven</h1>
      <list-item icon="E" text="mikeemail123@mike.com" important=true></list-item>
      <div class="qr-code">
        <img src="@/assets/qr.png" alt="qr code"/>
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
    padding: 2vh 5% 5vh 5%;
  }
  .qr-code {
    text-align: center;
    margin: 5vh auto;
  }
  .qr-code img{
    height: 25vh;
    width: 25vh;
  }
</style>
