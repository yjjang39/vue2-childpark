import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Animal from '../components/Animal.vue'
import AnimalPresent from '../components/AnimalPresent.vue'
import Nature from '../components/Nature.vue'
import NatureIndoor from '../components/NatureIndoor.vue'
import Funny from '../components/Funny.vue'
import Water from '../components/Water.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'first',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/animal',
    name: 'animal',
    component: Animal
  },
  {
    path: '/animalpresent',
    name: 'animalpresent',
    component: AnimalPresent
  },
  {
    path: '/nature',
    name: 'nature',
    component: Nature
  },
  {
    path: '/natureindoor',
    name: 'natureindoor',
    component: NatureIndoor
  },
  {
    path: '/funny',
    name: 'funny',
    component: Funny
  },
  {
    path: '/water',
    name: 'water',
    component: Water
  },
  {
    path: '/money',
    name: 'money',
    component: () => import('../components/Money.vue')
  },
  {
    path: '/use',
    name: 'use',
    component: () => import('../components/Use.vue')
  },
  {
    path: '/parking',
    name: 'parking',
    component: () => import('../components/Parking.vue')
  },
  {
    path: '/location',
    name: 'location',
    component: () => import('../components/Location.vue')
  },
  // {
  //   path: '/inform',
  //   name: 'inform',
  //   component: () => import('../components/Inform.vue')
  // },
  // {
  //   path: '/citizen',
  //   name: 'citizen',
  //   component: () => import('../components/Citizen.vue')
  // },
  // {
  //   path: '/qna',
  //   name: 'qna',
  //   component: () => import('../components/Qna.vue')
  // },
  // {
  //   path: '/rental',
  //   name: 'rental',
  //   component: () => import('../components/Rental.vue')
  // },
  {
    path: '/animalprogram',
    name: 'animalprogram',
    component: () => import('../components/AnimalProgram.vue')
  },
  {
    path: '/natureprogram',
    name: 'natureprogram',
    component: () => import('../components/NatureProgram.vue')
  },


  {
    path: '/login/naver',
    name: 'NaverLoginView',
    component: () => import('../components/NaverLoginView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
