import Vue from 'vue'
import Router from 'vue-router'

// components
import UserLogin from '../components/UserLogin.vue'
import UserSignIn from "../components/UserSignIn.vue"
import Top from "../components/Top.vue"

Vue.use(Router)

export default new Router({
      routes: [
        {
          path: '/',
          name: 'top',
          component: Top,
          meta: {
              isPublic: true
          }
        },
        {
          path: '/login',
          name: 'login',
          component: UserLogin,
          meta: {
              isPublic: true
          }
        },
          {
          path: '/signin',
          name: 'signin',
          component: UserSignIn,
          meta: {
              isPublic: true
          }
        }
      ]
    }
)