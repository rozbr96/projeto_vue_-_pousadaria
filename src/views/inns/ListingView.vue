
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
            align: 'left'
          },
          {
            title: 'Cidade',
            key: 'address.city',
            align: 'left'
          },
          {
            title: 'Estado',
            key: 'address.state',
            align: 'center'
          },
          {
            title: 'Nota Média',
            key: 'score_avg',
            align: 'center'
          },
          {
            title: 'Ações',
            render: (inn: IInn) => h(InnActions, { inn })
          }
        ] as TableColumn[]
      }
    },

    mounted() {
      const { search_for } = this.$route.query
      const endpoint = `/search?search_for=${search_for || ''}`

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
