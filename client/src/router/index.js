import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Verification from '../views/Verification.vue'
import Doctor from '../views/Doctor.vue'
import Chat from '../views/Chat.vue'
import PaymentSuccess from '../views/PaymentSuccess.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/doctor',
    name: 'Doctor',
    component: Doctor
  },
  {
    path: '/verification',
    name: 'Verification',
    component: Verification
  },
  {
    path: '/success',
    name: 'Success',
    component: PaymentSuccess
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat,
    beforeEnter: (to, from, next) => {
      if (!localStorage.access_token) {
        next('/login')
      } else {
        next()
      }
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
