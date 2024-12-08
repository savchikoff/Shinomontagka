import { ServicesList } from '../../components/ServicesList/ServicesList'
import classes from "./ServicesPage.module.css";

function ServicesPage() {
    return (
        <div className={classes.servicesWrapper}>
            <ServicesList />
        </div>
    )
}

export default ServicesPage