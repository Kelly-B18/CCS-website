import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/about.vue'
import Expertise from '../views/Academics.vue'
import Contact from '../views/Contact.vue'
import News from '../views/News.vue'
import Faculty from '../views/Faculty.vue'

// Academic program pages
import BSIT from '../views/programs/bsit.vue'
import BSCS from '../views/programs/bscs.vue'
import DMIA from '../views/programs/dmia.vue'
import BLIS from '../views/programs/blis.vue'

const routes = [
  // Main pages
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/expertise', component: Expertise },
  { path: '/contact', component: Contact },
  { path: '/news', component: News },
  { path: '/faculty', component: Faculty },

  // Academic program pages
  {
    path: '/academic-programs/bsit',
    name: 'BSIT',
    component: BSIT
  },
  {
    path: '/academic-programs/bscs',
    name: 'BSCS',
    component: BSCS
  },
  {
    path: '/academic-programs/dmia',
    name: 'DMIA',
    component: DMIA
  },
  {
    path: '/academic-programs/blis',
    name: 'BLIS',
    component: BLIS
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router