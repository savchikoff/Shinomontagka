import { Typography } from 'antd';
import Loader from '../Loader/Loader';
import { useFetchCSVData } from '../../hooks/useFetchCSVData';
import classes from './ServicesList.module.css';

const { Title } = Typography;


function ServicesList() {
    const [data, loading, error] = useFetchCSVData("https://docs.google.com/spreadsheets/d/e/2PACX-1vRnAlvXcAKFung1YPlTzZghpXifv6ieXqGLV0GYCUhVYtysMMY4F_jBHr3wkJg9V4DXlATqtDFkUtNi/pub?output=csv");

    if (loading) {
        return <Loader />
    }

    if (!data || data.length === 0) {
        return <div>Данных нет</div>;
    }

    return (
        <div className={classes.servicesListWrapper}>
            <Title level={2}>Предоставляемые услуги</Title>
            {
                data.map(service => {
                    const [id, name] = Object.values(service);

                    return <Title level={3} key={id}>{`${id} - ${name}`}</Title>
                })
            }
        </div>
    )
}

export { ServicesList };