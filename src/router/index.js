import Vue from 'vue'
import Router from 'vue-router'

// components
import UserLogin from '../components/UserLogin.vue'
import UserSignIn from "../components/UserSignIn";

Vue.use(Router)

export default new Router({
      routes: [
        {
          path: '/login',
          name: 'login',
          component: UserLogin,
          meta: {
              isPublic: true
          }
        },
          {
          path: '/singin',
          name: 'singin',
          component: UserSignIn,
          meta: {
              isPublic: true
          }
        }
      ]
    }
)