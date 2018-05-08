import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import App from './App'

Vue.use(VueRouter)

export function createApp(context) {
  const router = new VueRouter({
    mode: 'history',
    routes
  })

  const app = new Vue({
    router,
    render: h => h(App)
  })

  return {app, router}
}
