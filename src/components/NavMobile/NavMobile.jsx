import { useContext, useRef, useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from 'antd';
import { useClickOutside } from "../../hooks/useClickOutside";
import Navbar from "../Navbar/Navbar";
import classes from "./NavMobile.module.css";
import { RequestModalContext } from "../../context/RequestModalProvider";


function NavMobile() {
    const { handleModal } = useContext(RequestModalContext);
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef(null);

    const handleClose = () => setIsOpen(false);

    useClickOutside(ref, handleClose);

    const handleButtonClick = () => {
        handleClose();
        handleModal();
    }


    return (
        <div ref={ref}>
            <Hamburger toggled={isOpen} size={10} toggle={setIsOpen} className={classes.burger} />
            {isOpen ?
                (<div className={classes.navItems}>
                    <Navbar handleBurgerClose={handleClose} />
                    <Button onClick={handleButtonClick}>Оставить заявку</Button>
                </div>)
                : null}
        </div>
    )
}

export { NavMobile };