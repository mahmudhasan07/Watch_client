import { AnimatePresence, LayoutGroup } from "framer-motion";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import image1 from "../public/watch1.png";
import image2 from "../public/watch2.jpg";
import image3 from "../public/watch3.png";
import image4 from "../public/watch4.png";
import image5 from "../public/watch_banner.png";
import App from "./App";
import "./App.css"


const Index = () => {
    const [size, setsize] = useState()
    const [loading, setLoading] = useState(true)
    // console.log(window.matchMedia(1400));
    // const [loading, setLoading] = useState(false)
    const [x1Value, setx1Value] = useState("50%");
    const [x2Value, setx2Value] = useState("50%");
    const [x3Value, setx3Value] = useState("50%");
    const [x4Value, setx4Value] = useState("50%");
    const [x5Value, setx5Value] = useState("50%");
    const [yValue, setyValue] = useState(0);
    const [heightValue, setheightValue] = useState("350px");
    const [widthValue, setwidthValue] = useState("30%");
    useEffect(() => {
        if (window.matchMedia("screen and (max-width:770px)").matches) {
            {
                // console.log("medium screen");
                setxValue("10%")
                setyValue("20%")
                setheightValue("250px")
                setwidthValue("45%")
            }
        }
        if (window.matchMedia("screen and (max-width:420px)").matches) {
            // console.log("small screen");
            setxValue("5%")
            setyValue(0)
            setheightValue("200px")
            setwidthValue("45%")
        }
        // else {
        //     console.log("Large screen");
        // }
    }, []);
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
                                        // animate={{ width: "45%", y: "20%", height: "250px", x: "10%", opacity: 1 }}
                                        // animate={{ width: "30%", y: 0, height: "350px", x: "50%", opacity: 1 }}
                                        animate={{ width: widthValue, y: yValue, height: heightValue, x: xValue, opacity: 1 }}
                                        transition={{ delay: 1, duration: 2, ease: "backOut" }} exit={{ opacity: 0 }} key={loading} src={image1} className="absolute object-cover" ></motion.img>
                                    <motion.img
                                        initial={{ width: "30%", y: "400%", opacity: 0 }}
                                        // animate={{ width: "45%", y: "150%", x: "10%", opacity: 1 }}
                                        // animate={{ width: "30%", y: "120%", x: "50%", opacity: 1 }}
                                        animate={{ width: "45%", y: "120%", x: "5%", height: "200px", opacity: 1 }}
                                        transition={{ delay: 2, duration: 2, ease: "backOut" }} exit={{ opacity: 0 }} key={loading} src={image2} className="absolute object-cover" ></motion.img>
                                    <motion.img
                                        initial={{ width: "30%", y: "400%", opacity: 0 }}
                                        // animate={{ width: "45%", y: "20%", x: "115%", opacity: 1 }}
                                        // animate={{ width: "30%", y: 0, x: "200%", opacity: 1 }}
                                        animate={{ width: "45%", y: 0, x: "110%", height: "200px", opacity: 1 }}
                                        transition={{ delay: 1.5, duration: 2, ease: "backOut" }} exit={{ opacity: 0 }} key={loading} src={image3} className="absolute object-cover" ></motion.img>
                                    <motion.img
                                        initial={{ width: "30%", y: "400%", opacity: 0 }}
                                        // animate={{ width: "45%", y: "130%", height: "250px", x: "115%", opacity: 1 }}
                                        // animate={{ width: "30%", y: "90%", height: "350px", x: "200%", opacity: 1 }}
                                        animate={{ width: "45%", y: "120%", height: "200px", x: "110%", opacity: 1 }}
                                        transition={{ delay: 2.5, duration: 2, ease: "backOut" }} exit={{ opacity: 0 }} key={loading} src={image4} className="absolute object-cover" ></motion.img>
                                    <motion.img
                                        initial={{ width: "35%", y: "400%", opacity: 0 }}
                                        // animate={{ width: "50%", y: "100%", x: "60%", opacity: 1 }}
                                        // animate={{ width: "35%", y: "60%", x: "100%", opacity: 1 }}
                                        animate={{ width: "65%", y: "90%", x: "25%", opacity: 1 }}
                                        transition={{ delay: 3, duration: 3, ease: "backOut" }} exit={{ opacity: 0 }} key={loading} onAnimationComplete={() => setLoading(true)} src={image5} className="absolute object-cover" ></motion.img>
                                </motion.div>
                            </AnimatePresence>
                            :
                            <AnimatePresence>
                                {
                                    !loading ?
                                        <motion.div initial={{ opacity: 0 }} key={!loading} animate={{ opacity: 1, }} transition={{ delay: 4.4 }} className="bg-black">
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