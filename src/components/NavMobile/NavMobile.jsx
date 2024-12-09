import { useContext, useRef, useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";
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
                (<motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <div className={classes.navItems}>
                        <Button onClick={handleButtonClick}>Оставить заявку</Button>
                        <Navbar handleBurgerClose={handleClose} />
                    </div>
                </motion.div>
                )
                : null}
        </div>
    )
}

export { NavMobile };