import { useContext } from "react";
import { Divider, Typography, Button } from "antd";
import { RequestModalContext } from "../../context/RequestModalProvider";
import classes from './RequestSection.module.css';

const { Title, Text } = Typography;

function RequestSection() {
    const { handleModal } = useContext(RequestModalContext);

    return (
        <section className={classes.requestSectionContainer}>
            <Divider orientation="center">Контакты</Divider>
            <div className={classes.requestSectionWrapper}>
                <Title level={1}>Оставьте заявку</Title>
                <Text className={classes.requestTextWrapper}>
                    Заявки с сайта принимаются круглосуточно. С 09:00 до 21:00 по будним дням можно оформить заявку по телефону: +375 (25) 918-08-08.
                </Text>
                <Button type="primary" onClick={handleModal}>Подробнее</Button>
            </div>
        </section>
    )
}

export default RequestSection;