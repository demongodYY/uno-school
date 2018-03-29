import indexPage from './pages/index'
import aboutPage from './pages/about'
import communityPage from './pages/community'
import lifePage from './pages/life'

export default {
  en: {
    type: '中文',
    button: {
      apply: 'APPLY NOW',
      more: 'Read More'
    },
    pages: {
      index: indexPage.en,
      about: aboutPage.en,
      community: communityPage.en,
      life: lifePage.en
    },
    menu: {
      title: 'MENU',
      list: [{
        title: 'Home',
        link: '/'}, {
        title: 'About ILUNO',
        link: '/about'}, {
        title: 'The Community',
        link: '/community'}, {
        title: 'Life in ILUNO',
        link: '/life'}, {
        title: 'Contact',
        link: '/contact'}]
    },
    footer: {
      apply: 'Come & join us today!'
    }
  },
  zh: {
    type: 'English',
    button: {
      apply: '马上申请',
      more: '了解更多'
    },
    pages: {
      index: indexPage.zh,
      about: aboutPage.zh,
      community: communityPage.zh,
      life: lifePage.zh
    },
    menu: {
      title: '菜单',
      list: [{
        title: '主页',
        link: '/'}, {
        title: '关于 ILUNO',
        link: '/about'}, {
        title: '社区情况',
        link: '/community'}, {
        title: '在ILUNO的生活',
        link: '/life'}, {
        title: '联系我们',
        link: '/contact'}]
    },
    footer: {
      apply: '现在就来加入我们吧!'
    }
  }
}
