import { Container, ContainerContent, ContainerLeft, ContainerRight } from './styles';
import ButtonSearch from '../../components/ButtonSearch';
import Search from '../../components/Search';
// import { usePopup } from "../../context/PopUpContext";
// import DressPopup from '../../components/PopUpAdd';
// import InformationData from "../../components/Dress";
// import { useState, useEffect } from 'react';
// import { Dress } from "./dressType";
// import { toast, ToastContainer } from 'react-toastify';
// import { deleteVestido } from "../../service/DeletePopUpService";
// import { fetchVestidos } from "../../service/ListPopUpService";
// import DressPopupEdit from '../../components/PopUpEdit';

export default function Client() {
    // const { togglePopup, isPopupOpen } = usePopup();
    // const [vestidos, setVestidos] = useState<Dress[]>([]);
    // const [searchTerm, setSearchTerm] = useState<string>('');
    // const [selectedVestido, setSelectedVestido] = useState<Dress | null>(null);

    // const loadVestidos = async () => {
    //     const token = localStorage.getItem('access_token');
    //     if (!token) {
    //         toast.error('Você precisa estar logado para carregar os vestidos.');
    //         return;
    //     }

    //     try {
    //         const vestidosData = await fetchVestidos(token);
    //         setVestidos(vestidosData);
    //         // eslint-disable-next-line @typescript-eslint/no-unused-vars
    //     } catch (error) {
    //         toast.error('Erro ao carregar vestidos.');
    //         setVestidos([]);
    //     }
    // };

    // useEffect(() => {
    //     loadVestidos();
    // }, []);

    // const addVestido = (novoVestido: Dress) => {
    //     setVestidos((prevVestidos) => [...prevVestidos, novoVestido]);
    // };

    // const updateVestido = (updatedVestido: Dress) => {
    //     setVestidos((prevVestidos) =>
    //         prevVestidos.map((vestido) =>
    //             vestido.id === updatedVestido.id ? updatedVestido : vestido
    //         )
    //     );
    // };

    // const handleEditVestido = (vestido: Dress) => {
    //     setSelectedVestido(vestido);
    //     togglePopup();
    // };

    // const removeVestido = async (id: number) => {
    //     try {
    //         await deleteVestido(id);
    //         setVestidos((prevVestidos) => prevVestidos.filter((vestido) => vestido.id !== id));
    //         toast.success('Vestido removido com sucesso!');
    //         // eslint-disable-next-line @typescript-eslint/no-unused-vars
    //     } catch (error) {
    //         toast.error('Erro ao remover vestido.');
    //     }
    // };

    // const filteredVestidos = vestidos.filter(vestido =>
    //     vestido.title.toLowerCase().includes(searchTerm.toLowerCase())
    // );

    // const vestidosOrdenados = searchTerm
    //     ? [...filteredVestidos, ...vestidos.filter(vestido => !vestido.title.toLowerCase().includes(searchTerm.toLowerCase()))]
    //     : vestidos;

    return (
        <Container>
            <ContainerContent>
                <ContainerLeft>
                    {/* {vestidosOrdenados.map((vestido) => (
                            <InformationData
                                key={vestido.id}
                                vestido={vestido}
                                togglePopup={togglePopup}
                                onDelete={removeVestido}
                                onEdit={() => handleEditVestido(vestido)}
                            />
                        ))} */}
                </ContainerLeft>
                <ContainerRight>

                    <Search
                        placeholder="Procure por vestidos..."
                        type="text"
                    // onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <ButtonSearch >
                        {/* onClick={() => togglePopup('add')} */}
                        Adicionar Vestido
                    </ButtonSearch>
                </ContainerRight>
            </ContainerContent>

            {/* {isPopupOpen && (
                    <>
                        <DressPopup addVestido={addVestido} />
                        {selectedVestido && (
                            <DressPopupEdit
                                vestido={selectedVestido}
                                onUpdate={updateVestido}
                                onClose={() => {
                                    setSelectedVestido(null);
                                    togglePopup();
                                }}
                            />
                        )}
                    </>
                )} */}

            {/* <ToastContainer /> */}
        </Container>
    );
}
