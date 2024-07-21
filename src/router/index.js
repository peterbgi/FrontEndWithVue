import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import AboutTeam from '../components/AboutTeam.vue'
import ServicesPage from '../components/ServicesPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: HomePage
    },
    {
      path: '/aboutteam',
      name: 'aboutteam',
      component: AboutTeam
    },
    {
      path: '/servicespage',
      name: 'servicespage',
      component: ServicesPage
    },
    
  ]
})

export default router
