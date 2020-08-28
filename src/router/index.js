import Vue from 'vue'
import Router from 'vue-router'
import DashboardPage from '../pages/DashboardPage.vue'
import WikiPage from '../pages/WikiPage.vue'
import WikiEditPage from '../pages/WikiEditPage.vue'
import HelloWorld from '../components/HelloWorld.vue'
import LoginPage from '../pages/LoginPage.vue'
import SignupPage from '../pages/SignupPage.vue'
import VerifyPage from '../pages/VerifyPage.vue'

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
        path: '/login',
        name: 'login',
        component: LoginPage
    },
    {
        path: '/signup',
        name: 'signup',
        component: SignupPage
    },
    {
        path: '/verify',
        name: 'verify',
        component: VerifyPage
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
