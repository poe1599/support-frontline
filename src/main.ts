import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import preset from '~me/preset'
import router from '~me/router'
import 'primeicons/primeicons.css'
import Button from 'primevue/button'

const app = createApp(App)

app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: preset,
    options: {
      darkModeSelector: '.app-dark',
    },
  },
})

app.component('Button', Button)

app.mount('#app')
