import HttpService from './HttpService'
import busy from '../decorators/busy'
import q from 'q'

class DessertService {
  @busy
  find () {
    return new q.Promise(function (resolve, reject) {
      HttpService.get('dessert.json').then(function (resp) {
        resolve(resp)
      })
    }).delay(1000)
  }
}

export default new DessertService()
