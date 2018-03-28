import BusyService from '../services/BusyService'

function busy (t, n, descriptor) {
  const original = descriptor.value
  descriptor.value = function (...args) {
    try {
      var result = original.apply(this, args)
      BusyService.addToPromises(result)
      return result
    } catch (e) {
      console.log(e)
    }
  }
  return descriptor
}

export default busy
