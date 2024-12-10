import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { Divider } from 'antd';
import { PhoneOutlined, MailOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { NAVIGATION } from '../../constants/navigation';
import { PATH_TO_PAGE_NAME } from '../../constants/pathToPageName';
import classes from './Footer.module.css';
import { scrollToTop } from '../../utils/scrollToTop';

function Footer() {
    return (
        <footer className={classes.footerContainer}>
            <div className={classes.footerTop}>
                <div className={classes.footerLinks}>
                    {NAVIGATION[0].children.map(({ path }, index) =>
                        <NavLink onClick={scrollToTop} to={path} key={index} className={({ isActive }) => clsx(classes.footerLink, isActive ? classes.active : undefined)}>
                            {PATH_TO_PAGE_NAME[path]}
                        </NavLink>)
                    }
                </div>
                <div className={classes.footerContacts}>
                    <div className={classes.footerContact}>
                        <PhoneOutlined />
                        <a href="tel:++375259183528">+375259183528</a>
                    </div>
                    <div className={classes.footerContact}>
                        <MailOutlined />
                        <a href="mailto:name@email.com">name@email.com</a>
                    </div>
                    <div className={classes.footerContact}>
                        <EnvironmentOutlined />
                        <address>
                            г. Минск, ул. Печкина, д.25
                        </address>
                    </div>
                </div>
            </div>
            <Divider style={{ borderColor: '#fff' }} />
            <div className={classes.footerBottom}>
                <p>© 2024 ИП Маталыга В.В., УНП 691623237</p>
            </div>
        </footer>
    )
};

export default Footer;