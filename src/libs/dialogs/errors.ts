
import { h } from 'vue'

import { NSpace, type DialogApi, NAlert } from 'naive-ui'


export default (dialog: DialogApi, errors: string[]) => {
  dialog.error({
    title: 'Erros',

    content: () => h(NSpace, {
      vertical: true
    }, {
      default: () => errors.map(error => h(
        NAlert,
        {
          type: 'error'
        },
        {
          default: () => error
        }
      ))
    }),

    positiveText: 'Fechar'
  })
}
