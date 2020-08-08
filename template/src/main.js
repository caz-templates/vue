import Vue from 'vue'
import element from 'element-ui'
// import { sync } from 'vuex-router-sync'
import App from './app'
import i18n from './i18n'
import store from './store'
import router from './router'
import plugins from './plugins'

// global styles
import './style.scss'

// global config
Vue.config.debug = process.env.NODE_ENV === 'development'
Vue.config.silent = process.env.NODE_ENV === 'production'
Vue.config.productionTip = false

// plugins
Vue.use(element)
Vue.use(plugins)
// sync(store, router, { moduleName: 'route' })

// Create root app
const app = new Vue({
  name: 'root',
  i18n: i18n,
  store: store,
  router: router,
  render: h => h(App)
})

// Mount to `#app` element
app.$mount('#app')
