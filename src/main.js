import Vue from 'vue'
// import Vuex from 'vuex'
import App from './App'
import router from './router'
import vuetify from './plugins/vuetify'
import store from './store'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  components: { App },
  render: h => h(App)
}).$mount('#app')
