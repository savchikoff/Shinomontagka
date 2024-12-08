import { useContext } from 'react';
import classes from './Hero.module.css';
import { Typography, Button } from 'antd';
import { RequestModalContext } from '../../context/RequestModalProvider';

const { Title, Text } = Typography;

function Hero() {
    const { handleModal } = useContext(RequestModalContext);

    return (
        <div className={classes.heroContainer}>
            <div className={classes.heroWrapper}>
                <Title level={5}>Шиномонтаж в Фаниполе</Title>
                <Title level={1}>Качественный шиномонтаж по доступным ценам в Фаниполе.</Title>
                <Text className={classes.textInfo}>Время работы: с 9:00 до 21:00</Text>
                <div className={classes.buttons}>
                    <Button onClick={handleModal} type="primary">Подробнее</Button>
                    <Button onClick={handleModal}>Заявка</Button>
                </div>
            </div>
        </div>
    )
}

export default Hero