import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { apolloProvider } from './apollo/apollo'
import './assets/scss/styles.scss'

Vue.config.productionTip = false

new Vue({
  apolloProvider,
  router,
  vuetify,
  render: (h) => h(App)
}).$mount('#app')
