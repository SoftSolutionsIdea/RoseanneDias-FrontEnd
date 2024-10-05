import { InputContainer, InputStyled, Icon } from "./styles";
import Bloom from "../../assets/icons/search.svg";

export interface InputProps {
    placeholder?: string;
    type?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Search({ placeholder, type, onChange }: InputProps) {
    return (
        <InputContainer>
            <Icon src={Bloom} alt="Bloom" />
            <InputStyled placeholder={placeholder} type={type} onChange={onChange} />
        </InputContainer>
    );
}
