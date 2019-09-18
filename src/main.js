import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)
import '@/assets/css/index.scss' // global css
import '@/assets/fonts/iconfont.css'
import '@/directive'
import '@/element-ui'
import '@/components/global'
import App from '@/App'
import router from '@/router'
import store from '@/store'
import { sync } from 'vuex-router-sync'

import i18n from '@/locales' // Internationalization
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

// configure language
locale.use(lang)
// configure language
sync(store, router)
const detectPromise = store.dispatch('globalConfig/detectDevice')
detectPromise.then(() => {
  const app = new Vue({
    router,
    store,
    i18n,
    ...App
  })
  // Object spread copying everything from App.vue
  // actually mount to DOM
  app.$mount('app')
})
window.about = '__RELEASE__'
// Don't warn about using the dev version of Vue in development
Vue.config.productionTip = process.env.ENV !== 'development'
