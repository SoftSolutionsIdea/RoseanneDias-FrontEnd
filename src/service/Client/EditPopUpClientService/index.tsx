import axios from "axios";
import { toast } from "react-toastify";
import { Client } from "../../../pages/Client/clientType";

const API_URL = "https://roseanne-dias-aluguel.onrender.com/clients";

export const UpdatePopUp = async (client: Client, token: string) => {
    if (!token) {
        throw new Error("Token não encontrado. O usuário não está autenticado.");
    }

    try {
        const response = await axios.patch(`${API_URL}/${client.id}`, client, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            toast.error("Erro ao atualizar o cliente: " + (error.response?.data || error.message));
        } else {
            toast.error("Erro desconhecido.");
        }
        throw new Error("Erro ao atualizar o cliente");
    }
};
