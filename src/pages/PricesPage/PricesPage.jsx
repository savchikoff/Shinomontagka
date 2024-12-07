import TireServiceCalculator from '../../components/TireServiceCalculator/TireServiceCalculator'
import classes from './PricesPage.module.css';

function PricesPage() {
    return (
        <div className={classes.pricesWrapper}>
            <TireServiceCalculator />
        </div>
    )
}

export default PricesPage