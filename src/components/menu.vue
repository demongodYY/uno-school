<template>
  <div class="menu-wrapper">
      <div class="menu-title">
        {{$t('menu.title')}}
      </div>
      <div class="menu-list">
        <mt-cell v-for="(item, index) in $t('menu.list')" :key="index"
          :title="item.title"
          :to="item.link"
          >
          <span>></span>
        </mt-cell>
      </div>

      <mt-button plain size="large" class="menu-button">{{$t('button.apply')}}</mt-button>

  </div>
</template>

<script>
import { Cell, Button } from 'mint-ui'
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .menu-title {
    font-size: 2.5rem;
    font-weight: bold;
    padding: 1.3rem 0;
    border-bottom: 2px solid red;
    margin-bottom:1rem;
    margin-left: 10px;
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
    padding-top:1rem;
    padding-bottom: 1rem;
    width: 70%;
    margin:0 auto;
    height: auto;
    border-radius: 0;
  }
</style>
