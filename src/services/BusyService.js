import BaseObservable from '../utils/BaseObservable'

class BusyService extends BaseObservable {
  promises = []

  addToPromises (promise) {
    promise.$$_index = this.promises.length
    this.promises.push(promise)
    this.removeOnFinish(promise)
    this.notify(this.promises)
    return promise
  }

  removeOnFinish (promise) {
    var vm = this
    promise.fin(function () {
      vm.promises = vm.promises.splice(promise.$$_index, 1)
    })
  }
}

export default new BusyService()
