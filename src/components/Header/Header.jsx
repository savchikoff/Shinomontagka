import { useContext } from 'react';
import Navbar from '../Navbar/Navbar';
import classes from './Header.module.css';
import logo from '../../assets/logo.svg';
import { Button } from 'antd';
import { RequestModalContext } from '../../context/RequestModalProvider';

function Header() {
    const { handleModal } = useContext(RequestModalContext);

    return (
        <div className={classes.headerContainer}>
            <div className={classes.headerWrapper}>
                <img src={logo} alt="Company Logo" width={24} height={24} />
                <div className={classes.headerRightSide}>
                    <Navbar />
                    <Button onClick={handleModal}>Оставить заявку</Button>
                </div>
            </div>
        </div>
    )
}

export default Header