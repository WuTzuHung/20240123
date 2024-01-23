import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/VtextAndVmodle',
      name: '/VtextAndVmodle',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/VtextAndVmodle.vue')
    },
    {
      path: "/Vfor",
      name: "Vfor",
      component: () => import("../views/Vfor.vue")
    },
    {
      path: "/Von",
      name: "Von",
      component: () => import("../views/Von.vue")
    },
    {
      path: "/nine",
      name: "nine",
      component: () => import("../views/nine.vue")
    },
    {
      path: "/Vbind",
      name: "Vbind",
      component: () => import("../views/Vbind.vue")
    },
    {
      path: "/VifAndVshow",
      name: "VifAndVshow",
      component: () => import("../views/VifAndVshow.vue")
    },
    {
      path: "/WatchAndComputed",
      name: "WatchAndComputed",
      component: () => import("../views/WatchAndComputed.vue")
    },
    {
      path: "/Propose",
      name: "Propose",
      component: () => import("../views/Propose.vue")
    },
    {
      path: "/Emit",
      name: "Emit",
      component: () => import("../views/Emit.vue")
    },
    {
      path: "/DataFlow",
      name: "DataFlow",
      component: () => import("../views/DataFlow.vue")
    },
    {
      path: "/introduce",
      name: "introduce",
      component: () => import("../views/introduce.vue")
    },
    {
      path: "/hoshikawa1",
      name: "hoshikawa1",
      component: () => import("../views/hoshikawa1.vue")
    },
    {
      path: "/hoshikawa2",
      name: "hoshikawa2",
      component: () => import("../views/hoshikawa2.vue")
    },
  ]
})



export default router
