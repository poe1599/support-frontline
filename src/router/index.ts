import { createMemoryHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/', component: ()=>import('~me/views/index.vue') },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router