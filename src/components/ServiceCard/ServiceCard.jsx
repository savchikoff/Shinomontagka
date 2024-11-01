import classes from './ServiceCard.module.css';
import { Typography, Button } from 'antd';
import { clsx } from 'clsx';

const { Title, Text } = Typography;

function ServiceCard({ id, subheader, header, description, price, detailsLink, serviceImg, alt }) {
    const isReverse = id % 2 === 0;

    return (
        <article className={clsx(classes.serviceCardWrapper, isReverse && classes.reverse)}>
            <div className={classes.serviceCardLeft}>
                <div className={classes.serviceCardLeftWrapper}>
                    <Title level={5}>{subheader}</Title>
                    <Title level={1}>{header}</Title>
                    <Text className={classes.textInfo}>{description}</Text>
                    <Title level={4} className={classes.textInfo}>{price} BYN</Title>
                    <div className={classes.buttons}>
                        <Button type="primary">Заказать</Button>
                        <Button>Подробности</Button>
                    </div>
                </div>
            </div>
            <div className={classes.serviceCardRight}>
                <img src={serviceImg} alt={alt} className={classes.serviceImg} />
            </div>
        </article>
    )
}

export default ServiceCard;