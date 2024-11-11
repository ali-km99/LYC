import './assets/main.css'
import '@mdi/font/css/materialdesignicons.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { MotionPlugin } from '@vueuse/motion'
import { createVuetify } from 'vuetify/lib/framework.mjs'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'
const app = createApp(App)

const vuetify = createVuetify({
  components,
  directives,
})
app.use(MotionPlugin)
app.use(vuetify)
app.use(router)
app.mount('#app')
