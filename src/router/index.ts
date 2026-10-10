import { createRouter, createWebHashHistory } from 'vue-router'
import routes from '@/router/routes.ts'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach(() => {

})

export default router