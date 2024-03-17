import image from "../../../public/watch_banner.png"
import { motion } from "framer-motion";
import "./Banner.css"
import banner from "../../../public/WatchCollectors.jpeg";
import { Parallax } from "react-scroll-parallax";
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
        <section className="relative my-2">
            <div className="h-[600px] flex justify-center items-center">
                <motion.img src={banner} initial={{ width: "35%" }} animate={{ width: "100%", height: "100%", filter: { brightness: "80%" } }} transition={{ delay: 4.8, duration: 2, ease: "anticipate" }} className="object-cover opacity-95 object-center"></motion.img>
            </div>
            <div className="absolute overflow-hidden left-16 top-1/4">

                <motion.div variants={divNo1} initial="initial" animate="animate" transition={{delay:5.5, duration:2.5, ease:"backOut"}} className="mt-8 text-gray-200  space-y-2">
                    <h1 className="text-5xl font-extrabold">Discover our watch boutique, <br />designed for excellence.  <br />Take a deep dive into our collection.</h1>
                    <h1 className="text-3xl font-bold">Explore Our Stylish Timepieces</h1>
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