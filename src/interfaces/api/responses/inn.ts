
import type IAddress from './address'

export default interface IInn {
  check_in: Date
  check_out: Date
  corporate_name: string
  description: string
  email: string
  enabled: boolean
  id: number
  name: string
  pets_are_allowed: boolean
  registration_number: string
  usage_policies: string
  score_avg: number
  address: IAddress
}
