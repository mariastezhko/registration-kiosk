import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueSwal from 'vue-swal'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueSwal)

import Register from './components/Register'
const routes = [
  { path: '/', component: Register }
]

const router = new VueRouter({
  routes, // short for routes: routes
  mode: 'history'
})

new Vue({
//define the selector for the root component
  el: '#app',
  //pass the template to the root component
  template: '<App/>',
  //declare components that the root component can access
  components: { App },
  //pass in the router to the Vue instance
  router
}).$mount('#app')//mount the router on the app
