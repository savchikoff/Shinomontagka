import { useSelector } from 'react-redux';
import { Typography } from 'antd';
import Skeleton from 'react-loading-skeleton';
import { useMediaQuery } from 'react-responsive';
import ServiceCard from '../ServiceCard/ServiceCard';
import classes from './ServicesSection.module.css';

const { Title, Text } = Typography;

function ServicesSection() {
    const { data, loading } = useSelector((state) => state.services);
    const isSmallScreen = useMediaQuery({ query: "(max-width: 920px)" });

    return (
        <section className={classes.servicesSectionWrapper}>
            <div className={classes.servicesSectionTextWrapper}>
                <Title level={2}>Услуги</Title>
                <Text>Если нужно качественное оказание услуг шиномонтажа, звоните по телефону: +375259183528.</Text>
            </div>

            <div className={classes.serviceCards}>
                {loading ? <Skeleton height={isSmallScreen ? 520 : 400} /> : null}
                {
                    data.map(service => {
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