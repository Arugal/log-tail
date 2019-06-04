import Vue from 'vue'
import Router from 'vue-router'
import Catalog from '../components/Catalog.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Catalog',
      component: Catalog
    }
  ]
})