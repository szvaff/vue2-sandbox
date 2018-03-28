import axios from 'axios'
import { cacheAdapterEnhancer } from 'axios-extensions'
import q from 'q'

const http = axios.create({
  headers: { 'Cache-Control': 'no-cache' },
  adapter: cacheAdapterEnhancer(axios.defaults.adapter, true)
})

class HttpService {
  constructor () {
    axios.defaults.baseURL = '/static/mock'
  }

  get (url, config) {
    return new q.Promise(function (resolve, reject) {
      http.get(url, config).then(function (response) {
        resolve(response.data)
      }).catch(function (err) {
        reject(err)
      })
    })
  }
}

export default new HttpService()
