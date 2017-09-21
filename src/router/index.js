import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import SignUp from '@/components/SignUp'
import SignIn from '@/components/SignIn'
import NewProject from '@/components/NewProject'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/newproject',
      name: 'NewProject',
      component: NewProject
    }
  ]
})
