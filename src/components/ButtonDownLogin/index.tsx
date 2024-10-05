import { Button } from "./styles"

export interface ButtonProps {
    children: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    id?: string;
}

export default function ButtonDown({ children, onClick, disabled, type, id }: ButtonProps) {
    return (
        <Button onClick={onClick} type={type} disabled={disabled} id={id}>
            {children}
        </Button>
    )
}