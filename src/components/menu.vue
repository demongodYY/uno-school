<template>
  <div class="menu-wrapper">
      <div class="menu-title">
        {{$t('menu.title')}}
        <span class="close-icon" v-on:click="handleChoose()">✖️</span>
      </div>
      <div class="menu-list">
        <mt-cell v-for="(item, index) in $t('menu.list')" :key="index"
          :title="item.title"
          :to="item.link"
          v-on:click.native="handleChoose()"
          >
          <span>></span>
        </mt-cell>
      </div>
      <div class="apply-button">
        <router-link to="/apply" >
          <mt-button plain size="large" @click="handleChoose()" class="menu-button">{{$t('button.apply')}}</mt-button>
        </router-link>
      </div>

  </div>
</template>

<script>
import { Cell, Button } from 'mint-ui'
import '@/assets/css/menu.css'
export default {
  name: 'side-menu',
  components: {
    'mt-button': Button,
    'mt-cell': Cell
  },
  data () {
    return {
    }
  },
  methods: {
    handleChoose () {
      this.$emit('update:menuVisible', false)
    }
  },
  props: ['menuVisible']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* @import url('../assets/css/menu.css'); */
  .menu-title {
    font-size: 2.5rem;
    font-weight: bold;
    padding: 1.3rem 0;
    border-bottom: 2px solid red;
    margin-bottom:1rem;
    margin-left: 10px;
    display:flex;
    justify-content: space-between;
    align-items: center;
  }
  .menu-title .close-icon {
    color: #999999;
    text-align: right;
    font-weight: lighter;
    font-family: console;
    font-size: 25px;
  }
  .menu-wrapper {
    height: 100vh;
    width: 70vw;
    background-color:#0e0e0e;
    color: #fff;
    text-align: left;
    padding: 3rem 1.2rem;
  }
  .mint-cell {
    background-color:#0e0e0e;
  }
  .menu-list {
    margin-bottom: 7vh;
  }
  .menu-button {
    color:#fff;
    border-color: #fff;
    border-width: 2px;
    padding-top:1rem;
    padding-bottom: 1rem;
    width: 100%;
    margin:0 auto;
    height: auto;
    border-radius: 0;
  }
  .apply-button{
    padding:0 10px;
  }
</style>
