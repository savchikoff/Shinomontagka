import { useSelector } from 'react-redux';
import { Typography } from 'antd';
import Loader from '../Loader/Loader';
import classes from './ServicesList.module.css';
import EmptyView from '../EmptyView/EmptyView';

const { Title } = Typography;


function ServicesList() {
    const { data, loading } = useSelector((state) => state.services);

    if (loading) {
        return <Loader />
    }

    if (!data || data.length === 0) {
        return <EmptyView description={"К сожалению данные об услугах отсутствуют! Возвращайтесь позже или позвоните по контактному номеру :)"} />;
    }

    return (
        <div className={classes.servicesListWrapper}>
            <Title level={2}>Предоставляемые услуги</Title>
            {
                data.map(service => {
                    const [id, name] = Object.values(service);

                    return <Title level={3} key={id}>{`${id} - ${name}`}</Title>
                }
                )
            }
        </div>
    )
}

export { ServicesList };