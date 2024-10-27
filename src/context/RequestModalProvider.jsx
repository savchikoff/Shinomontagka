import { createContext, useState } from "react";
import RequestModal from "../components/RequestModal/RequestModal";

export const RequestModalContext = createContext({});

function RequestModalProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleModal = () => {
        setIsOpen(!isOpen);
    }

    return (
        <RequestModalContext.Provider value={{ handleModal, isOpen }}>
            {children}
            <RequestModal open={isOpen} onCancel={handleModal} />
        </RequestModalContext.Provider>
    )
}

export default RequestModalProvider;