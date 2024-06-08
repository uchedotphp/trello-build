import './assets/css/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import BaseButton from './components/base/buttons/BaseBtn.vue'
import RoundedButton from './components/base/buttons/RoundedBtn.vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)
// Auto import components
app.component('BaseButton', BaseButton)
app.component('RoundedButton', RoundedButton)

app.use(createPinia())
app.use(router)

app.mount('#app')
