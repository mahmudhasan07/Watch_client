import React from 'react';
import { motion } from "framer-motion"
import logo from "../../../public/logo.png"

const NavBar = () => {

    const animation = {
        initial: {
            y: "-1500%",
            x: -250
        },
        animate: {
            y: 0,
            x: 0
        }
    }

    return (
        <section className='border-b-2'>
            <div className='flex flex-wrap justify-around'>
                <div>
                    <img src={logo} className='w-40 h-24' alt="" />
                </div>
                <motion.div className='my-auto p-2 z-50'>
                    <ul className='text-[#515839] z-50 text-xl font-extrabold flex flex-wrap gap-10'>
                        <motion.li variants={animation} initial="initial" animate="animate" transition={{ delay: 5, duration: 1.5, ease: "backOut" }}>Home</motion.li>
                        <motion.li variants={animation} initial="initial" animate="animate" transition={{ delay: 5.4, duration: 1.5, ease: "backOut" }}>Watches</motion.li>
                        <motion.li variants={animation} initial="initial" animate="animate" transition={{ delay: 5.8, duration: 1.5, ease: "backOut" }}>Services</motion.li>
                        <motion.li variants={animation} initial="initial" animate="animate" transition={{ delay: 6.2, duration: 1.5, ease: "backOut" }}>About Us</motion.li>

                    </ul>
                </motion.div>
            </div>
        </section>
    );
};

export default NavBar;