import axios from "axios";
import { toast } from "react-toastify";

const API_URL = "https://roseanne-dias-aluguel.onrender.com/stock";

export const fetchVestidos = async (token: string) => {
    try {
        const response = await axios.get(API_URL, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return Array.isArray(response.data) ? response.data : [];
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        toast.error('Erro ao buscar vestidos.');
        throw new Error('Erro ao carregar vestidos.');
    }
};
