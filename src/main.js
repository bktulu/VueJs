import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import User from './components/User.vue'
import VueRouter from 'vue-router'
import {routes} from './routes'

Vue.config.productionTip = false
Vue.component("User-component", User);
Vue.use(VueRouter);

const router = new VueRouter({
  routes:routes,
  mode:'history' //url de çıkan # işaretinin olmaması için. Aslında default  hash tir.
})

new Vue({
  vuetify,
  router,
  render: h => h(App) //App.vue içerisindeki template i alır otomatik render eder
}).$mount('#app')
