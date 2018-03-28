// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import TranslateService from './services/TranslateService'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify, {
  theme: {
    'sandbox-orange': '#e24f39',
    'sandbox-blue': '#005b93'
  }
})

Vue.config.productionTip = false

TranslateService.setup().then(function () {
  const i18n = TranslateService.i18n

  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    i18n,
    components: { App },
    template: '<App/>'
  })
})
