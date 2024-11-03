import { Container, ContainerContent, ContainerLeft, ContainerRight } from './styles';
import ButtonSearch from '../../components/ButtonSearch';
import Search from '../../components/Search';
import { usePopup } from "../../context/PopUpContext";
import ClientPopup from '../../components/PopUpAddClient';
import InformationData from "../../components/Client";
import { useState, useEffect } from 'react';
import { Client } from "./clientType";
import { toast, ToastContainer } from 'react-toastify';
import { fetchClient } from "../../service/Client/ListPopUpClientService";
import ClientPopupEdit from '../../components/PopUpEditClient';

export default function ClientPage() {
    const { togglePopup, isPopupOpen } = usePopup();
    const [clients, setClients] = useState<Client[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [selectedClient, setSelectedClient] = useState<Client | null>(null);

    const loadClients = async () => {
        const token = localStorage.getItem('access_token');
        if (!token) {
            toast.error('Você precisa estar logado para carregar os clientes.');
            return;
        }

        try {
            const clientData = await fetchClient(token);
            setClients(clientData);
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            toast.error('Erro ao carregar clientes.');
            setClients([]);
        }
    };

    useEffect(() => {
        loadClients();
    }, []);

    const addClient = (newClient: Client) => {
        const clientWithId: Client = {
            ...newClient,
            id: Date.now(),
        };
        setClients((prevClients) => [...prevClients, clientWithId]);
        toast.success('Cliente adicionado com sucesso!');
    };

    const updateClient = (updatedClient: Client) => {
        setClients((prevClients) =>
            prevClients.map((client) =>
                client.id === updatedClient.id ? updatedClient : client
            )
        );
    };

    const handleEditClient = (client: Client) => {
        setSelectedClient(client);
        togglePopup();
    };

    const filteredClients = clients.filter(client =>
        client.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Container>
            <ContainerContent>
                <ContainerLeft>
                    {filteredClients.map((client) => (
                        <InformationData
                            key={client.id}
                            client={client}
                            togglePopup={togglePopup}
                            onEdit={() => handleEditClient(client)}
                        />
                    ))}
                </ContainerLeft>
                <ContainerRight>
                    <Search
                        placeholder="Procure por clientes..."
                        type="text"
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <ButtonSearch onClick={() => togglePopup('addClient')}>
                        Adicionar Cliente
                    </ButtonSearch>
                </ContainerRight>
            </ContainerContent>

            {isPopupOpen && (
                <>
                    <ClientPopup addClient={addClient} />
                    {selectedClient && (
                        <ClientPopupEdit
                            client={selectedClient}
                            onUpdate={updateClient}
                            onClose={() => {
                                setSelectedClient(null);
                                togglePopup();
                            }}
                        />
                    )}
                </>
            )}

            <ToastContainer />
        </Container>
    );
}
