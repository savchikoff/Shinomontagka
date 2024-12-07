import { useState } from 'react';
import { Modal, Form, Input, } from "antd";
import { toast } from 'react-toastify';
import { EmailParams, MailerSend, Recipient, Sender } from "mailersend";

function RequestModal({ open, onCancel }) {
    const [form] = Form.useForm();
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const mailerSend = new MailerSend({
        apiKey: "mlsn.d5a8a4df884696b633b731c89431e9ddeae7ed4a0c19a0ccfe8c6e7ab49d331b"
    });

    const notify = (isError) => {
        const message = isError
            ? 'Что-то пошло не так! Свяжитесь с администратором'
            : 'Ваша заявка успешно отправлена! Ожидайте';

        const notifyMethod = isError ? toast.error : toast.success;

        notifyMethod(message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    };

    const onFinish = (values) => {
        const emailHtml = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Request Details</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    line-height: 1.6;
                    margin: 20px;
                }
                table {
                    width: 100%;
                    border-collapse: collapse;
                    margin: 20px 0;
                }
                th, td {
                    text-align: left;
                    padding: 8px;
                    border: 1px solid #ddd;
                }
                th {
                    background-color: #f4f4f4;
                }
            </style>
        </head>
        <body>
            <h2>Новая заявка</h2>
            <p>Вы получили новую заявку с формы:</p>
            <table>
                <tr>
                    <th>Поле</th>
                    <th>Значение</th>
                </tr>
                <tr>
                    <td>Ваше имя</td>
                    <td>${values.name || 'Не указано'}</td>
                </tr>
                <tr>
                    <td>Телефон</td>
                    <td>${values.phone || 'Не указано'}</td>
                </tr>
                <tr>
                    <td>E-mail</td>
                    <td>${values.email || 'Не указано'}</td>
                </tr>
                <tr>
                    <td>Услуга</td>
                    <td>${values.service || 'Не указано'}</td>
                </tr>
                <tr>
                    <td>Сообщение</td>
                    <td>${values.message || 'Не указано'}</td>
                </tr>
            </table>
            <p>Пожалуйста, свяжитесь с клиентом в ближайшее время.</p>
        </body>
        </html>
        `;

        const sentFrom = new Sender("MS_BAKI6l@trial-x2p03476n3pgzdrn.mlsender.net", `${values.email}`);
        const recipients = [
            new Recipient("savchik.official@gmail.com", "Your Client")
        ];
        const emailParams = new EmailParams()
            .setFrom(sentFrom)
            .setTo(recipients)
            .setSubject("Новая заявка на обслуживание!")
            .setHtml(emailHtml);

        mailerSend.email.send(emailParams).then(() => {
            notify();
        }).catch(() => {
            notify();
        });
    };


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