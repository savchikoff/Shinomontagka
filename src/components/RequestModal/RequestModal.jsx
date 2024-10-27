import { Modal } from "antd";

function RequestModal({ open, onCancel }) {
    return (
        <Modal title="Оставьте свою заявку" open={open} onCancel={onCancel} centered>
            <p>Hello</p>
        </Modal>
    )
}

export default RequestModal;