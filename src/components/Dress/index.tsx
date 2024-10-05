import { InformationDataContainer, Information, Image, InformationContent } from './styles'; // Importe seus estilos
import Trash from "../../assets/icons/trash.svg";
import Pencil from "../../assets/icons/pencil.svg";
import { Dress } from '../../pages/Stock/dressType';

interface InformationDataProps {
    vestido: Dress;
    togglePopup: (action: 'edit') => void;
    onDelete: (id: number) => void;
    onEdit: (vestido: Dress) => void;
}

const InformationData: React.FC<InformationDataProps> = ({ vestido, onDelete, onEdit }) => {
    return (
        <InformationDataContainer>
            {/* <InformationImage> */}
            {/* <img src="" alt="" /> */}
            {/* </InformationImage> */}
            <Information>
                <InformationContent key={vestido.id}>
                    <h3>Titulo: {vestido.title}</h3>
                    <h3>Descrição: {vestido.description}</h3>
                    <h3>Tamanho: {vestido.size}</h3>
                    <h3>Código: {vestido.code}</h3>
                    <h3>Status: {vestido.status}</h3>
                </InformationContent>
                <Image>
                    <img src={Trash} width={20} alt="Delete" onClick={() => onDelete(vestido.id)} />
                    <img src={Pencil} width={20} alt="Edit" onClick={() => onEdit(vestido)} />
                </Image>
            </Information>
        </InformationDataContainer>
    );
};

export default InformationData;
