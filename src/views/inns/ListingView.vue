
<script lang="ts">
  import { h } from 'vue'

  import type { TableColumn } from 'naive-ui/es/data-table/src/interface'

  import ListingItems from '@/components/ListingItems.vue'
  import { InnActions } from '@/components/tables'

  import API from '@/libs/api'
  import type { IInn } from '@/interfaces'

  export default {
    name: 'DataTable',

    components: {
      ListingItems
    },

    data() {
      return {
        inns: [] as IInn[],
        tableColumns: [
          {
            title: 'Nome',
            key: 'name',
            align: 'left',
            titleAlign: 'center'
          },
          {
            title: 'Cidade',
            key: 'address.city',
            align: 'left',
            titleAlign: 'center'
          },
          {
            title: 'Estado',
            key: 'address.state',
            align: 'center',
            titleAlign: 'center'
          },
          {
            title: 'Nota Média',
            key: 'score_avg',
            align: 'center',
            titleAlign: 'center'
          },
          {
            title: 'Ações',
            titleAlign: 'center',
            render: (inn: IInn) => h(InnActions, { inn })
          }
        ] as TableColumn[]
      }
    },

    mounted() {
      const { search_for, in_city } = this.$route.query

      const endpoint = in_city
        ? `/cities/${in_city}/inns`
        : `/search?search_for=${search_for || ''}`

      API.get<IInn[]>(endpoint).then(inns => { this.inns = inns })
    }
  }
</script>

<template>
  <ListingItems
    title="Pousadas"
    :tableData="inns"
    :tableColumns="tableColumns"
  />
</template>
