
import { type DialogApi } from 'naive-ui'


export default (dialog: DialogApi) => {
  dialog.info({
    title: 'Carregando...',

    closable: false,
    closeOnEsc: false,
    maskClosable: false
  })
}
