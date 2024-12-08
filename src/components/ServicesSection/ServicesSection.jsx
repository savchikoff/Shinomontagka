import { useSelector } from 'react-redux';
import { Typography } from 'antd';
import classes from './ServicesSection.module.css';
import ServiceCard from '../ServiceCard/ServiceCard';
import { selectAllServices } from '../../redux/selectors/servicesSelectors';

const { Title, Text } = Typography;

function ServicesSection() {
    const services = useSelector(selectAllServices)

    return (
        <section className={classes.servicesSectionWrapper}>
            <div className={classes.servicesSectionTextWrapper}>
                <Title level={2}>Услуги</Title>
                <Text>Если нужно качественное оказание услуг шиномонтажа, звоните по телефону: +375 (25) 918-08-08.</Text>
            </div>

            <div className={classes.serviceCards}>

                {
                    services.map(service => {
                        const [id, name, price] = Object.values(service);

                        return (
                            <ServiceCard key={id} id={id} price={price} header={name} />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default ServicesSection;