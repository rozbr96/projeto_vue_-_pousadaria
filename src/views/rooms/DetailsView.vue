
<script lang="ts">
  import {
    NButton,
    NGrid,
    NGridItem,
    NSpace,
    NText,
    useDialog
  } from 'naive-ui'

  import { h } from 'vue'
  import API from '@/libs/api'

  import type { IRoom } from '@/interfaces'

  import { RoomAvailabilityVerificationDialog } from '@/components/dialogs'


  export default {
    name: 'Room',

    components: {
      NButton,
      NGrid,
      NGridItem,
      NSpace,
      NText
    },

    data() {
      return {
        room: {} as IRoom
      }
    },

    setup() {
      return {
        dialog: useDialog()
      }
    },

    mounted() {
      const { id } = this.$route.params
      API.get<IRoom>(`/rooms/${id}`).then(room => { this.room = room })
    },

    methods: {
      openVerificationDialog() {
        this.dialog.create({
          title: 'Verificar Disponibilidade',
          type: 'info',
          content: () => h(RoomAvailabilityVerificationDialog, { room_id: this.room.id })
        })
      }
    }
  }
</script>

<template>
  <NSpace justify="center">
    <NSpace vertical :style="{ textAlign: 'center', width: '60vw' }">
      <h1>{{ room.name }}</h1>


      <NGrid :cols="2" :y-gap="20">
        <NGridItem :span="2">
          <NSpace vertical :size="0">
            <NText :style="{ fontWeight: 'bold' }">Descrição</NText>

            <NText>{{ room.description }}</NText>
          </NSpace>
        </NGridItem>

        <NGridItem>
          <NSpace vertical :size="0">
            <NText :style="{ fontWeight: 'bold' }">Diária</NText>

            <NText>{{ room.price }}</NText>
          </NSpace>
        </NGridItem>

        <NGridItem>
          <NSpace vertical :size="0">
            <NText :style="{ fontWeight: 'bold' }">Varanda</NText>

            <NText>{{ room.has_balcony ? 'Sim' : 'Não' }}</NText>
          </NSpace>
        </NGridItem>

        <NGridItem>
          <NSpace vertical :size="0">
            <NText :style="{ fontWeight: 'bold' }">Dimensões</NText>

            <NText>{{ room.dimension }} m²</NText>
          </NSpace>
        </NGridItem>

        <NGridItem>
          <NSpace vertical :size="0">
            <NText :style="{ fontWeight: 'bold' }">TV</NText>

            <NText>{{ room.has_tv ? 'Sim' : 'Não' }}</NText>
          </NSpace>
        </NGridItem>

        <NGridItem>
          <NSpace vertical :size="0">
            <NText :style="{ fontWeight: 'bold' }">Número máximo de convidados</NText>

            <NText>{{ room.maximum_number_of_guests }}</NText>
          </NSpace>
        </NGridItem>

        <NGridItem>
          <NSpace vertical :size="0">
            <NText :style="{ fontWeight: 'bold' }">Ar Condicionado</NText>

            <NText>{{ room.has_air_conditioning ? 'Sim' : 'Não' }}</NText>
          </NSpace>
        </NGridItem>

        <NGridItem>
          <NSpace vertical :size="0">
            <NText :style="{ fontWeight: 'bold' }">Número de Banheiros</NText>

            <NText>{{ room.number_of_bathrooms }}</NText>
          </NSpace>
        </NGridItem>

        <NGridItem>
          <NSpace vertical :size="0">
            <NText :style="{ fontWeight: 'bold' }">Cofre</NText>

            <NText>{{ room.has_vault ? 'Sim' : 'Não' }}</NText>
          </NSpace>
        </NGridItem>

        <NGridItem>
          <NSpace vertical :size="0">
            <NText :style="{ fontWeight: 'bold' }">Número de Guarda Roupas</NText>

            <NText>{{ room.number_of_wardrobes }}</NText>
          </NSpace>
        </NGridItem>

        <NGridItem>
          <NSpace vertical :size="0">
            <NText :style="{ fontWeight: 'bold' }">Acessível para PcD</NText>

            <NText>{{ room.is_accessible_for_people_with_disabilities ? 'Sim' : 'Não' }}</NText>
          </NSpace>
        </NGridItem>
      </NGrid>

      <NButton block @click="openVerificationDialog">
        Verificar Disponibilidade
      </NButton>
    </NSpace>
  </NSpace>
</template>
