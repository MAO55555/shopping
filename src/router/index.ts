import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
          component: import("@/views/Home/index.vue")
        },
        {
          path: '/goods/detail',
          name: 'goodsDetail',
          component: import("@/views/GoodsDetail/index.vue")
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
