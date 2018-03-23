import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Contact from '@/pages/contact'
import Apply from '@/pages/apply'
import About from '@/pages/about'
import Community from '@/pages/community'
import Life from '@/pages/life'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/apply',
      name: 'apply',
      component: Apply
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/community',
      name: 'community',
      component: Community
    },
    {
      path: '/life',
      name: 'life',
      component: Life
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
