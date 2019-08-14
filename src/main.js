import Vue from 'vue'
import App from './App.vue'
import store from './store'
import 'tailwindcss/base.css'
import 'tailwindcss/components.css'
import 'tailwindcss/utilities.css'
import '@fortawesome/fontawesome-free/css/all.css'
import VTooltip from 'v-tooltip'

Vue.use(VTooltip)
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
