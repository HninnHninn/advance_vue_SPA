import Vue from 'vue'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import App from './App'
import router from './router'

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  el: '#app',
  router,
  vuetify,
  components: { App },
  template: '<App/>'
})
