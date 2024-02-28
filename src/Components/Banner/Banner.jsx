import image from "../../../public/watch_banner.png"
import { motion } from "framer-motion";
import "./Banner.css"
const Banner = () => {

    const divNo1 = {
        initial: {
            x: "-150%"
        },
        animate: {
            x: "0"
        }
    }
    const divNo2 = {
        initial: {
            x: "150%"
        },
        animate: {
            x: "0"
        }
    }
    return (
        <section className="relative">
            <div className="h-[500px] flex justify-center items-center">
                <motion.img src={image} initial={{ width: "35%" }} animate={{ width: "100%", height: "100%", filter: { brightness: "80%" } }} transition={{ delay: 4.8, duration: 2, ease: "anticipate" }} className="object-cover object-center brightness-75"></motion.img>
            </div>
            <div className="absolute overflow-hidden flex flex-wrap justify-around top-1/4">

                <motion.div variants={divNo1} initial="initial" animate="animate" transition={{delay:5.5, duration:2.5, ease:"backOut"}} className="w-1/2 my-auto text-white  space-y-2">
                    <h1 className="text-5xl font-extrabold">Welcome To Our Website</h1>
                    <h1 className="text-3xl font-bold">Where you can buy your favorite watch in latest collection</h1>
                    <button id="btn" className="">Shop Now</button>
                </motion.div>
                <motion.div variants={divNo2} initial="initial" animate="animate" transition={{delay:5.5, duration:2.5, ease:"backOut"}}className="w-1/3 ">
                    <img src={image} className="rounded-2xl my-auto" alt="" />
                </motion.div>

            </div>
        </section>
    );
};

export default Banner;

// animate={{width:"100%", height:"70%"}}