import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import Home from './views/home'
import Makanan from './views/makanan'
import Makanan1 from './views/makanan1'
import Makanan2 from './views/makanan2'
import './style.css'

Vue.use(Router)
Vue.use(Meta)
export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'Home',
      path: '/',
      component: Home,
    },
    {
      name: 'Makanan',
      path: '/makanan',
      component: Makanan,
    },
    {
      name: 'Makanan1',
      path: '/makanan1',
      component: Makanan1,
    },
    {
      name: 'Makanan2',
      path: '/makanan2',
      component: Makanan2,
    },
  ],
})
