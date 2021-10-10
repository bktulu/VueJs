import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import Test from './components/Test.vue'
import VueRouter from 'vue-router'
import {routes} from './routes'

Vue.config.productionTip = false
Vue.component("Test-component", Test);
Vue.use(VueRouter);

const router = new VueRouter({
  routes
})

new Vue({
  vuetify,
  router,
  render: h => h(App) //App.vue içerisindeki template i alır otomatik render eder
}).$mount('#app')
