import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { motion } from "framer-motion";

import image1 from "../public/watch1.png";
import image2 from "../public/watch2.png";
import image3 from "../public/watch3.png";
import image4 from "../public/watch4.png";
import image5 from "../public/watch_banner.png";


const Index = () => {
    const [loading, setLoading] = useState(true)
    return (
        <section>
            <div>
                <AnimatePresence>
                    {
                        loading == true ?
                        <div>
                        <motion.img src={image1}></motion.img>
                        <motion.img src={image2}></motion.img>
                        <motion.img src={image3}></motion.img>
                        <motion.img src={image4}></motion.img>
                        <motion.img src={image5}></motion.img>
                        </div>
                        :
                        "No animation"
                    }

                </AnimatePresence>
            </div>
        </section>
    );
};

export default Index;