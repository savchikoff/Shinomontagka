import { Spin } from 'antd';
import clsx from 'clsx';
import classes from './Loader.module.css'

function Loader({ isSmall }) {
    return (
        <div className={clsx(classes.loaderContainer, isSmall ? classes.small : undefined)}>
            <Spin size="large" />
        </div>
    )
}

export default Loader