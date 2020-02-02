import Vue from 'vue'
import VueRouter from 'vue-router'
import PeoplesList from '@/views/PeoplesList.vue'
import PeopleInfo from '@/views/PeopleInfo.vue'
import History from '@/views/History.vue'
import NotFound from '@/components/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    name: '404',
    component: NotFound
  },
  {
    path: '/',
    name: 'peoplesList',
    component: PeoplesList
  },
  {
    path: '/people/:id(\\d+)',
    name: 'peopleInfo',
    props: true,
    component: PeopleInfo
  },
  {
    path: '/history',
    name: 'history',
    component: History
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
