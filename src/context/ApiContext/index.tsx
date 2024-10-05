// src/context/FormContext.tsx
import { createContext, useState, ReactNode } from 'react';

interface FormData {
    nome: string;
    cpf: string;
    nascimento: string;
    celular: string;
    rua: string;
    numero: string;
    complemento: string;
    cep: string;
}

interface FormContextType {
    formData: FormData;
    updateFormData: (newData: Partial<FormData>) => void;
}

export const FormContext = createContext<FormContextType | undefined>(undefined);

export function FormProvider({ children }: { children: ReactNode }) {
    const [formData, setFormData] = useState<FormData>({
        nome: '',
        cpf: '',
        nascimento: '',
        celular: '',
        rua: '',
        numero: '',
        complemento: '',
        cep: ''
    });

    function updateFormData(newData: Partial<FormData>) {
        setFormData(prev => ({ ...prev, ...newData }));
    }

    return (
        <FormContext.Provider value={{ formData, updateFormData }}>
            {children}
        </FormContext.Provider>
    );
}
