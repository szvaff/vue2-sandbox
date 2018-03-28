<template>
  <v-progress-linear :indeterminate="true" v-show="show" background-color="sandbox-blue" color="sandbox-orange"></v-progress-linear>
</template>

<script>
import BusyService from '../services/BusyService'
import q from 'q'

export default {
  name: 'AppBusyIndicator',
  data () {
    return {
      show: false
    }
  },
  created () {
    var vm = this
    BusyService.subscribe(function (promises) {
      vm.$data.show = true
      q.all(promises).fin(function () {
        vm.$data.show = false
      })
    })
  }
}
</script>

<style scoped lang="scss">
.progress-linear {
  position: absolute;
  bottom: 0;
  margin-bottom: 0;
}
</style>