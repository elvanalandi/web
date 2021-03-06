import Vue from 'vue'
import VueRouter, { NavigationGuardNext, Route, RouteConfig, RouteRecord } from 'vue-router'
import { component } from 'vue/types/umd'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  let loggedIn = false;

  if(localStorage.getItem('currentUser') != null){
    loggedIn = true;
  }else{
    loggedIn = false;
  }

  if(to.name == 'Login' && loggedIn){
    next({name: 'Home'});
  }else{
    next();
  }

})

export default router
