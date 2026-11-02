import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import App from './App.vue'
import { router } from './route.ts'
import { createPinia } from 'pinia'

const pinia = createPinia();

createApp(App).use(router).use(pinia).mount('#app')
