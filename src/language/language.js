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
      contact: 'Contact ILUNO',
      apply: 'Come & join us today!',
      content: 'The University of Nebraska does not discriminate based on race, color, ethnicity, national origin, sex, pregnancy, sexual orientation, gender identity, religion, disability, age, genetic information, veteran status, marital status, and/or political af liation in its programs, activities, or employment.'
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
      contact: '联系 ILUNO',
      apply: '现在就来加入我们吧!',
      content: '内布拉斯加大学不会因为以下任何因素对个人或团体有歧视：人种，肤色，民族，国籍，是否怀孕，性取向，性别身份，宗教，残疾，年龄，基因信息，兵役情况，婚姻状况，以及政治立场，活动或从政情况。'
    }
  }
}
