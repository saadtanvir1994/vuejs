import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta:{
        title: "TaxSlips- Canada's Online Tax Returns"
      }
    },
      {
      path: '/guides/t4-guide',
      name: 't4guide',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () { 
        return import(/* webpackChunkName: "about" */ './views/Guide-T4.vue')
      },
      meta:{
        title: "T4 Guide | TaxSlips"
      }
    },
      {
      path: '/guides/taxslip-guide',
      name: 'guide',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () { 
        return import(/* webpackChunkName: "about" */ './views/Guide.vue')
      },
      meta:{
        title: "TaxSlips Guide | TaxSlips"
      }
    },
      {
      path: '/guides/rl1-guide',
      name: 'rl1-guide',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () { 
        return import(/* webpackChunkName: "about" */ './views/Rl1-Guide.vue')
      },
      meta:{
        title: "RL1 Guide | TaxSlips"
      }
    }
  ]
})
