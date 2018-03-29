<template>
  <div class="container">
    <div class="cards">
      <img :src="img" alt="card-banner"/>
      <div class="card-info">
        <p>{{text}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'listItem',
  props: {
    'text': String,
    'img': String
  }
}
</script>

<style scoped>
  .cards {
    padding-bottom: 7vh;
    width: 100%;
    background-color: #f2f2f2;
  }
  .cards img {
    width:100%;
    height: 70vw;
  }
  .card-info {
    width: 80%;
    margin: -8vh 5% 0 5%;
    background-color:#fff;
    position: relative;
    z-index: .7;
    padding: 1vh 5% 1vh 5%;
    font-size: 18px;
    line-height: 28px;
    box-shadow: 0px 5px 30px 0px rgba(14,14,14,0.15);
    text-align: left;
  }
</style>
