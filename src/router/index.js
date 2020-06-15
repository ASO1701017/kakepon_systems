import Vue from 'vue'
import Router from 'vue-router'

// components
import UserLogin from '@/components/UserLogin.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: UserLogin,
      meta: {
        isPublic: true
      }
    },
  ]
})

export default router