export interface ClientData {
  id: number
  name: string
  email: string
  phone: string
  coordinate_x: string
  coordinate_y: string
}

export interface ClientDistance {
  name: string
  latitude: string
  longitude: string
}

export interface User {
  name: string
  pos: number
  phone: string
}

export interface ClientSearchParams {
  filter?: string
}

export interface FormData {
  name: string
  email: string
  phone: string
}

export interface IErrors {
  property: string
  constraints: {
    isNotEmpty?: string
    isEmail?: string
    matches?: string
  }
}

export interface TableData {
  id: number
  name: string
  email: string
  phone: string
}
