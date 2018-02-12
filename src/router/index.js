import Vue from 'vue'
import Router from 'vue-router'
import detail from '../pages/detail'
import Home from '../pages/home'
import NotFound from '../pages/404'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/detail/:type/:id/:title',
      name: 'detail',
      component: detail
    },
    {
      path: '*',
      name: '404',
      component:NotFound
    }
  ]
})
