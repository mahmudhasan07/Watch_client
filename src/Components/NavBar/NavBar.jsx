import React from 'react';
import { motion } from "framer-motion"
import logo from "../../../public/logo.png"
import "./Navbar.css"
import { NavLink } from 'react-router-dom';

const NavBar = () => {

    const animation = {
        initial: {
            y: "-1500%",
            x: -250,
            opacity: 0
        },
        animate: {
            y: 0,
            x: 0,
            opacity: 1
        }
    }

    const activeRoute =({isActive, isPending})=>
        isActive? "bg-orange-600 text-white p-1 rounded-xl" : isPending ? "":"p-1"
    

    return (
        <section className=' bg-gray-950'>
            <div className='flex flex-wrap justify-around  '>
                <div>
                    <img src={logo} className='w-40 h-24' alt="" /> 
                </div>
                <div className='my-auto p-2 '>
                    <ul className='text-[#515839]  text-xl font-extrabold flex flex-wrap justify-center lg:gap-10 md:gap-7 gap-5'>
                        <NavLink className={activeRoute} to={`/`}><motion.li className='navli' variants={animation} initial="initial" animate="animate" transition={{ delay: 4.5 , duration: 1.5, ease: "backOut" }}>Home</motion.li></NavLink>
                        <NavLink className={activeRoute} to={`/watches`}><motion.li className='navli' variants={animation} initial="initial" animate="animate" transition={{ delay: 4.7, duration: 1.5, ease: "backOut" }}>Watches</motion.li></NavLink>
                        <NavLink className={activeRoute} to={`/added-watches`}><motion.li className='navli' variants={animation} initial="initial" animate="animate" transition={{ delay: 4.9, duration: 1.5, ease: "backOut" }}>Add Watches</motion.li></NavLink>
                        {/* <NavLink className={activeRoute} to={`/services`}><motion.li className='navli' variants={animation} initial="initial" animate="animate" transition={{ delay: 6.2, duration: 1.5, ease: "backOut" }}>Services</motion.li></NavLink> */}
                        <NavLink className={activeRoute} to={`/about-us`}><motion.li className='navli' variants={animation} initial="initial" animate="animate" transition={{ delay: 5.1, duration: 1.5, ease: "backOut" }}>About Us</motion.li></NavLink>

                    </ul>
                </div>
            </div>
        </section>
    );
};

export default NavBar;