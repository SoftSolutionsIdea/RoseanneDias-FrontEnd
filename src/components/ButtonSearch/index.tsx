import { Button } from "./styles";

export interface ButtonProps {
    onClick?: () => void;
    children: string;
}

export default function buttonSearch({ onClick, children }: ButtonProps) {
    return (
        <Button onClick={onClick}>
            {children}
        </Button>
    )
}

