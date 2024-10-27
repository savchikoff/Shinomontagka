import { Outlet } from 'react-router-dom';
import classes from './PagesContainer.module.css'

function PagesContainer() {
    return (
        <div className={classes.container}>
            <Outlet />
        </div>
    )
}

export default PagesContainer