
export type AvailableRoom = {
  available: true
  estimated_price: number
}

export type UnvailableRoom = {
  available: false
  reason: string
}

export type FailedVerification = {
  available: undefined
  errors: string[]
}

export type Verification = AvailableRoom | UnvailableRoom | FailedVerification
