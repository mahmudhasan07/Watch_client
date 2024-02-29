import "./FAQ.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { motion } from "framer-motion";

const QusSection = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <motion.div initial={{ y: "500%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 5, duration: 1.5 }} className=" relative my-10">
            <h1 className="text-5xl font-bold text-center my-10 text-[#515839]">Frequently <span className="text-[#FC6F2F]">Asked</span> Questions</h1>
            <motion.div className="flex flex-wrap justify-around py-10">
                <div
                    data-aos="fade-left"
                    // data-aos-offset="500"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out" 
                    className="relative w-1/3">
                    <img id="FAQimg" src="https://i.ibb.co/BPY2MQs/FAQ1.jpg" className="w-96 object-cover aspect-square rounded-xl border-8" alt="" />
                    {/* <img src="https://i.ibb.co/866fRLR/FAQ2.jpg" className="w-40 aspect-square object-cover border-4 border-white rounded-xl absolute top-[70%] left-80" alt="" /> */}
                </div>
                <div
                    data-aos="fade-right"
                    // data-aos-offset="500"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out" 
                    className="space-y-2 relative w-1/3">
                    <details className="collapse border-2 text-white bg-[#515839]">
                        <summary className="collapse-title text-xl font-medium">Why you purchase product from our shop??</summary>
                        <div className="collapse-content bg-[#FC6F2F]">
                            <p>We provide genuine watches which are imported from USA, US, Canada, China , China</p>
                        </div>
                    </details>
                    <details className="collapse text-white border-2 bg-[#515839]">
                        <summary className="collapse-title text-xl font-medium">Why you purchase product from our shop??</summary>
                        <div className="collapse-content bg-[#FC6F2F]">
                            <p>We provide genuine watches which are imported from USA, US, Canada, China , China</p>
                        </div>
                    </details>
                    <details className="collapse text-white bg-[#515839] border-2">
                        <summary className="collapse-title text-xl font-medium">Why you purchase product from our shop??</summary>
                        <div className="collapse-content bg-[#FC6F2F]">
                            <p>We provide genuine watches which are imported from USA, US, Canada, China , China</p>
                        </div>
                    </details>
                    <details className="collapse text-white bg-[#515839] border-2">
                        <summary className="collapse-title text-xl font-medium">Why you purchase product from our shop??</summary>
                        <div className="collapse-content bg-[#FC6F2F]">
                            <p>We provide genuine watches which are imported from USA, US, Canada, China , China</p>
                        </div>
                    </details>
                </div>
            </motion.div>
        </motion.div>
    );
};
export default QusSection;