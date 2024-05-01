import image from "../../../public/watch_banner.png"
import { motion } from "framer-motion";
import "./Banner.css"
import banner from "../../../public/WatchCollectors.jpeg";
// import { NavLink, } from "react-router-dom";
import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import AOS from "aos"

// import { Parallax } from "react-scroll-parallax";
const Banner = () => {
    // const [bannerTime, setbannerTime] = useState(0);
    const divNo1 = {
        initial: {
            x: "-150%"
        },
        animate: {
            x: "0"
        }
    }


    useEffect(()=>{
        AOS.init()
    },[])



    return (
        <section className="relative my-2 overflow-hidden">
            <div  
            data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-easing="ease-in-out-back"
            data-aos-duration="1500"
            // data-aos-anchor-placement="center-center"
            className=" flex justify-center items-center">
                {/* <motion.img src={banner} initial={{ width: "35%" }} animate={{ width: "100%", height: "100%", filter: { brightness: "80%" } }} transition={{ delay: 1, duration: 2, ease: "anticipate" }} className="object-cover opacity-95 object-center"></motion.img> */}
                <img src={banner} className="h-[600px] object-cover object-center w-full"></img>
            </div>
            <div className="absolute overflow-hidden lg:left-16 md:left-10 left-3 top-1/4">
                <motion.div variants={divNo1} initial="initial" animate="animate" transition={{ delay: 4.8, duration: 2.5, ease: "backOut" }} className="lg:mt-8 text-gray-200  space-y-2">
                    <h1 className="lg:text-5xl md:text-4xl text-3xl font-extrabold">Discover our watch boutique, <br />designed for excellence.  <br />Take a deep dive into our collection.</h1>
                    <h1 className="lg:text-3xl md:text-2xl text-xl font-bold">Explore Our Stylish Timepieces</h1>
                    {/* <h1 className="text-3xl font-bold">Discover Our Premier Watches</h1> */}
                    <button id="btn" className="">Shop Now</button>
                </motion.div>
                {/* <motion.div variants={divNo2} initial="initial" animate="animate" transition={{delay:5.5, duration:2.5, ease:"backOut"}}className="w-1/3 ">
                    <img src={image} className="rounded-2xl my-auto" alt="" />
                </motion.div> */}

            </div>

        </section>

    );
};

export default Banner;

// animate={{width:"100%", height:"70%"}}