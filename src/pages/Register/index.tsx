import { Container, ContainerContent, Header, Body, Footer, ContainerForm, FooterControler } from "./styles";
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import ButtonDown from "../../components/ButtonDownLogin";
import InputLogin from "../../components/InputLogin";
import BackGroundLogin from "../../assets/img/background.svg";
import LogoLogin from "../../assets/img/Logo.svg";
import { toast } from 'react-toastify';
import axios from 'axios';

const pageSchema = z.object({
    name: z.string().min(1, "O nome é obrigatório").regex(/^[A-Za-zÀ-ÿ\s]+$/, "O nome deve conter apenas letras"),
    cpf: z.string().length(11, "O CPF deve ter exatamente 11 dígitos").regex(/^\d+$/, "O CPF deve conter apenas números"),
    happyday: z.string().refine(
        (value) => /^\d{4}-\d{2}-\d{2}$/.test(value),
        "A data de nascimento deve estar no formato YYYY-MM-DD"
    ),
    tell: z
        .number()
        .refine((value) => value.toString().length === 9, {
            message: "O telefone deve conter exatamente 9 dígitos",
        }),
    role: z.string().min(1, "A permissão do usuário é obrigatória"),
    address: z.object({
        num: z
            .number()
            .min(1, "Número é obrigatório"),
        street: z.string().min(1, "Informar a rua é obrigatório"),
        cep: z.string().regex(/^\d{5}-\d{3}$/, "O CEP deve estar no formato XXXXX-XXX"),
        complement: z.string().min(1, "Digite um complemento para sua localidade"),
    })
});

type RegisterFormInputs = z.infer<typeof pageSchema>;

export default function RegisterForm() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormInputs>({
        resolver: zodResolver(pageSchema),
    });

    const onSubmit = async (data: RegisterFormInputs) => {
        try {
            const payload = {
                name: data.name,
                cpf: data.cpf,
                happyday: data.happyday,
                tell: data.tell,
                role: data.role,
                address: {
                    num: data.address.num,
                    street: data.address.street,
                    cep: data.address.cep,
                    complement: data.address.complement,
                },
            };

            await axios.post('https://roseanne-dias-aluguel.onrender.com/register', payload);

            toast.success("Cadastro realizado com sucesso!");
            navigate('/');
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const message = error.response?.data?.message || "Erro sao cadastrar, tente novamente.";


                if (error.response?.data?.statusCode === 409 && error.response?.data?.message.includes("telefone")) {
                    toast.error("Este número de telefone já está cadastrado.");
                } else {
                    toast.error(message);
                }
            } else {
                toast.error("Erro ao cadastrar, tente novamente.");
            }
        }
    };


    return (
        <Container>
            <img src={BackGroundLogin} alt="Fundo do Login" id="container" />
            <ContainerForm onSubmit={handleSubmit(onSubmit)}>
                <ContainerContent>
                    <Header>
                        <img src={LogoLogin} alt="Logo" width={150} id="logo" />
                    </Header>
                    <Body>
                        <label>
                            <h3 style={{ color: "white" }}>Nome</h3>
                            <InputLogin type="text" register={register("name")} id="input" />
                            {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
                        </label>
                        <label>
                            <h3 style={{ color: "white" }}>CPF</h3>
                            <InputLogin type="text" register={register("cpf")} id="input" />
                            {errors.cpf && <p style={{ color: "red" }}>{errors.cpf.message}</p>}
                        </label>
                        <label>
                            <h3 style={{ color: "white" }}>Data de Nascimento</h3>
                            <InputLogin type="date" register={register("happyday")} id="input" />
                            {errors.happyday && <p style={{ color: "red" }}>{errors.happyday.message}</p>}
                        </label>
                        <label>
                            <h3 style={{ color: "white" }}>Telefone</h3>
                            <InputLogin type="phone" register={register("tell", { valueAsNumber: true })} id="input" />
                            {errors.tell && <p style={{ color: "red" }}>{errors.tell.message}</p>}
                        </label>
                        <label>
                            <h3 style={{ color: "white" }}>Permissão</h3>
                            <select {...register("role")} id="input" style={{ padding: "10px" }}>
                                <option value="">Selecione uma permissão</option>
                                <option value="Admin">Admin</option>
                                <option value="User">User</option>
                            </select>
                            {errors.role && <p style={{ color: "red" }}>{errors.role.message}</p>}
                        </label>
                        <label>
                            <h3 style={{ color: "white" }}>Número</h3>
                            <InputLogin type="number" register={register("address.num", { valueAsNumber: true })} id="input" />
                            {errors.address?.num && <p style={{ color: "red" }}>{errors.address.num.message}</p>}
                        </label>
                        <label>
                            <h3 style={{ color: "white" }}>Rua</h3>
                            <InputLogin type="text" register={register("address.street")} id="input" />
                            {errors.address?.street && <p style={{ color: "red" }}>{errors.address.street.message}</p>}
                        </label>
                        <label>
                            <h3 style={{ color: "white" }}>CEP</h3>
                            <InputLogin register={register("address.cep")} id="input" />
                            {errors.address?.cep && <p style={{ color: "red" }}>{errors.address.cep.message}</p>}
                        </label>
                        <label>
                            <h3 style={{ color: "white" }}>Complemento</h3>
                            <InputLogin type="text" register={register("address.complement")} id="input" />
                            {errors.address?.complement && <p style={{ color: "red" }}>{errors.address.complement.message}</p>}
                        </label>
                    </Body>
                    <Footer>
                        <FooterControler>
                            <ButtonDown type="submit" id="button">
                                {/* {loading ? "Processando..." : "Enviar"} */}
                                Enviar
                            </ButtonDown>
                        </FooterControler>
                    </Footer>
                </ContainerContent>
            </ContainerForm>
        </Container>
    );
}
