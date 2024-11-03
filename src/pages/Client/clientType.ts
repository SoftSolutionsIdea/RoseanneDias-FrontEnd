export interface Client {
  id: number
  name: string
  cpf: string
  tel: string
  email: string
  address: {
    num: number
    street: string
    cep: string
    complement?: string
  }
}
