import Vue from 'vue'
import Router from 'vue-router'

// components
import UserLogin from '../components/UserLogin'
import UserSignIn from "../components/UserSignIn"
import Top from "../components/Top"
import Save_calorie from "../components/Save_calorie";

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
        },
          {
            path: '/Save_calorie',
            component: Save_calorie,
        }
      ]
    }
)