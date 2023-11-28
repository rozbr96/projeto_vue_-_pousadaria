
<script setup lang="ts">
  import {
    NSpace
  } from 'naive-ui'

  import { ListingItems } from '@/components'
</script>

<script lang="ts">
  import { h } from 'vue'

  import { RoomActions } from '@/components/tables'

  import API from '@/libs/api'

  import type {
    IInn,
    IRoom
  } from '@/interfaces'

  import {
    get_formatted_address,
    get_time_from
  } from '@/utils'

  export default {
    data() {
      return {
        inn: {} as IInn,
        rooms: [] as IRoom[],
        roomsTableColumns: [
          {
            title: 'Nome',
            key: 'name'
          },
          {
            title: 'Descrição',
            key: 'description'
          },
          {
            title: 'Diária',
            key: 'formatted_price'
          },
          {
            title: 'Ações',
            render: (room: IRoom) => h(RoomActions, { room })
          }
        ]
      }
    },

    computed: {
      roomsTableData() {
        return this.rooms.map(room => {
          const price_in_real = room.price / 100
          const price_with_delimiter = price_in_real.toFixed(2).replace('.', ',')
          const formatted_price = `R$ ${price_with_delimiter}`

          return {
            ...room,
            formatted_price
          }
        })
      }
    },

    mounted() {
      const { id } = this.$route.params

      const promises = [
        API.get<IInn>(`/inns/${id}`),
        API.get<IRoom[]>(`/inns/${id}/rooms`)
      ]

      Promise.all(promises).then((results) => {
        const [inn, rooms] = results

        this.inn = inn as IInn
        this.rooms = rooms as IRoom[]
      })
    }
  }
</script>

<template>
  <NSpace
    vertical
    align="center"
    v-if="inn.id"
  >
    <h1>Pousada {{ inn.name }}</h1>

    <NSpace justify="end">
      <h2>Avaliação Média: {{ inn.score_avg }}</h2>
    </NSpace>

    <NSpace vertical>
      <dl>
        <dt>Descrição</dt>
        <dd>{{ inn.description }}</dd>

        <dt>Animais</dt>
        <dd>{{ `Animais${inn.pets_are_allowed ? ' ' : ' não '}são permitidos` }}</dd>

        <dt>E-mail</dt>
        <dd>{{ inn.email }}</dd>

        <dt>Endereço</dt>
        <dd>{{ get_formatted_address(inn.address) }}</dd>

        <dt>Horário de Check in</dt>
        <dd>{{ get_time_from(inn.check_in) }}</dd>

        <dt>Horário de Check out</dt>
        <dd>{{ get_time_from(inn.check_out) }}</dd>

        <dt>Políticas de Uso</dt>
        <dd>{{ inn.usage_policies }}</dd>
      </dl>
    </NSpace>

    <ListingItems
      title="Quartos Disponíveis"
      :tableData="roomsTableData"
      :tableColumns="roomsTableColumns"
    />
  </NSpace>

  <NSpace v-else>Carregando...</NSpace>
</template>

<style scoped>
  dt {
    font-weight: bold;
  }

  dd {
    margin-bottom: 10px;
  }
</style>
