import image from "../../../public/watch_banner.png"
import { motion } from "framer-motion";
const Banner = () => {
    return (
        <section className="relative">
            <div className="h-[500px] flex justify-center items-center">
            <motion.img src={image} initial={{width:"35%"}} animate={{width:"100%", height:"100%"}} transition={{delay:4.8, duration : 2, ease:"anticipate"}} className="object-cover object-center"></motion.img>
            </div>
            <div className="absolute">

            </div>
        </section>
    );
};

export default Banner;

// animate={{width:"100%", height:"70%"}}