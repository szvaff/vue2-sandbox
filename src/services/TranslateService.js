import Vue from 'vue'
import VueI18n from 'vue-i18n'
import I18nService from './I18nService'
import q from 'q'

class TranslateService {
  constructor () {
    Vue.use(VueI18n)
    this.i18n = new VueI18n({
      locale: 'en'
    })
    this._initialized = false
  }

  setup () {
    var service = this

    if (this._initialized === false) {
      return new q.Promise(function (resolve, reject) {
        service.loadMessages('en').then(function () {
          service._initialized = true
          resolve()
        }).catch(function (err) {
          reject(err)
        })
      })
    }

    return Promise.resolve()
  }

  loadMessages (lang) {
    var vm = this
    return new q.Promise(function (resolve, reject) {
      I18nService.getLabels(lang).then(function (response) {
        vm.i18n.setLocaleMessage(lang, response)
        resolve()
      }).catch(function (err) {
        reject(err)
      })
    })
  }

  setLanguage (lang) {
    var vm = this

    return new q.Promise(function (resolve, reject) {
      vm.loadMessages(lang).then(function () {
        vm.i18n.locale = lang
      })
    })
  }

  translate (key) {
    return this.i18n.t(key)
  }
}

export default new TranslateService()
