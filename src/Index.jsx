import { AnimatePresence, LayoutGroup } from "framer-motion";
import { useState } from "react";
import { motion } from "framer-motion";

import image1 from "../public/watch1.png";
import image2 from "../public/watch2.jpg";
import image3 from "../public/watch3.png";
import image4 from "../public/watch4.png";
import image5 from "../public/watch_banner.png";
import App from "./App";
import "./App.css"


const Index = () => {
    const [size, setsize]  = useState()
    const [loading, setLoading] = useState(true)
    console.log(window.matchMedia(1400));
    // const [loading, setLoading] = useState(false)
    return (
        <section className="">
            <div>
                <LayoutGroup>
                    {
                        loading == true ?
                            <AnimatePresence>
                                <motion.div id="Homepage" className="absolute w-full p-2 h-screen">
                                    <motion.img
                                        initial={{ width: "30%", y: "400%", opacity: 0 }}
                                        animate={{ width: "30%", y: 0, height: "350px", x: "50%", opacity: 1 }}
                                        transition={{ delay: 1, duration: 2, ease: "backOut" }} exit={{ opacity: 0 }} key={loading} src={image1} className="absolute object-cover" ></motion.img>
                                    <motion.img
                                        initial={{ width: "30%", y: "400%", opacity: 0 }}
                                        animate={{ width: "30%", y: "120%", x: "50%", opacity: 1 }}
                                        transition={{ delay: 2, duration: 2, ease: "backOut" }} exit={{ opacity: 0 }} key={loading} src={image2} className="absolute object-cover" ></motion.img>
                                    <motion.img
                                        initial={{ width: "30%", y: "400%", opacity: 0 }}
                                        animate={{ width: "30%", y: 0, x: "200%", opacity: 1 }}
                                        transition={{ delay: 1.5, duration: 2, ease: "backOut" }} exit={{ opacity: 0 }} key={loading} src={image3} className="absolute object-cover" ></motion.img>
                                    <motion.img
                                        initial={{ width: "30%", y: "400%", opacity: 0 }}
                                        animate={{ width: "30%", y: "90%", height: "350px", x: "200%", opacity: 1 }}
                                        transition={{ delay: 2.5, duration: 2, ease: "backOut" }} exit={{ opacity: 0 }} key={loading} src={image4} className="absolute object-cover" ></motion.img>
                                    <motion.img
                                        initial={{ width: "35%", y: "400%", opacity: 0 }}
                                        animate={{ width: "35%", y: "60%", x: "100%", opacity: 1 }}
                                        transition={{ delay: 3, duration: 3, ease: "backOut" }} exit={{ opacity: 1, transition: { delay: .1 } }} key={loading} onAnimationComplete={() => setLoading(false)} src={image5} className="absolute object-cover" ></motion.img>
                                </motion.div>
                            </AnimatePresence>
                            :
                            <AnimatePresence>
                                {
                                    !loading ?
                                        <motion.div initial={{ opacity: 0 }} key={!loading} animate={{ opacity: 1, }} transition={{ delay: 4.5}} className="bg-black">
                                            <App></App>
                                        </motion.div>
                                        :
                                        ""
                                }
                            </AnimatePresence>
                    }

                </LayoutGroup>

            </div>

        </section>
    );
};

export default Index;