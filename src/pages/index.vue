<template>
  <div class="container">
    <div class="banner">
      <img src="../assets/home-1.jpg" alt="banner"/>
    </div>
    <div class="introduce">
      <h1 v-html="$t('pages.index.introduce.title')"></h1>
      <p>{{$t('pages.index.introduce.text')}}</p>
      <router-link to="/apply">
        <mt-button class="apply-button"> {{$t('button.apply')}}</mt-button>
      </router-link>
    </div>
    <div class="cards" v-for="(cardItem, index) in $t('pages.index.cards')" :key="index">
      <img :src="cardItem.img" alt="card-banner"/>
      <div class="card-info">
        <h2>{{cardItem.title}}</h2>
        <p>{{cardItem.text}}</p>
        <div class="left-link">
          <router-link :to="cardItem.link">{{$t('button.more')}}</router-link>
        </div>
      </div>
    </div>
    <div class="comments">
      <div class="comments-banner" :style="backStyle">
        <div class=banner-contents>
          <h2> {{$t('pages.index.comments.title')}} </h2>
          <h5> {{$t('pages.index.comments.location')}} </h5>
          <p> {{$t('pages.index.comments.desc')}} </p>
        </div>
      </div>
      <div class="comments-info" v-bind:class="{zh: this.$i18n.locale === 'zh'}">
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
import backImg from '../assets/home-map.jpg'
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
      backStyle: {
        'background-image': `url(${backImg})`
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
    padding-bottom: 7vh;
    background-color: #f2f2f2;
  }
  .cards img {
    width:100%;
    height: 70vw;
  }
  .card-info {
    text-align: left;
    width: 80%;
    margin: -8vh 5% 0 5%;
    padding: 1vh 5% 1vh 5%;
    background-color:#fff;
    position: relative;
    z-index: .7;
    font-size: 18px;
    line-height: 28px;
    box-shadow: 0px 5px 30px 0px rgba(14,14,14,0.15);
  }
  .left-link{
    text-align: left;
    margin-top: 3.5vh;
    margin-bottom: 0.83em;
  }
  .left-link a {
    color: #D71920;
    font-weight: Bold;
    border-bottom: 2px solid #D71920;
  }
  .comments {
    width: 100%;
    background-color: #f2f2f2;
  }
  .comments-banner .banner-contents {
    display: flex;
    color: #fff;
    align-items: center;
    flex-wrap:wrap;
    flex-direction: column;
    justify-content: center;
    height:90%;
  }
  .banner-contents h2 {
    color: #fff;
    margin-top: 0;
  }
  .banner-contents h5{
    margin: .8rem 0;
  }
  .comments-banner {
    color: #fff;
    height: 80vw;
    padding-top: 10%;
    background-repeat :no-repeat;
    background-size: cover;
  }
  .comments-info {
    height: 50rem;
    width:100%;
  }
   .comments-info.zh{
     height: 40rem;
   }
  .swipe-wrapper {
    margin: 15% 5% 5% 5%;
    height: 90%;
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
    color: #606060;
  }
  .comment-card h3 {
    color: #D71920
  }
</style>
