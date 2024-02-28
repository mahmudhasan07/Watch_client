import React from 'react';
import { motion } from "framer-motion"
import logo from "../../../public/logo.png"

const NavBar = () => {

    const animation = {
        initial: {
            y: "-350%",
            x: "-200%"
        },
        animate: {
            y: 0,
            x: 0
        }
    }

    return (
        <section className='flex flex-wrap justify-around'>
            <motion.div initial={{x:"700%", opacity :0}} animate={{x:0, opacity:1}} transition={{delay:5.5, duration : 3, ease :"backOut"}}>
                <img src={logo} className='w-40 h-24' alt="" />
            </motion.div>
            <div className=' my-auto p-2'>
                <motion.ul initial={{opacity:0}} animate={{opacity:1}} transition={{delay:5.5, duration : 3}} className='text-[#515839] text-xl font-extrabold flex flex-wrap gap-10'>
                    <motion.li variants={animation} initial="initial" animate="animate" transition={{ delay: 6, duration: 1.5, ease: "backOut" }}>Home</motion.li>
                    <motion.li variants={animation} initial="initial" animate="animate" transition={{ delay: 6.4, duration: 1.5, ease: "backOut" }}>Watches</motion.li>
                    <motion.li variants={animation} initial="initial" animate="animate" transition={{ delay: 6.8, duration: 1.5, ease: "backOut" }}>Services</motion.li>
                    <motion.li variants={animation} initial="initial" animate="animate" transition={{ delay: 7.2, duration: 1.5, ease: "backOut" }}>About Us</motion.li>

                </motion.ul>
            </div>
            <div></div>
        </section>
    );
};

export default NavBar;