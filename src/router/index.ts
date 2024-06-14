import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior: () => ({ left: 0, top: 0 }),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: import("@/views/Layout/index.vue"),
      redirect: '/home', // 默认子路由
      children: [
        {
          path: '/home',
          name: 'home',
          component: import("@/views/Home/index.vue"),
          meta: {
            show: true
          }
        },
        {
          path: '/goods/detail',
          name: 'goodsDetail',
          component: import("@/views/GoodsDetail/index.vue"),
          meta: {
            show: true
          }
        },
        {
          path: '/shopping/cart',
          name: 'shoppingCart',
          component: import("@/views/ShoppingCart/index.vue"),
          meta: {
            show: true
          }
        },
        {
          path: '/order',
          name: 'order',
          component: import("@/views/Order/index.vue"),
          meta: {
            show: true
          }
        },
        {
          path: '/payDone',
          name: 'payDone',
          component: import("@/views/PayDone/index.vue"),
          meta: {
            show: true
          }
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: import("@/views/Login/index.vue")
    }
  ]
})

export default router
