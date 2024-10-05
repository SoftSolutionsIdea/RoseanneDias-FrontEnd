import axios from "axios"

const API_URL = "https://roseanne-dias-aluguel.onrender.com/login"

export const loginRequest = async (cpf: string, happyday: string) => {
  try {
    const response = await axios.post(API_URL, {
      cpf,
      happyday,
    })

    return response.data
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    throw new Error("Erro no login, verifique suas credenciais.")
  }
}
