import { Container, ContainerContent, Header, Body, Footer, ContainerForm, FooterControler } from "./styles";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import BackGroundLogin from "../../assets/img/background.svg";
import LogoLogin from "../../assets/img/Logo.svg";

import ButtonDown from "../../components/ButtonDownLogin";
import InputLogin from "../../components/InputLogin";

import { useAuth } from '../../context/AuthContext';
import { toast } from 'react-toastify';
import { loginRequest } from '../../service/LoginService';

const loginSchema = z.object({
    cpf: z.string().length(11, "Digite seu CPF corretamente"),
    happyday: z.string().min(5, "Digite sua data corretamente"),
});

type LoginFormInputs = z.infer<typeof loginSchema>;

export default function Login() {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormInputs>({
        resolver: zodResolver(loginSchema),
    });


    const onSubmit = async (data: LoginFormInputs) => {
        let toastId: string | number | undefined;

        try {
            setLoading(true);
            toastId = toast.loading("Processando login...");

            const response = await loginRequest(data.cpf, data.happyday);
            if (response && response.access_token) {
                localStorage.setItem('access_token', response.access_token);

                toast.update(toastId, {
                    render: "Login bem-sucedido!",
                    type: "success",
                    isLoading: false,
                    autoClose: 2000,
                    hideProgressBar: false,
                    theme: "colored",
                    style: { backgroundColor: '#faca39' },
                });

                login();
                navigate('/comeco');
            } else {
                toast.update(toastId, {
                    render: "Erro no login. Tente novamente.",
                    type: "error",
                    isLoading: false,
                    autoClose: 2000,
                });
                toast.error("Token não encontrado na resposta.");
            }
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            if (toastId) {
                toast.update(toastId, {
                    render: "Erro no processo de login.",
                    type: "error",
                    isLoading: false,
                    autoClose: 2000,
                });
            }
            toast.error("Erro no processo de login");
        } finally {
            setLoading(false);
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
                            <h3 style={{ color: "white" }}>CPF</h3>
                            <InputLogin type="text" register={register("cpf")} id="input" />
                            {errors.cpf && <p style={{ color: "red" }}>{errors.cpf.message}</p>}
                        </label>
                        <label>
                            <h3 style={{ color: "white" }}>Senha</h3>
                            <InputLogin type="date" register={register("happyday")} id="input" />
                            {errors.happyday && <p style={{ color: "red" }}>{errors.happyday.message}</p>}
                        </label>
                    </Body>
                    <Footer>
                        <FooterControler>
                            <ButtonDown type="submit" disabled={loading} id="button">
                                {/* {loading ? "Entrando..." : "Entrar"} */}
                                Entrar
                            </ButtonDown>
                            <ButtonDown type="button" onClick={() => navigate("/cadastro")} id="button">
                                Cadastrar-se
                            </ButtonDown>
                        </FooterControler>
                    </Footer>
                </ContainerContent>
            </ContainerForm>
        </Container>
    );
}
