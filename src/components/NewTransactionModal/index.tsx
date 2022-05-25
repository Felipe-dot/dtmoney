import Modal, { Props } from "react-modal";

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: Props) {
    return(
        <Modal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        >
          <h2>Cadastrar transação</h2>
     </Modal>
    );
}