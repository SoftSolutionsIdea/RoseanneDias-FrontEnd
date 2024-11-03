import { PopupContainer, PopupContent, Input, Label, ErrorMessage, AjustButton, Separator, Button, CloseButton } from './styles';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { UpdatePopUp } from '../../service/Client/EditPopUpClientService';
import { toast } from 'react-toastify';
import { Client } from '../../pages/Client/clientType';

const clientSchema = z.object({
    name: z.string().min(1, "Nome é obrigatório"),
    cpf: z.string().length(11, "CPF deve ter exatamente 11 caracteres"),
    tel: z.string().min(1, "Telefone é obrigatório"),
    email: z.string().email("Formato de e-mail inválido"),
    address: z.object({
        num: z.number().min(1, "Número é obrigatório"),
        street: z.string().min(1, "Rua é obrigatória"),
        cep: z.string().min(1, "CEP é obrigatório"),
        complement: z.string().optional(),
    }),
});

type ClientFormData = z.infer<typeof clientSchema>;

interface ClientPopupEditProps {
    client: Client;
    onClose: () => void;
    onUpdate: (updatedClient: Client) => void;
}

export default function ClientPopupEdit({ client, onClose, onUpdate }: ClientPopupEditProps) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<ClientFormData>({
        resolver: zodResolver(clientSchema),
        defaultValues: {
            name: client.name,
            cpf: client.cpf,
            tel: client.tel,
            email: client.email,
            address: {
                num: client.address.num,
                street: client.address.street,
                cep: client.address.cep,
                complement: client.address.complement,
            },
        },
    });

    const onSubmit = async (data: ClientFormData) => {
        const token = localStorage.getItem('access_token');
        if (!token) {
            toast.error('Você precisa estar logado para editar um cliente.');
            return;
        }

        try {
            const updatedClient: Client = {
                id: client.id,
                name: data.name,
                cpf: data.cpf,
                tel: data.tel,
                email: data.email,
                address: {
                    num: data.address.num,
                    street: data.address.street,
                    cep: data.address.cep,
                    complement: data.address.complement,
                },
            };

            console.log('Dados do cliente que está sendo atualizado:', updatedClient);

            await UpdatePopUp(updatedClient, token);
            onUpdate(updatedClient);
            toast.success('Cliente editado com sucesso!');
            onClose();
            reset();
        } catch (error) {
            if (error instanceof Error) {
                toast.error('Erro ao editar o cliente: ' + error.message);
            } else {
                toast.error('Erro desconhecido.');
            }
        }
    };

    return (
        <PopupContainer>
            <PopupContent>
                <CloseButton onClick={onClose}>X</CloseButton>
                <h2>Editar Cliente</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Label>Nome:</Label>
                    <Input type="text" {...register("name")} />
                    {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}

                    <Separator />

                    <Label>CPF:</Label>
                    <Input type="text" {...register("cpf")} />
                    {errors.cpf && <ErrorMessage>{errors.cpf.message}</ErrorMessage>}

                    <Separator />

                    <Label>Telefone:</Label>
                    <Input type="text" {...register("tel")} />
                    {errors.tel && <ErrorMessage>{errors.tel.message}</ErrorMessage>}

                    <Separator />

                    <Label>Email:</Label>
                    <Input type="email" {...register("email")} />
                    {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

                    <Separator />

                    <Label>Número:</Label>
                    <Input type="number" {...register("address.num", { valueAsNumber: true })} />
                    {errors.address?.num && <ErrorMessage>{errors.address.num.message}</ErrorMessage>}

                    <Separator />

                    <Label>Rua:</Label>
                    <Input type="text" {...register("address.street")} />
                    {errors.address?.street && <ErrorMessage>{errors.address.street.message}</ErrorMessage>}

                    <Separator />

                    <Label>CEP:</Label>
                    <Input type="text" {...register("address.cep")} />
                    {errors.address?.cep && <ErrorMessage>{errors.address.cep.message}</ErrorMessage>}

                    <Separator />

                    <Label>Complemento:</Label>
                    <Input type="text" {...register("address.complement")} />
                    {errors.address?.complement && <ErrorMessage>{errors.address.complement.message}</ErrorMessage>}

                    <Separator />

                    <AjustButton>
                        <Button type="submit">Salvar</Button>
                    </AjustButton>
                </form>
            </PopupContent>
        </PopupContainer>
    );
}
