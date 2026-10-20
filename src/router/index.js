
import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/about.vue'
import Services from '../views/Admissions.vue'
import Expertise from '../views/Academics.vue'
import Projects from '../views/Campuslife.vue'
import Contact from '../views/Contact.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/services', component: Services },
  { path: '/expertise', component: Expertise },
  { path: '/projects', component: Projects },
  { path: '/contact', component: Contact }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
