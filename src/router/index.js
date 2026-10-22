
import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/about.vue'
import Expertise from '../views/Academics.vue'
import Contact from '../views/Contact.vue'
import News from '../views/News.vue'
import Faculty from '../views/Faculty.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/expertise', component: Expertise },
  { path: '/contact', component: Contact },
  { path: '/news', component: News },
  { path: '/faculty', component: Faculty }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
