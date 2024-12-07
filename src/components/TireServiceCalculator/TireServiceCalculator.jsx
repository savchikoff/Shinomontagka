import { useEffect, useState, useContext } from 'react';
import { Form, Button, Typography, Select } from 'antd';
import Loader from '../Loader/Loader';
import { useFetchCSVData } from '../../hooks/useFetchCSVData';
import { RequestModalContext } from '../../context/RequestModalProvider';

const { Title } = Typography;
const { Option } = Select;

function TireServiceCalculator() {
    const [form] = Form.useForm();
    const [totalCost, setTotalCost] = useState(null);
    const [servicePrices, setServicePrices] = useState([]);

    const { handleModal } = useContext(RequestModalContext);

    const [data, loading, error] = useFetchCSVData("https://docs.google.com/spreadsheets/d/e/2PACX-1vRnAlvXcAKFung1YPlTzZghpXifv6ieXqGLV0GYCUhVYtysMMY4F_jBHr3wkJg9V4DXlATqtDFkUtNi/pub?output=csv");

    const onFinish = (values) => {
        const { serviceTypes } = values;
        let total = 0;

        serviceTypes.forEach((type) => {
            const service = servicePrices.find((service) => service.serviceType === type);
            if (service) {
                total += service.price;
            }
        });

        setTotalCost(total);
    };

    useEffect(() => {
        if (data && data.length > 0) {
            const prices = data.map(service => {
                const [_, name, price] = Object.values(service);

                return ({
                    serviceType: name,
                    price: Number(price)
                });
            });
            setServicePrices(prices);
        }
    }, [data]);

    if (loading) {
        return <Loader />
    }

    return (
        <>
            <Title level={2}>Калькулятор стоимости услуг шиномонтажки</Title>
            <Form form={form} onFinish={onFinish} layout="vertical">
                <Form.Item
                    label="Типы услуг"
                    name="serviceTypes"
                    rules={[{ required: true, message: 'Пожалуйста, выберите хотя бы одну услугу!' }]}
                >
                    <Select mode="multiple" placeholder="Выберите услуги">
                        {servicePrices.map((service) => (
                            <Option key={service.serviceType} value={service.serviceType}>
                                {service.serviceType}
                            </Option>
                        ))}
                    </Select>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Рассчитать
                    </Button>

                    {totalCost ? <Button type="primary" onClick={handleModal}>Подробнее</Button> : null}
                </Form.Item>
            </Form>

            {totalCost !== null && (
                <div>
                    <Title level={4}>Общая стоимость: {totalCost} руб.</Title>
                </div>
            )}
        </>
    );
};

export default TireServiceCalculator;
