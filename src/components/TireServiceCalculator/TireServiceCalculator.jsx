import { useEffect, useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button, Typography, Select } from 'antd';
import Loader from '../Loader/Loader';
import { RequestModalContext } from '../../context/RequestModalProvider';
import { addSelectedService, removeSelectedService } from '../../redux/actionCreators/selectedServicesActionCreators';
import { selectSelectedServices } from '../../redux/selectors/servicesSelectors';
import classes from "./TireServiceCalculator.module.css";

const { Title } = Typography;
const { Option } = Select;

function TireServiceCalculator() {
    const [form] = Form.useForm();
    const [totalCost, setTotalCost] = useState(null);
    const [servicePrices, setServicePrices] = useState([]);

    const { handleModal } = useContext(RequestModalContext);

    const dispatch = useDispatch();
    const { data, loading } = useSelector((state) => state.services);
    const selectedServices = useSelector(selectSelectedServices);

    console.log(selectedServices);


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

    const handleServiceChange = (selected) => {
        const addedServices = selected.filter((service) => !selectedServices.includes(service));
        const removedServices = selectedServices.filter((service) => !selected.includes(service));

        console.log(addedServices);

        addedServices.forEach((service) => {
            dispatch(addSelectedService(service));
        });
        removedServices.forEach((service) => {
            dispatch(removeSelectedService(service));
        });
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
            <Form form={form} onFinish={onFinish} layout="vertical" className={classes.form}>
                <Form.Item
                    label="Типы услуг"
                    name="serviceTypes"
                    rules={[{ required: true, message: 'Пожалуйста, выберите хотя бы одну услугу!' }]}
                >
                    <Select mode="multiple" placeholder="Выберите услуги" onChange={handleServiceChange}>
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
