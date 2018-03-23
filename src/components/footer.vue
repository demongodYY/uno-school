<template>
  <div>
    <div class="footer-apply">
      <div class="inner">
        <h1>
          {{$t('footer.apply')}}
        </h1>
        <mt-button plain size="large" class="apply-button"> {{$t('button.apply')}} </mt-button>
      </div>
    </div>
    <div class="footer-wrapper">
      <h2>Contact ILUNO</h2>
      <p>6001 Dodge Street, Omaha, NE 68182-0082, USA W: </p>
      <p>The University of Nebraska does not discriminate based on race, color, ethnicity, national origin, sex, pregnancy, sexual orientation, gender identity, religion, disability, age, genetic information, veteran status, marital status, and/or political af liation in its programs, activities, or employment. 0584BROISP0316</p>
    </div>
  </div>
</template>

<script>
import { Button } from 'mint-ui'
export default {
  components: {
    'mt-button': Button
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
  .footer-apply {
    background: url('../assets/test2.jpg') no-repeat;
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
</style>
