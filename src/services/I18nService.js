import HttpService from './HttpService'
import busy from '../decorators/busy'

class I18nService {
  @busy
  getLabels (lang) {
    return HttpService.get('i18n/' + lang + '.json')
  }
}

export default new I18nService()
