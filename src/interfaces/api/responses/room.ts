
export default interface IRoom {
  id: number
  inn_id: number
  name: string
  description: string
  dimension: number
  price: number
  maximum_number_of_guests: number
  number_of_bathrooms: number
  number_of_wardrobes: number
  has_balcony: boolean
  has_tv: boolean
  has_air_conditioning: boolean
  has_vault: boolean
  is_accessible_for_people_with_disabilities: boolean
  enabled: boolean
}
