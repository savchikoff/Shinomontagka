import { Modal, Form, Input, } from "antd";

function RequestModal({ open, onCancel }) {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        alert(values);
    }

    const onFinishFailed = (errorInfo) => {
        console.error('Form submission failed', errorInfo);
    }

    return (
        <Modal title="Оставить заявку" open={open} onCancel={onCancel} onOk={() => form.submit()} centered>
            <Form
                form={form}
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Ваше имя:"
                    name="name"
                    rules={[{ required: true, message: 'Пожалуйста введите ваше имя!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Телефон:"
                    name="phone"
                    rules={[{ required: true, message: 'Пожалуйста введите ваш телефон!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="E-mail:"
                    name="email"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Услуга:"
                    name="service"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Cообщение:"
                    name="message"
                >
                    <Input.TextArea rows={4} />
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default RequestModal;