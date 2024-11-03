import { PopupContainer, PopupContent, Input, Label, Separator, AjustButton, Button, CloseButton, ErrorMessage } from './styles';
import { usePopup } from "../../context/PopUpContext";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from 'react-toastify';
import { Client } from "../../pages/Client/clientType";

const clientSchema = z.object({
    name: z.string().min(1, "Nome é obrigatório"),
    cpf: z.string().length(11, "CPF deve ter 11 dígitos"),
    tel: z.string().min(10, "Telefone é obrigatório"),
    email: z.string().email("Email inválido"),
    address: z.object({
        num: z.number().positive("Número é obrigatório"),
        street: z.string().min(1, "Rua é obrigatória"),
        cep: z.string().length(9, "CEP deve ter 8 dígitos com hífen"),
        complement: z.string().optional(),
    })
});

type ClientFormData = z.infer<typeof clientSchema>;

interface ClientPopupAddProps {
    addClient: (newClient: Client) => void;
}

export default function ClientPopupAdd({ addClient }: ClientPopupAddProps) {
    const { togglePopup } = usePopup();
    const { register, handleSubmit, formState: { errors }, reset } = useForm<ClientFormData>({
        resolver: zodResolver(clientSchema)
    });

    const onSubmit = async (data: ClientFormData) => {
        const newClient: Client = {
            ...data,
            id: Date.now(),
        };
        addClient(newClient);
        toast.success('Cliente criado com sucesso!');
        togglePopup();
        reset();
    };

    return (
        <PopupContainer>
            <PopupContent>
                <CloseButton onClick={() => togglePopup()}>X</CloseButton>
                <h2>Adicionar Cliente</h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <Label>Nome:</Label>
                    <Input type="text" placeholder="Nome" {...register("name")} />
                    {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}

                    <Separator />

                    <Label>CPF:</Label>
                    <Input type="text" placeholder="CPF" {...register("cpf")} />
                    {errors.cpf && <ErrorMessage>{errors.cpf.message}</ErrorMessage>}

                    <Separator />

                    <Label>Telefone:</Label>
                    <Input type="text" placeholder="Telefone" {...register("tel")} />
                    {errors.tel && <ErrorMessage>{errors.tel.message}</ErrorMessage>}

                    <Separator />

                    <Label>Email:</Label>
                    <Input type="email" placeholder="Email" {...register("email")} />
                    {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

                    <Separator />

                    <h3>Endereço</h3>

                    <Label>Número:</Label>
                    <Input type="number" placeholder="Número" {...register("address.num", { valueAsNumber: true })} />
                    {errors.address?.num && <ErrorMessage>{errors.address.num.message}</ErrorMessage>}

                    <Separator />

                    <Label>Rua:</Label>
                    <Input type="text" placeholder="Rua" {...register("address.street")} />
                    {errors.address?.street && <ErrorMessage>{errors.address.street.message}</ErrorMessage>}

                    <Separator />

                    <Label>CEP:</Label>
                    <Input type="text" placeholder="CEP" {...register("address.cep")} />
                    {errors.address?.cep && <ErrorMessage>{errors.address.cep.message}</ErrorMessage>}

                    <Separator />

                    <Label>Complemento:</Label>
                    <Input type="text" placeholder="Complemento" {...register("address.complement")} />

                    <Separator />

                    <AjustButton>
                        <Button type="submit">Salvar</Button>
                    </AjustButton>
                </form>
            </PopupContent>
        </PopupContainer>
    );
}
