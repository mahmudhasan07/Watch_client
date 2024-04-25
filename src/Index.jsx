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
    const [x3Value, setx3Value] = useState("200%");
    const [x4Value, setx4Value] = useState("200%");
    const [x5Value, setx5Value] = useState("100%");
    const [y1Value, sety1Value] = useState(0);
    const [y2Value, sety2Value] = useState("120%");
    const [y3Value, sety3Value] = useState(0);
    const [y4Value, sety4Value] = useState("90%");
    const [y5Value, sety5Value] = useState("65%");
    const [height1Value, setheight1Value] = useState("350px");
    const [height2Value, setheight2Value] = useState("");
    const [height3Value, setheight3Value] = useState("");
    const [height4Value, setheight4Value] = useState("350px");
    const [height5Value, setheight5Value] = useState("");
    const [width1Value, setwidth1Value] = useState("30%");
    const [width2Value, setwidth2Value] = useState("30%");
    const [width3Value, setwidth3Value] = useState("30%");
    const [width4Value, setwidth4Value] = useState("30%");
    const [width5Value, setwidth5Value] = useState("35%");
    useEffect(() => {
        if (window.matchMedia("screen and (max-width:770px)").matches) {
            {
                // console.log("medium screen");
                // image1
                setx1Value("10%")
                sety1Value("20%")
                setheight1Value("250px")
                setwidth1Value("45%")
                // image2
                setx2Value("10%")
                sety2Value("150%")
                setheight2Value("")
                setwidth2Value("45%")
                // image3
                setx3Value("115%")
                sety3Value("20%")
                setheight3Value("")
                setwidth3Value("45%")
                // image4
                setx4Value("115%")
                sety4Value("130%")
                setheight4Value("250px")
                setwidth4Value("45%")
                // image5
                setx5Value("60%")
                sety5Value("100%")
                setheight5Value("")
                setwidth5Value("50%")
            }
        }
        if (window.matchMedia("screen and (max-width:420px)").matches) {
            // console.log("small screen");
            // image1
            setx1Value("5%")
            sety1Value(0)
            setheight1Value("200px")
            setwidth1Value("45%")
            // image2
            setx2Value("5%")
            sety2Value("120%")
            setheight2Value("200px")
            setwidth2Value("45%")
            // image3
            setx3Value("110%")
            sety3Value(0)
            setheight3Value("200px")
            setwidth3Value("45%")
            // image4
            setx4Value("110%")
            sety4Value("120%")
            setheight4Value("200px")
            setwidth4Value("45%")
            // image5
            setx5Value("25%")
            sety5Value("90%")
            setheight5Value("")
            setwidth5Value("65%")
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
                                    {/* image1 */}
                                    <motion.img
                                        initial={{ width: "30%", y: "400%", opacity: 0 }}
                                        // animate={{ width: "45%", y: "20%", height: "250px", x: "10%", opacity: 1 }}
                                        // animate={{ width: "30%", y: 0, height: "350px", x: "50%", opacity: 1 }}
                                        animate={{ width: width1Value, y: y1Value, height: height1Value, x: x1Value, opacity: 1 }}
                                        transition={{ delay: 1, duration: 2, ease: "backOut" }} exit={{ opacity: 0 }} key={loading} src={image1} className="absolute object-cover" ></motion.img>
                                        {/* image2 */}
                                    <motion.img
                                        initial={{ width: "30%", y: "400%", opacity: 0 }}
                                        // animate={{ width: "45%", y: "150%", x: "10%", opacity: 1 }}
                                        // animate={{ width: "30%", y: "120%", x: "50%", opacity: 1 }}
                                        animate={{ width: "45%", y: "120%", x: "5%", height: "200px", opacity: 1 }}
                                        transition={{ delay: 2, duration: 2, ease: "backOut" }} exit={{ opacity: 0 }} key={loading} src={image2} className="absolute object-cover" ></motion.img>
                                        {/* image3 */}
                                    <motion.img
                                        initial={{ width: "30%", y: "400%", opacity: 0 }}
                                        // animate={{ width: "45%", y: "20%", x: "115%", opacity: 1 }}
                                        // animate={{ width: "30%", y: 0, x: "200%", opacity: 1 }}
                                        animate={{ width: "45%", y: 0, x: "110%", height: "200px", opacity: 1 }}
                                        transition={{ delay: 1.5, duration: 2, ease: "backOut" }} exit={{ opacity: 0 }} key={loading} src={image3} className="absolute object-cover" ></motion.img>
                                        {/* image4 */}
                                    <motion.img
                                        initial={{ width: "30%", y: "400%", opacity: 0 }}
                                        // animate={{ width: "45%", y: "130%", height: "250px", x: "115%", opacity: 1 }}
                                        // animate={{ width: "30%", y: "90%", height: "350px", x: "200%", opacity: 1 }}
                                        animate={{ width: "45%", y: "120%", height: "200px", x: "110%", opacity: 1 }}
                                        transition={{ delay: 2.5, duration: 2, ease: "backOut" }} exit={{ opacity: 0 }} key={loading} src={image4} className="absolute object-cover" ></motion.img>
                                        {/* image5 */}
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