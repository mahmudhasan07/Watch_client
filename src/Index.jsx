import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { motion } from "framer-motion";

import image1 from "../public/watch1.png";
import image2 from "../public/watch2.jpg";
import image3 from "../public/watch3.png";
import image4 from "../public/watch4.png";
import image5 from "../public/watch_banner.png";
import App from "./App";


const Index = () => {
    // const [loading, setLoading] = useState(true)
    const [loading, setLoading] = useState(false)
    return (
        <section className="">
            <div>
                <AnimatePresence>
                    {
                        loading == true ?
                            <motion.div id="Homepage" onAnimationComplete={() => setLoading(false)} className="relative p-2 h-screen border-2">
                                <motion.img 
                                initial={{ width: "30%", y: "400%", opacity: 0 }} 
                                animate={{ width: "30%", y: 0, height: "50%", x: "50%", opacity: 1 }} 
                                transition={{ delay: 1, duration: 2, ease: "backOut" }} exit={{ opacity: 0 }} src={image1} className="absolute object-cover" ></motion.img>
                                <motion.img 
                                initial={{ width: "30%", y: "400%", opacity: 0 }}
                                 animate={{ width: "30%", y: "120%", x: "50%", opacity: 1 }} 
                                 transition={{ delay: 2, duration: 2, ease: "backOut" }} exit={{ opacity: 0 }} src={image2} className="absolute object-cover" ></motion.img>
                                <motion.img 
                                initial={{ width: "30%", y: "400%", opacity: 0 }} 
                                animate={{ width: "30%", y: 0, x: "200%", opacity: 1 }} 
                                transition={{ delay: 1.5, duration: 2, ease: "backOut" }} exit={{ opacity: 0 }} src={image3} className="absolute object-cover" ></motion.img>
                                <motion.img 
                                initial={{ width: "30%", y: "400%", opacity: 0 }} 
                                animate={{ width: "30%", y: "90%", height: "50%", x: "200%", opacity: 1 }} 
                                transition={{ delay: 2.5, duration: 2, ease: "backOut" }} exit={{ opacity: 0 }} src={image4} className="absolute object-cover" ></motion.img>
                                <motion.img 
                                initial={{ width: "35%", y: "400%", opacity: 0 }} 
                                animate={{ width: "35%", y: "60%", x: "100%", opacity: 1 }} 
                                transition={{ delay: 3, duration: 3, ease: "backOut" }} exit={{ opacity: 1 , transition:{delay:.1}}} onAnimationComplete={() => setLoading(false)}  src={image5} className="absolute object-cover" ></motion.img>
                            </motion.div>
                            :
                            ""
                    }

                </AnimatePresence>

            </div>
            <div  className="bg-black pb-2">
                {
                    loading == false ?
                        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.5}}>
                            <App></App>
                        </motion.div>
                        :
                        ""
                }
            </div>
        </section>
    );
};

export default Index;