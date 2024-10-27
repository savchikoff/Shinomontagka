import { Typography } from 'antd';
import classes from './ServicesSection.module.css';
import ServiceCard from '../ServiceCard/ServiceCard';
import { SERVICES } from '../../constants/services';

const { Title, Text } = Typography;

function ServicesSection() {
    return (
        <section className={classes.servicesSectionWrapper}>
            <div className={classes.servicesSectionTextWrapper}>
                <Title level={2}>Услуги</Title>
                <Text>Если нужно качественное оказание услуг шиномонтажа, звоните по телефону: +375 (25) 918-08-08.</Text>
            </div>

            <div className={classes.serviceCards}>
                {SERVICES.map(service => (<ServiceCard key={service.id} {...service} />))}
            </div>
        </section>
    )
}

export default ServicesSection;