import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'index',
			component: () => import('@/components/PresentationIndex.vue')
		},
		{
			path: '/counter',
			name: 'counter',
			component: () => import('@/components/PresentationCounter.vue')
		},
	],
	scrollBehavior (to, from, savedPosition) {
		if (savedPosition) return savedPosition
		else return { top: 0 };
	}
})
export default router