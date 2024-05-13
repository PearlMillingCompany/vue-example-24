import './assets/main.css'
import App from './App.vue'
import { createApp } from 'vue'
import Home from './components/pages/Home.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


//Vue-router

import { createMemoryHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/', component: Home },
]

const vueRouter = createRouter({
history: createMemoryHistory(),
routes,
})


// Components

const vuetify = createVuetify({
  components,
  directives,
})

createApp(App).use(vuetify).use(vueRouter).mount('#app')
/// have to add cors some howd