import Vue from 'vue'
import Router from 'vue-router'
const Page1 = () => import('../../modules1/page1.vue')
const Page2 = () => import('../../modules2/page2.vue')
Vue.use(Router)

export default new Router({
  linkActiveClass: 'is-active',
  /*scrollBehavior: () => ({ y: 0 }),*/
  routes: [
    {
      name: 'page1',
      path: '/page1',
      component: Page1
    },
    {
      name: 'page2',
      path: '/page2',
      component: Page2
    }
  ]
})
