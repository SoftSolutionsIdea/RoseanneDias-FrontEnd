import axios from "axios";
import { toast } from "react-toastify";
import { Dress } from "../../pages/Stock/dressType";

const API_URL = "https://roseanne-dias-aluguel.onrender.com/stock";

export const UpdatePopUp = async (vestido: Dress, token: string) => {
    if (!token) {
        throw new Error("Token não encontrado. O usuário não está autenticado.");
    }

    try {
        const response = await axios.patch(`${API_URL}/${vestido.id}`, vestido, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            toast.error("Erro ao atualizar o vestido:", error.response?.data || error.message);
        } else {
            toast.error("Erro desconhecido.");
        }
        throw new Error("Erro ao atualizar o vestido");
    }
};
