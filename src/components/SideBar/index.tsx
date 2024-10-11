import { Container, Pages, Header, Button, Profile } from "./styles";

import { useNavigate, useLocation } from "react-router-dom";
import { useSidebar } from "../../context/hooks/useSidebar";
import close from "../../assets/icons/close.svg"
import Money from "../../assets/icons/money.svg"
import Employess from "../../assets/icons/employees.svg"
import Stock from "../../assets/icons/stock.svg"
import Client from "../../assets/icons/client.svg"

export default function Sidebar() {
    const { toggleSidebar, isCollapsed } = useSidebar();

    const handleCloseSidebar = () => {
        toggleSidebar();
    };

    const navigate = useNavigate();
    const location = useLocation();

    const cpf = location.state?.cpf || localStorage.getItem('cpf') || "Usuário";

    return (
        <Container isCollapsed={isCollapsed}>
            <Header>
                <button onClick={handleCloseSidebar} style={{ background: "transparent", border: "none" }}>
                    <img src={close} alt="" />
                </button>
            </Header>
            <Pages>
                <Button onClick={() => navigate('/funcionarios')} >
                    <img src={Employess} alt=" " height="25px" />
                    <span>Fúncionários</span>
                </Button>
                <Button onClick={() => navigate('/estoque')}>
                    <img src={Stock} alt="" height="25px" />
                    <span>Estoque</span>
                </Button>
                <Button onClick={() => navigate('/aluguel')} >
                    <img src={Money} alt="" height="25px" style={{ marginRight: "0px" }} />
                    <span>Aluguel</span>
                </Button>
                <Button onClick={() => navigate('/cliente')} >
                    <img src={Client} alt=" " height="25px" />
                    <span>Cliente</span>
                </Button>
            </Pages>
            <Profile>
                <img src={Client} alt=" " height="25px" />
                {cpf}
            </Profile>
        </Container >
    );
}