import { useContext, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
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
    const Container = isSmallScreen ? Fragment : "div"

    return (
        <div className={classes.headerContainer}>
            <div className={classes.headerWrapper}>
                <NavLink onClick={scrollToTop} to={"/"}>
                    <img src={logo} alt="Company Logo" width={24} height={24} />
                </NavLink>
                <Container className={classes.headerRightSide}>
                    {isSmallScreen ? <NavMobile /> : <Navbar />}
                    {isSmallScreen ? null : <Button onClick={handleModal}>Оставить заявку</Button>}
                </Container>
            </div>
        </div>
    )
}

export default Header