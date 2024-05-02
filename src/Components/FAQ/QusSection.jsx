import "./FAQ.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Parallax, ParallaxContext } from "react-scroll-parallax";

const QusSection = () => {
    const [hidden, setHidden] = useState("hidden")
    let time = 0
    useEffect(() => {
        AOS.init();

    }, [time])

    return (

        <div data-aos="fade-up"
            data-aos-offset="500"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="mb-20">
            <h1 className="text-5xl permanent-marker-regular font-bold text-center lg:mb-16 md:mb-10 mb-6 z-50 text-[#515839]">Frequently <span className="text-[#FC6F2F]">Asked</span> Questions</h1>
                <div className={`flex flex-wrap gap-10 overflow-hidden  justify-around py-1 `}>
                    <div
                        data-aos="fade-left"
                        data-aos-offset="500"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        className=" lg:w-1/3 ">
                        <img id="FAQimg" src="https://i.ibb.co/BPY2MQs/FAQ1.jpg" className="lg:w-96 md:w-80 w-72 object-cover aspect-square rounded-xl border-8" alt="" />
                        <img src="https://i.ibb.co/866fRLR/FAQ2.jpg" className="lg:w-40 md:w-32 w-28 aspect-square object-cover border-4 border-white rounded-xl absolute top-[70%] lg:left-72 md:left-64 left-52" alt="" />
                    </div>
                    <div
                        data-aos="fade-right"
                        data-aos-offset="500"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        className="space-y-2 relative my-auto lg:w-1/3">
                        <details className="collapse border-2  text-white bg-[#515839]">
                            <summary className="collapse-title lg:text-xl md:text-xl text-lg font-medium">Why you purchase product from our shop??</summary>
                            <div className="collapse-content bg-[#FC6F2F]">
                                <p>We provide genuine watches which are imported from USA, US, Canada, China , China</p>
                            </div>
                        </details>
                        <details className="collapse text-white border-2 bg-[#515839]">
                            <summary className="collapse-title lg:text-xl md:text-xl text-lg font-medium">Why you purchase product from our shop??</summary>
                            <div className="collapse-content bg-[#FC6F2F]">
                                <p>We provide genuine watches which are imported from USA, US, Canada, China , China</p>
                            </div>
                        </details>
                        <details className="collapse text-white bg-[#515839] border-2">
                            <summary className="collapse-title lg:text-xl md:text-xl text-lg font-medium">Why you purchase product from our shop??</summary>
                            <div className="collapse-content bg-[#FC6F2F]">
                                <p>We provide genuine watches which are imported from USA, US, Canada, China , China</p>
                            </div>
                        </details>
                        <details className="collapse text-white bg-[#515839] border-2">
                            <summary className="collapse-title lg:text-xl md:text-xl text-lg font-medium">Why you purchase product from our shop??</summary>
                            <div className="collapse-content bg-[#FC6F2F]">
                                <p>We provide genuine watches which are imported from USA, US, Canada, China , China</p>
                            </div>
                        </details>
                        <details className="collapse text-white bg-[#515839] border-2">
                            <summary className="collapse-title lg:text-xl md:text-xl text-lg font-medium">Why you purchase product from our shop??</summary>
                            <div className="collapse-content bg-[#FC6F2F]">
                                <p>We provide genuine watches which are imported from USA, US, Canada, China , China</p>
                            </div>
                        </details>
                    </div>
                </div>
            </div>

    );
};
export default QusSection;