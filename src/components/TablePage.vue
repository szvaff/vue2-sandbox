<template>
  <div>
    <BackgroundComponent img="/static/img/pexels-photo-97558.jpeg" />
    <v-container fluid fill-height justify-center>
      <v-data-table
        :headers="headers"
        :items="items"
        :loading="loading"
        class="elevation-1"
        :pagination.sync="pagination"
      >
        <v-progress-linear slot="progress" color="blue" indeterminate></v-progress-linear>
        <template slot="items" slot-scope="props">
          <td>{{ props.item.name }}</td>
          <td class="text-xs-right">{{ props.item.calories }}</td>
          <td class="text-xs-right">{{ props.item.fat }}</td>
          <td class="text-xs-right">{{ props.item.carbs }}</td>
          <td class="text-xs-right">{{ props.item.protein }}</td>
          <td class="text-xs-right">{{ props.item.iron }}</td>
        </template>
      </v-data-table>
      <!-- <div class="text-xs-center pt-2">
        <v-pagination v-model="pagination.page" :length="pages"></v-pagination>
      </div> -->
    </v-container>
  </div>
</template>

<script>
import BackgroundComponent from './BackgroundComponent'
import DessertService from '../services/DessertService'

export default {
  name: 'TablePage',
  components: { BackgroundComponent },
  data () {
    return {
      headers: [
        {
          text: 'Dessert (100g serving)',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Iron (%)', value: 'iron' }
      ],
      items: [],
      pagination: {},
      loading: true,
      totalItems: 0
    }
  },
  methods: {
    getData () {
      var vm = this
      vm.loading = true
      DessertService.find().then(function (items) {
        vm.items = items
        vm.totalItems = items.length
        vm.loading = false
      })
    }
  },
  watch: {
    pagination: {
      handler () {
        this.getData()
      },
      deep: true
    }
  },
  mounted () {
    this.getData()
  }
}
</script>
