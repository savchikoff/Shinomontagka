import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Form, Input, Select } from "antd";
import { toast } from 'react-toastify';
import { RequestModalContext } from '../../context/RequestModalProvider';
import { selectAllServices, selectSelectedServices } from '../../redux/selectors/servicesSelectors';
import { addSelectedService, removeSelectedService, clearSelectedServices } from '../../redux/actionCreators/selectedServicesActionCreators';
import { sendEmailRequest } from '../../redux/actionCreators/emailRequestActionCreators';
import { emailRequestIsLoadingSelector, emailRequestIsSuccessSelector, emailRequestErrorSelector } from '../../redux/selectors/emailRequestSelectors';

const { Option } = Select;

function RequestModal({ open, onCancel }) {
    const [form] = Form.useForm();
    const { handleModal } = useContext(RequestModalContext);

    const dispatch = useDispatch();

    const services = useSelector(selectAllServices);
    const selectedServices = useSelector(selectSelectedServices);
    const isEmailRequestLoading = useSelector(emailRequestIsLoadingSelector);
    const isEmailRequestSuccess = useSelector(emailRequestIsSuccessSelector);
    const emailRequestError = useSelector(emailRequestErrorSelector);

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

    const onFinish = async (values) => {
        const transformedValues = {
            ...values,
            service: values.serviceTypes.join(', '),
        };
        dispatch(sendEmailRequest(transformedValues));
    };

    const onFinishFailed = () => {
        notify(true);
    };

    const handleServiceChange = (selected) => {
        const addedServices = selected.filter((service) => !selectedServices.includes(service));
        const removedServices = selectedServices.filter((service) => !selected.includes(service));

        addedServices.forEach((service) => {
            dispatch(addSelectedService(service));
        });
        removedServices.forEach((service) => {
            dispatch(removeSelectedService(service));
        });
    };

    useEffect(() => {
        if (isEmailRequestSuccess) {
            notify(false);
            form.resetFields();
            handleModal();
        } else if (emailRequestError) {
            notify(true);
        }
    }, [isEmailRequestSuccess, emailRequestError]);

    return (
        <Modal
            title="Оставить заявку"
            open={open}
            onCancel={onCancel}
            onOk={() => form.submit()}
            centered
            okButtonProps={{ loading: isEmailRequestLoading, disabled: isEmailRequestLoading }}
        >
            <Form
                form={form}
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true, serviceTypes: selectedServices }}
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
                    rules={[{ required: true, message: 'Пожалуйста введите вашу почту!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Услуга:"
                    name="serviceTypes"
                    rules={[{ required: true, message: 'Пожалуйста выберите хотя бы одну услугу!' }]}
                >
                    <Select
                        mode="multiple"
                        placeholder="Выберите услуги"
                        onChange={handleServiceChange}
                    >
                        {services.map(service => {
                            const [id, name] = Object.values(service);

                            return (
                                <Option key={id} value={name}>
                                    {name}
                                </Option>
                            )
                        })}
                    </Select>
                </Form.Item>
                <Form.Item
                    label="Cообщение:"
                    name="message"
                >
                    <Input.TextArea rows={4} />
                </Form.Item>
            </Form>
        </Modal>
    );
}

export default RequestModal;
