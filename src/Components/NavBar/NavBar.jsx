import React from 'react';
import {motion} from "framer-motion"

const NavBar = () => {
    return (
        <section>
            <div></div>
            <div>
                <ul>
                    <motion.li>Home</motion.li>
                    <motion.li>Watches</motion.li>
                    <motion.li>Services</motion.li>
                    <motion.li>About Us</motion.li>
                    
                </ul>
            </div>
            <div></div>
        </section>
    );
};

export default NavBar;