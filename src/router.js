import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/calender',
      name: 'calender',
      component: () => import(/* webpackChunkName: "v-calender" */ './views/Calender.vue')
    },
    {
      path: '/months/:id/:year',
      name: 'budget-app',
      component: () => import(/* webpackChunkName: "v-monthly" */ './views/MonthlyView.vue')
    },
    {
      path: '/backup',
      name: 'backup',
      component: () => import(/* webpackChunkName: "v-backup" */ './views/Backup.vue')
    },
    {
      path: '/404',
      name: '404',
      component: require('./views/_404').default,
    },
    // Redirect any unmatched routes to the 404 page.
    {
      path: '*',
      redirect: '404',
    },
  ]
})
