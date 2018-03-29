<template>
  <div class="wrapper">
    <mt-header fixed class="header-container">
      <div slot="left" class="header-left">
        <router-link to="/">
          <img src="@/assets/logo.png" alt="logo"/>
        </router-link>
        <div>ILUNO<br/>PROGRAM</div>
      </div>
      <div slot="right">
        <mt-button size="normal" plain class="button-switch" @click="lanChange">{{$t('type')}}</mt-button>
        <mt-button @click="handleMenuVisible" class="menu-icon">
          <img src='../assets/menu-icon.png' slot="icon">
        </mt-button>
      </div>
    </mt-header>
    <mt-popup v-model="menuVisible" position="right">
      <side-menu :menuVisible.sync="menuVisible"></side-menu>
    </mt-popup>
  </div>
</template>

<script>
import { Header, Button, Popup } from 'mint-ui'
import SideMenu from './menu'
export default {
  name: 'page-header',
  components: {
    'mt-header': Header,
    'mt-button': Button,
    'mt-popup': Popup,
    'side-menu': SideMenu
  },
  data () {
    return {
      menuVisible: false
    }
  },
  methods: {
    lanChange () {
      if (this.$i18n.locale === 'en') {
        this.$i18n.locale = 'zh'
      } else {
        this.$i18n.locale = 'en'
      }
    },
    handleMenuVisible () {
      this.menuVisible = !this.menuVisible
    }
  },
  mounted () {
    this.menuVisible = false
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header-container{
    background-color: #0e0e0e;
    height:11vh;
    padding: 0 5%;
  }
  .header-left {
    color: #fff;
    display: flex;
    align-items:center;
  }
  .header-left img {
    height: auto;
    width: 15vw;
  }
  .header-left div {
    margin-left: .5rem;
    inline-size: 1.1rem;
    font-weight: bold;
  }
  .wrapper .mint-header button.button-switch{
    padding: 0 1rem;
    border: 2px solid #ffffff;
    border-radius: 0;
  }
  .wrapper .mint-header button.mint-button{
    margin: .5rem .5rem;
  }
  .menu-icon {
    width:1.5rem;
  }
  .menu-icon img {
    width:100%;
    max-height:auto;
  }
</style>
