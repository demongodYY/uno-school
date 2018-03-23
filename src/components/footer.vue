<template>
  <div>
    <div class="footer-apply" :style="backStyle">
      <div class="inner">
        <h1>
          {{$t('footer.apply')}}
        </h1>
        <router-link to="apply">
           <mt-button plain size="large" class="apply-button"> {{$t('button.apply')}} </mt-button>
        </router-link>
      </div>
    </div>
    <div class="footer-wrapper">
      <div class="footer-contact">
        <h3>Contact ILUNO</h3>
        <p>6001 Dodge Street,<br/>Omaha, NE 68182-0082, USA</p>
        <div v-for="(value, key, index) in contacts" :key="index">
          {{key}}:
          <span v-if="key!=='E'&&key!=='W'">{{value}}</span>
          <span v-else class="important">{{value}}</span>
        </div>
      </div>
      <img src="@/assets/footer-logo.png" alt="footer-logo" class="footer-logo">
      <p class="note">The University of Nebraska does not discriminate based on race, color, ethnicity, national origin, sex, pregnancy, sexual orientation, gender identity, religion, disability, age, genetic information, veteran status, marital status, and/or political af liation in its programs, activities, or employment. 0584BROISP0316</p>
    </div>
  </div>
</template>

<script>
import { Button, Cell } from 'mint-ui'
import backImg from '../assets/test2.jpg'
export default {
  components: {
    'mt-button': Button,
    'mt-cell': Cell
  },
  data () {
    return {
      backStyle: {
        'background-image': `url(${backImg})`
      },
      contacts: {
        'W': ' world.unomaha.edu',
        'E': ' world@unomaha.edu',
        'T': ' 1.402.554.2293',
        'F': ' 1.402.554.2949'
      }
    }
  }
}
</script>

<style scoped>
  .footer-wrapper {
    background-color: #0e0e0e;
    padding: 2rem 5% .7rem 5%;
    text-align: left;
    color: #999999;
    width:90%
  }
  .footer-wrapper h3{
    color: #cccccc;
  }
  .footer-wrapper .footer-contact {
    margin-bottom: 5vh;
  }
  .important{
    color:#D71920;
  }
  .footer-apply {
    background-repeat :no-repeat;
    background-size: cover;
    color: #ffffff;
    text-align: center;
    /* height: 35vh; */
    width:100%;
  }
  .footer-apply .inner {
    background-color: rgba(215,25,32,.8);
    padding: 10% 7.5%;
    height: 80%;
    width: 85%;
  }
  .footer-apply h1 {
    margin-bottom: 8vh;
    color: #fff;
    margin-top: 0;
  }
  .apply-button {
    border: 1.2px solid #ffffff;
    padding: .1rem 0;
    height: 3.4rem;
    color: #ffffff;
    margin: 0 auto;
    width: 70%;
    border-radius: 0;
  }
  .mint-cell {
    background-color:inherit;
  }
  img.footer-logo {
    width: 43vw;
    height: auto;
  }
  .note {
    font-size: .7rem;
  }
</style>
