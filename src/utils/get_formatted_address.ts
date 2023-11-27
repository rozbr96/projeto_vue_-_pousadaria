
import type { IAddress } from '@/interfaces'

export default (address: IAddress) => {
  const {
    number,
    complement,
    street,
    neighbourhood,
    city,
    state,
    postal_code
  } = address

  const number_text = number ? `nº ${number}` : 'sem número'
  const complement_text = complement ? `, ${complement}` : ''

  return `${street}, ${number_text}${complement_text} - ${neighbourhood}, ${city} - ${state}, ${postal_code}`
}
