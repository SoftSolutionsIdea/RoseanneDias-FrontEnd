import { PopupContainer, PopupContent, Input, Label, Separator, AjustButton, Button, Select, CloseButton, ErrorMessage } from './styles';
import { usePopup } from "../../context/PopUpContext";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreatePopUp } from '../../service/Dress/CreatePopUpDressService';
import { toast } from 'react-toastify';
import { Dress } from '../../pages/Stock/dressType';

const productSchema = z.object({
    title: z.string().min(1, "Nome é obrigatório"),
    description: z.string().min(1, "Descrição é obrigatória"),
    size: z.string().min(1, "Tamanho é obrigatório"),
    code: z.string().min(1, "Código é obrigatório"),
    status: z.string().min(1, "Status é obrigatório"),
});


type ProductFormData = z.infer<typeof productSchema>;

interface DressPopupAddProps {
    addVestido: (novoVestido: Dress) => void;
}

export default function DressPopupAdd({ addVestido }: DressPopupAddProps) {
    const { togglePopup, popupType } = usePopup();
    const { register, handleSubmit, formState: { errors }, reset } = useForm<ProductFormData>({
        resolver: zodResolver(productSchema)
    });

    const onSubmit = async (data: ProductFormData) => {
        const token = localStorage.getItem('access_token');
        if (!token) {
            toast.error('Você precisa estar logado para adicionar um produto.');
            return;
        }

        try {
            const response = await CreatePopUp(data.title, data.description, data.size, data.code, data.status, token);
            const novoVestido: Dress = {
                id: response.id,
                title: data.title,
                description: data.description,
                size: data.size,
                code: data.code,
                status: data.status,
            };
            addVestido(novoVestido);
            toast.success('Produto criado com sucesso!');
            togglePopup();
            reset();
        } catch (error) {
            toast.error('Erro ao criar o produto');
            console.error('Erro ao criar o produto:', error);
        }
    };

    return (
        <>
            {popupType === 'add' && (
                <PopupContainer>
                    <PopupContent>
                        <CloseButton onClick={() => togglePopup()}>X</CloseButton>
                        <h2>Adicionar Vestido</h2>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Label>Nome:</Label>
                            <Input type="text" placeholder="Nome" {...register("title")} />
                            {errors.title && <ErrorMessage >{errors.title.message}</ErrorMessage>}

                            <Separator />

                            <Label>Descrição:</Label>
                            <Input type="text" placeholder="Descrição" {...register("description")} />
                            {errors.description && (
                                <ErrorMessage>{errors.description.message}</ErrorMessage>
                            )}

                            <Separator />

                            <Label>Tamanho:</Label>
                            <Input type="text" placeholder="Tamanho" {...register("size")} />
                            {errors.size && <ErrorMessage>{errors.size.message}</ErrorMessage>}

                            <Separator />

                            <Label>Código:</Label>
                            <Input type="text" placeholder="Código" {...register("code")} />
                            {errors.code && <ErrorMessage>{errors.code.message}</ErrorMessage>}

                            <Separator />

                            <Label>Status:</Label>
                            <Select {...register("status")}>
                                <option value="">Selecione um status</option>
                                <option value="disponível">Disponível</option>
                                <option value="indisponível">Indisponível</option>
                            </Select>

                            <Separator />

                            {errors.status && <ErrorMessage>{errors.status.message}</ErrorMessage>}
                            <AjustButton>
                                <Button type="submit">Salvar</Button>
                            </AjustButton>
                        </form>
                    </PopupContent>
                </PopupContainer>
            )}
        </>
    );
}
