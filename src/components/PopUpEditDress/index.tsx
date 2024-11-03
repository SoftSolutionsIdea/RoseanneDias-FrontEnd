import { PopupContainer, PopupContent, Input, Label, ErrorMessage, AjustButton, Separator, Button, CloseButton, SelectEdit } from './styles';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { UpdatePopUp } from '../../service/Dress/EditPopUpDressService';
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

interface DressPopupEditProps {
    vestido: Dress;
    onClose: () => void;
    onUpdate: (updatedVestido: Dress) => void;
}

export default function DressPopupEdit({ vestido, onClose, onUpdate }: DressPopupEditProps) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<ProductFormData>({
        resolver: zodResolver(productSchema),
        defaultValues: {
            title: vestido.title,
            description: vestido.description,
            size: vestido.size,
            code: vestido.code,
            status: vestido.status,
        },
    });

    const onSubmit = async (data: ProductFormData) => {
        const token = localStorage.getItem('access_token');
        if (!token) {
            toast.error('Você precisa estar logado para editar um produto.');
            return;
        }

        try {
            const updatedVestido: Dress = {
                id: vestido.id,
                title: data.title,
                description: data.description,
                size: data.size,
                code: data.code,
                status: data.status,
            };

            await UpdatePopUp(updatedVestido, token);
            onUpdate(updatedVestido);
            toast.success('Produto editado com sucesso!');
            onClose();
            reset();
        } catch (error) {
            toast.error('Erro ao editar o produto: ' + (error instanceof Error ? error.message : "Erro desconhecido"));
        }
    };

    return (
        <PopupContainer>
            <PopupContent>
                <CloseButton onClick={onClose}>X</CloseButton>
                <h2>Editar Vestido</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Label>Nome:</Label>
                    <Input type="text" {...register("title")} />
                    {errors.title && <ErrorMessage style={{ color: "red" }}>{errors.title.message}</ErrorMessage>}

                    <Separator />

                    <Label>Descrição:</Label>
                    <Input type="text" {...register("description")} />
                    {errors.description && <ErrorMessage style={{ color: "red" }}>{errors.description.message}</ErrorMessage>}

                    <Separator />

                    <Label>Tamanho:</Label>
                    <Input type="text" {...register("size")} />
                    {errors.size && <ErrorMessage style={{ color: "red" }}>{errors.size.message}</ErrorMessage>}

                    <Separator />

                    <Label>Código:</Label>
                    <Input type="text" {...register("code")} />
                    {errors.code && <ErrorMessage style={{ color: "red" }}>{errors.code.message}</ErrorMessage>}

                    <Separator />

                    <Label>Status:</Label>
                    <SelectEdit {...register("status")}>
                        <option value="">Selecione um status</option>
                        <option value="disponível">Disponível</option>
                        <option value="indisponível">Indisponível</option>
                    </SelectEdit>

                    <Separator />
                    <AjustButton>

                        <Button type="submit">Salvar</Button>
                    </AjustButton>
                </form>
            </PopupContent>
        </PopupContainer>
    );
}
