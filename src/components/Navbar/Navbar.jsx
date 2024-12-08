import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { NAVIGATION } from '../../constants/navigation';
import { PATH_TO_PAGE_NAME } from '../../constants/pathToPageName';
import classes from './Navbar.module.css';
import { scrollToTop } from '../../utils/scrollToTop';

function Navbar({ handleBurgerClose }) {
    const handleLinkClick = () => {
        handleBurgerClose();
        scrollToTop();
    }

    return (
        <div className={classes.navbarItems}>
            {NAVIGATION[0].children.map(({ path }, index) =>
                <NavLink onClick={handleLinkClick} to={path} key={index} className={({ isActive }) => clsx(classes.navbarItem, isActive ? classes.active : undefined)}>
                    {PATH_TO_PAGE_NAME[path]}
                </NavLink>)
            }
        </div>
    )
}

export default Navbar