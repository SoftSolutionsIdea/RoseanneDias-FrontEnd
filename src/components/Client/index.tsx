import { InformationDataContainer, Information, Image, InformationContent } from './styles';
import Pencil from "../../assets/icons/pencil.svg";
import { Client } from '../../pages/Client/clientType';

interface InformationDataProps {
    client: Client;
    togglePopup: (action: 'editClient') => void;
    onEdit: (client: Client) => void;
}

const InformationDataClient: React.FC<InformationDataProps> = ({ client, onEdit }) => {
    return (
        <InformationDataContainer>
            <Information>
                <InformationContent key={client.id}>
                    <h3>Nome: {client.name}</h3>
                    <h3>CPF: {client.cpf}</h3>
                    <h3>Telefone: {client.tel}</h3>
                    <h3>Email: {client.email}</h3>
                    <p>Número: {client.address.num}</p>
                    <p>Rua: {client.address.street}</p>
                    <p>CEP: {client.address.cep}</p>
                    {client.address.complement && <p>Complemento: {client.address.complement}</p>}
                </InformationContent>
                <Image>
                    <img src={Pencil} width={20} alt="Edit" onClick={() => onEdit(client)} />
                </Image>
            </Information>
        </InformationDataContainer>
    );
};

export default InformationDataClient;
