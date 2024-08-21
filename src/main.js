import { createApp } from 'vue'

import router from '@/config/router/router.js'
import { createPinia } from "pinia";

import '@/config/css/reset.css'
import '@/config/css/index.css'

import App from '@/App.vue'

const appVue = createApp(App)

appVue
	.use(createPinia())
	.use(router)
	.mount('#app')
