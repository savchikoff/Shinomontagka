import { Spin } from 'antd';
import classes from './Loader.module.css'

function Loader() {
    return (
        <div className={classes.loaderContainer}>
            <Spin size="large" />
        </div>
    )
}

export default Loader