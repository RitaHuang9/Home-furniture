import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/Admin.vue'),
      children: [
        {
          path: 'login',
          name: 'login',
          component: () => import('../views/Admin/Login.vue'),
        },
        {
          path: 'dashboard',
          name: 'dashboard',
          component: () => import('../views/Admin/Dashboard.vue'),
        },
        {
          path: 'dashboard-product-detail/:dashboardId/:productStatus',
          name: 'dashboard-product-detail',
          component: () => import('../views/Admin/Product-Detail.vue'),
          // props:true
          props: (route) => route.params
        },
      ]
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('../views/User.vue'),
      children: [
        {
          path: 'index',
          name: 'index',
          component: () => import('../views/User/Index.vue'),
        },
        {
          path: 'product-list',
          name: 'product-list',
          component: () => import('../views/User/ProductList.vue'),
          children:[
            {
              path: 'render-product/:categoryId',
              name: 'render-product',
              component: () => import('../views/User/ProductListAll.vue'),
              props: true,
            },
          ]
        },
        {
          path: 'product-detail/:productId',
          name: 'product-detail',
          component: () => import('../views/User/ProductDetail.vue'),
          props: true,
        },
        {
          path: "carts",
          name: "carts",
          component: () => import("../views/User/Carts.vue"),
        },
        {
          path: "send-order",
          name: "send-order",
          component: () => import("../views/User/SendOrder.vue"),
        },
        {
          path: "finish-order/:orderId",
          name: "finish-order",
          component: () => import("../views/User/FinishOrder.vue"),
          props: true,
        },

      ]
    },

  ],
  // lick active樣式
  linkActiveClass: 'active',     //classname
  // eslint-disable-next-line no-unused-vars
  scrollBehavior(to,from,savedPostion){
    if(to.fullPath.match('user')){
      return{
        top: 0,
      }
    }
  }
})

export default router
