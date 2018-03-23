<template>
  <div class="container">
    <div class="banner">
      <img src="../assets/test2.jpg" alt="banner"/>
    </div>
    <div class="introduce">
      <h1>{{$t('pages.index.introduce.title')}}</h1>
      <p>{{$t('pages.index.introduce.text')}}</p>
      <router-link to="/">
        <mt-button class="apply-button"> {{$t('button.apply')}}</mt-button>
      </router-link>
    </div>
    <div class="cards" v-for="(cardItem, index) in $t('pages.index.cards')" :key="index">
      <img :src="cardItem.img" alt="card-banner"/>
      <div class="card-info">
        <h2>{{cardItem.title}}</h2>
        <p>{{cardItem.text}}</p>
        <div class="left-link">
          <router-link to="/">{{$t('button.more')}}</router-link>
        </div>
      </div>
    </div>
    <div class="comments">
      <div class="comments-banner">
        <h2> {{$t('pages.index.comments.title')}} </h2>
        <h5> {{$t('pages.index.comments.location')}} </h5>
        <p> {{$t('pages.index.comments.desc')}} </p>
      </div>
      <div class="comments-info">
        <mt-swipe class="swipe-wrapper" :auto="0">
          <mt-swipeitem v-for="(item, index) in $t('pages.index.comments.cards')" :key="index" class="swipe-item" >
            <div class="comment-card">
              <img :src="item.avatar" alt="avatar"/>
              <h3> {{item.name}} </h3>
              <p> {{item.text}} </p>
            </div>
          </mt-swipeitem>
        </mt-swipe>
      </div>
    </div>
  </div>
</template>

<script>
// import pageHeader from '../components/header'
import { Swipe, SwipeItem, Button } from 'mint-ui'
import '../assets/css/indexPage.css'
export default {
  name: 'index',
  components: {
    'mt-button': Button,
    'mt-swipe': Swipe,
    'mt-swipeitem': SwipeItem
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
  .banner {
    width: 100%;
    height: 35vh;
  }
  .banner img {
    width: 100%;
    height: 100%;
  }
  .introduce{
    padding: 5vh 5% 10vh 5%;
  }
  .apply-button{
    margin-top: 5vh;
    border-radius: 0;
    background:rgba(14,14,14,1);
    width: 56%;
    height: 10vh;
    color:#fff;
  }
  .cards {
    width: 100%;
    height: 60vh;
    background-color: #f2f2f2;
  }
  .cards img {
    width:100%;
    height: 55%;
  }
  .card-info {
    width: 80%;
    height: 45%;
    margin: -8vh 5% 0 5%;
    background-color:#fff;
    position: relative;
    z-index: 99;
    padding: 2vh 5% 0 5%;
    font-size: 2.05vh;
    box-shadow: 0px 5px 30px 0px rgba(14,14,14,0.15);
  }
  .left-link{
    text-align: left;
    margin-top: 3.5vh;

  }
  .left-link a {
    color: #D71920;
    font-weight: Bold;
  }
  .comments {
    width: 100%;
    height: 150vh;
    background-color: #f2f2f2;
  }
  .comments-banner h2 {
    color: #fff;
  }
  .comments-banner {
    color: #fff;
    height: 20%;
    padding-top: 10%;
    background-image: url('../assets/test.jpg');
    background-repeat :no-repeat;
    background-size: cover;
  }
  .comments-info {
    height: 70%;
    width:100%;
  }
  .swipe-wrapper {
    margin: 15% 5% 5% 5%;
    height: 80%;
    width: 90%;
    background-color: #fff;
    overflow: visible;
    box-shadow: 0px 5px 30px 0px rgba(14,14,14,0.15);
  }
  .comment-card {
    margin-top: -10vh;
    padding: 5vh 10% 5vh 10%;
  }
  .comment-card img {
    border-radius: 50%;
    width: 85px;
    height: 85px;
  }
  .comment-card p{
    line-height: 3.5vh;
    font-size: 2.5vh;
    color: #606060;
  }
  .comment-card h3 {
    color: #D71920
  }
</style>
