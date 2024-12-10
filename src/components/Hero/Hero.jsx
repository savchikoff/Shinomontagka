import { useContext } from 'react';
import { Typography, Button } from 'antd';
import { useMediaQuery } from 'react-responsive';
import { RequestModalContext } from '../../context/RequestModalProvider';
import classes from './Hero.module.css';

const { Title, Text } = Typography;

function Hero() {
    const { handleModal } = useContext(RequestModalContext);

    const isSmallScreen = useMediaQuery({ query: "(max-width: 920px)" });

    return (
        <div className={classes.heroContainer}>
            <div className={classes.heroWrapper}>
                <Title level={5}>Шиномонтаж в Фаниполе</Title>
                <Title level={isSmallScreen ? 3 : 1}>Оперативный ремонт бескамерных и камерных шин, профессиональное подкуривание автомобиля и надежная поддержка на дороге в любых ситуациях!</Title>
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