import { createContext, useContext, useState, ReactNode } from 'react';

type PopupType = 'add' | 'edit' | null;

interface PopupContextType {
    isPopupOpen: boolean;
    popupType: PopupType;

    togglePopup: (type?: PopupType) => void;
}

const PopupContext = createContext<PopupContextType | undefined>(undefined);

export const PopupProvider = ({ children }: { children: ReactNode }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [popupType, setPopupType] = useState<PopupType>(null);

    const togglePopup = (type?: PopupType) => {
        if (type) {
            setPopupType(type);
        }
        setIsPopupOpen((prev) => !prev);
    };

    return (
        <PopupContext.Provider value={{ isPopupOpen, togglePopup, popupType }}>
            {children}
        </PopupContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const usePopup = () => {
    const context = useContext(PopupContext);
    if (!context) {
        throw new Error("usePopup deve ser usado dentro de um PopupProvider");
    }
    return context;
};
