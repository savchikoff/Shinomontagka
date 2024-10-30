import { useState } from 'react';
import { Form, InputNumber, Button, Typography } from 'antd';

const { Title } = Typography;

function TireServiceCalculator() {
    const [form] = Form.useForm();
    const [totalCost, setTotalCost] = useState(null);

    const onFinish = (values) => {
        const { tireCount, serviceType } = values;
        let costPerTire = 0;

        switch (serviceType) {
            case 'mounting':
                costPerTire = 10; // Примерная стоимость монтажа
                break;
            case 'balancing':
                costPerTire = 5; // Примерная стоимость балансировки
                break;
            case 'repair':
                costPerTire = 15; // Примерная стоимость ремонта
                break;
            default:
                break;
        }

        const total = tireCount * costPerTire;
        setTotalCost(total);
    };

    return (
        <>
            <Title level={2}>Калькулятор стоимости услуг шиномонтажки</Title>
            <Form form={form} onFinish={onFinish} layout="vertical">
                <Form.Item
                    label="Количество шин"
                    name="tireCount"
                    rules={[{ required: true, message: 'Пожалуйста, введите количество шин!' }]}
                >
                    <InputNumber min={1} />
                </Form.Item>

                <Form.Item
                    label="Тип услуги"
                    name="serviceType"
                    rules={[{ required: true, message: 'Пожалуйста, выберите тип услуги!' }]}
                >
                    <select>
                        <option value="mounting">Монтаж</option>
                        <option value="balancing">Балансировка</option>
                        <option value="repair">Ремонт</option>
                    </select>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Рассчитать
                    </Button>
                </Form.Item>
            </Form>

            {totalCost ? (
                <div>
                    <Title level={4}>Общая стоимость: {totalCost} руб.</Title>
                </div>
            ) : null}
        </>
    );
};

export default TireServiceCalculator;