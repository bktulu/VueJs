import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App) //App.vue içerisindeki template i alır otomatik render eder
}).$mount('#app')
