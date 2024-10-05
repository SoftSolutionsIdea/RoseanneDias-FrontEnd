import { Input } from "./styles"

import { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export interface InputLoginProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
    type?: string;
    register?: UseFormRegisterReturn;
}

export default function InputLogin({ placeholder, type = "text", register }: InputLoginProps) {
    return (
        <Input placeholder={placeholder} type={type} {...register} />
    )
}