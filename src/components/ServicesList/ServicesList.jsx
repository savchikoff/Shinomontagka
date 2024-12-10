import { useSelector } from 'react-redux';
import { Typography, List, Card, Row, Col } from 'antd';
import Loader from '../Loader/Loader';
import classes from './ServicesList.module.css';
import EmptyView from '../EmptyView/EmptyView';

const { Title, Text } = Typography;

function ServicesList() {
    const { data, loading } = useSelector((state) => state.services);

    if (loading) {
        return <Loader isSmall />;
    }

    if (!data || data.length === 0) {
        return <EmptyView description={"К сожалению данные об услугах отсутствуют! Возвращайтесь позже или позвоните по контактному номеру :)"} />;
    }

    return (
        <div className={classes.servicesListWrapper}>
            <Title level={2}>Предоставляемые услуги</Title>
            <Row gutter={[16, 16]}>
                {data.map(service => {
                    const [id, name] = Object.values(service);

                    return (
                        <Col xs={24} sm={12} md={8} lg={6} key={id}>
                            <Card hoverable className={classes.serviceCard}>
                                <Title level={4}>{name}</Title>
                                <Text type="secondary">{`ID: ${id}`}</Text>
                            </Card>
                        </Col>
                    );
                })}
            </Row>
        </div>
    );
}

export { ServicesList };
