import axios from "axios";
import { toast } from "react-toastify";

const API_URL = "https://roseanne-dias-aluguel.onrender.com/clients";

export const CreatePopUp = async (
    name: string,
    cpf: string,
    tel: string,
    email: string,
    address: {
        num: number;
        street: string;
        cep: string;
        complement?: string;
    },
    token: string
) => {
    try {
        const response = await axios.post(API_URL, {
            name,
            cpf,
            tel,
            email,
            address,
        }, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response.data;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        toast.error("Erro ao criar o cliente");
        throw new Error("Erro ao criar o cliente");
    }
};
