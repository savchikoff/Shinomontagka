import { NavLink } from 'react-router-dom';
import { NAVIGATION } from '../../constants/navigation';
import { PATH_TO_PAGE_NAME } from '../../constants/pathToPageName';
import classes from './Navbar.module.css';

function Navbar() {
    return (
        <div className={classes.navbarItems}>
            {NAVIGATION[0].children.map(({ path }, index) =>
                <NavLink to={path} key={index} className={({ isActive }) => [classes.navbarItem, isActive ? classes.active : undefined]}>
                    {PATH_TO_PAGE_NAME[path]}
                </NavLink>)
            }
        </div>
    )
}

export default Navbar