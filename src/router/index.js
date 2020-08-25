import Vue from 'vue'
import Router from 'vue-router'
import DashboardPage from '../pages/DashboardPage.vue'
import WikiPage from '../pages/WikiPage.vue'
import WikiEditPage from '../pages/WikiEditPage.vue'
import HelloWorld from '../components/HelloWorld.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashboardPage
    },
    {
        path: '/wiki',
        name: 'wiki',
        component: WikiPage
    },
    {
        path: '/wiki/edit',
        name: 'wikiedit',
        component: WikiEditPage
    },
    {
        path: '/helloworld',
        name: 'hello-world',
        component: HelloWorld
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
