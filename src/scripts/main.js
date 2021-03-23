import Vue from 'vue'
import Vuelidate from 'vuelidate'
import router from "./router"
import store from './store'
import App from './App'

Vue.use(Vuelidate)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
