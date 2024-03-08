import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue'

/**custom css */
import './assets/sass/styles.scss'
const app = createApp(App)
app.use(createPinia())
app.mount('#app')

/**bootstrap js */
import * as bootstrap from 'bootstrap'
