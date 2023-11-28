
<script lang="ts">
  import API from '@/libs/api'

  import {
    NButton,
    NDatePicker,
    NForm,
    NFormItem,
    NInputNumber,
    NSpace,
    useDialog
  } from 'naive-ui'

  import {
    showErrorsDialog,
    showLoadingDialog
  } from '@/libs/dialogs'

  import type {
    Verification
  } from '@/interfaces'


  export default {
    props: ['room_id'],

    data() {
      return {
        startTimestamp: null,
        endTimestamp: null,
        guests_number: null
      }
    },

    setup() {
      return {
        dialog: useDialog()
      }
    },

    components: {
      NButton,
      NDatePicker,
      NForm,
      NFormItem,
      NInputNumber,
      NSpace
    },

    methods: {
      verify() {
        showLoadingDialog(this.dialog)

        const start_date = this.startTimestamp
          ? new Date(this.startTimestamp).toISOString().slice(0, 10)
          : ''

        const end_date = this.endTimestamp
          ? new Date(this.endTimestamp).toISOString().slice(0, 10)
          : ''

        const guests_number = this.guests_number || ''

        const queryParams = {
          start_date,
          end_date,
          guests_number
        }

        const queryString = Object
          .entries(queryParams)
          .map(([key, value]) => `${key}=${value}`)
          .join('&')

        const endpoint = `/rooms/${this.room_id}/availability?${queryString}`

        API.get<Verification>(endpoint)
          .then(result => {
            this.dialog.destroyAll()

            if (result.available) {
              this.dialog.success({
                title: 'Quarto Disponível',
                content: `Valor estimado: ${result.estimated_price}`,
                positiveText: 'Fechar'
              })
            } else if (result.available === false) {
              this.dialog.error({
                title: 'Quarto não disponível',
                content: `Motivo: ${result.reason}`,
                positiveText: 'Fechar'
              })
            } else {
              const { errors } = result

              showErrorsDialog(this.dialog, errors)
            }
          })
      }
    }
  }
</script>

<template>
  <NForm :style="{ width: '400px' }">
    <NSpace vertical align="center">
      <NFormItem>
        <NDatePicker
          placeholder="Data Inicial"
          v-model:value="startTimestamp"
        />
      </NFormItem>

      <NFormItem>
        <NDatePicker
          placeholder="Data Final"
          v-model:value="endTimestamp"
        />
      </NFormItem>

      <NFormItem>
        <NInputNumber
          placeholder="Nº Convidados"
          :min="1"
          v-model:value="guests_number"
        />
      </NFormItem>

      <NButton :style="{ width: '300px' }" @click="verify">
        Verificar
      </NButton>
    </NSpace>
  </NForm>
</template>
