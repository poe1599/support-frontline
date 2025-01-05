import { createMemoryHistory, createRouter } from 'vue-router'

const routes = [
  {
    name: 'index',
    path: '/',
    component: () => import('~me/views/index.vue'),
  },
  {
    name: 'rules',
    path: '/rules',
    component: () => import('~me/views/rules.vue'),
  },
  {
    name: 'game',
    path: '/game',
    component: () => import('~me/views/game.vue'),
  },
  {
    name: 'score',
    path: '/score',
    component: () => import('~me/views/score.vue'),
  },
  {
    path: '/:catchAll(.*)',
    redirect: { name: 'index' },
  },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router
