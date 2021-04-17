import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/Login.vue'
import Layout from '../views/Layout.vue'
import Dashboard from '../views/dashboard/index.vue'
import Category from '../views/categories/index.vue'
import Products from '../views/products/index.vue'
import Invoices from '../views/invoices/index.vue'
import Stocks from '../views/stocks/index.vue'


Vue.use(VueRouter)

const routes = [
  {
    path:'',
    name:'Login',
    component:Login
  },
  {
    path:'/logout',
    name:'Logout',
    component:Login
  },
  {
    path:'/dashboard',
    name:'Layout',
    component:Layout,
    children:[
      {
        path:'',
        name:Dashboard,
        component:Dashboard
      },
      {
        path:'/categories',
        name:Category,
        component:Category
      },
      {
        path:'/products',
        name:Products,
        component:Products
      },
      {
        path:'/invoices',
        name:Invoices,
        component:Invoices
      },
      {
        path:'/stocks',
        name:Stocks,
        component:Stocks
      }
    ]
  }

]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
