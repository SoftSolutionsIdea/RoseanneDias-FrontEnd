import { Button, ButtonContainer, PageContainer, ProfileContainer, ProfileImage } from './styles';

import Client from "../../assets/icons/client.svg";
import Employess from "../../assets/icons/employees.svg";
import Money from "../../assets/icons/money.svg";
import Stock from "../../assets/icons/stock.svg";
import profileImageUrl from "../../assets/icons/client.svg";
import { useNavigate, useLocation } from "react-router-dom";


export default function Begininning() {

    const navigate = useNavigate();
    const location = useLocation();

    const cpf = location.state?.cpf || localStorage.getItem('cpf') || "Usuário";

    return (
        <PageContainer>
            <ProfileContainer>
                <ProfileImage src={profileImageUrl} alt="Perfil" />
                {cpf}
            </ProfileContainer>
            <ButtonContainer>
                <Button onClick={() => navigate('/estoque')}>
                    <img src={Stock} alt="Estoque" width="40" height="40" />
                    <span>Estoque</span>
                </Button>
                <Button onClick={() => navigate('/aluguel')}>
                    <img src={Money} alt="Aluguel" width="40" height="40" />
                    <span>Aluguel</span>
                </Button>
                <Button onClick={() => navigate('/cliente')}>
                    <img src={Client} alt="Clientes" width="40" height="40" />
                    <span>Clientes</span>
                </Button>
                <Button onClick={() => navigate('/funcionarios')}>
                    <img src={Employess} alt="Funcionários" width="40" height="40" />
                    <span>Funcionários</span>
                </Button>
            </ButtonContainer>
        </PageContainer>
    );
};
