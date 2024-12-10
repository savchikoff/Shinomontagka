import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import classes from './Header.module.css';
import logo from '../../assets/logo.svg';
import { Button } from 'antd';
import { RequestModalContext } from '../../context/RequestModalProvider';
import { scrollToTop } from '../../utils/scrollToTop';
import { NavMobile } from '../NavMobile/NavMobile';
import { useMediaQuery } from 'react-responsive';

function Header() {
    const { handleModal } = useContext(RequestModalContext);
    const isSmallScreen = useMediaQuery({ query: "(max-width: 920px)" });

    return (
        <div className={classes.headerContainer}>
            <div className={classes.headerWrapper}>
                <NavLink onClick={scrollToTop} to={"/"}>
                    <img src={logo} alt="Company Logo" width={24} height={24} />
                </NavLink>
                <div className={classes.headerRightSide}>
                    {isSmallScreen ? <NavMobile /> : <Navbar />}
                    {isSmallScreen ? null : <Button onClick={handleModal}>Оставить заявку</Button>}
                </div>
            </div>
        </div>
    )
}

export default Header