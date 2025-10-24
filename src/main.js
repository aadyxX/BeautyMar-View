import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Import Bootstrap and custom styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/style.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

// Import Bootstrap JS bundle
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
