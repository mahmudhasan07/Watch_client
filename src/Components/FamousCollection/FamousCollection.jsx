// import pilot from "../../../public/pilot.png";
// import sport from "../../../public/sport.png";

import { useEffect } from "react";
import pilot from "../../../public/pilot.png"
import sport from "../../../public/sport.png"
import { } from "./collection.css"
import AOS from "aos";
// import "url('https://fonts.googleapis.com/css2?family=Jersey+15&display=swap')";
const FamousCollection = () => {

    useEffect(() => {
        AOS.init()
    }, []);
    return (
        <section
            data-aos="fade-up"
            data-aos-offset="500"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="lg:my-16 md:my-10 my-6 bg-black">
            <h1 className="permanent-marker-regular  my-10 text-center text-[#515839]">Best Collects For <span className="text-[#FC6F2F]">Men & Women</span></h1>
            <div className="flex flex-wrap justify-center overflow-hidden lg:gap-24 gap-10 my-5 ">
                <div
                    data-aos="fade-right"
                    data-aos-offset="500"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    id="collection" className="relative">
                    <img src={pilot} alt="" className=" lg:w-[400px] md:w-[330px] w-[250px] rounded-xl object-cover" />
                    <div id="collectionID" className=" space-y-2 ">
                        <p className="text-xl font-bold ">Check Out Our Pilot Collection For man</p>
                        <button className="btn bg-transparent text-white hover:bg-[#FC6F2F]">Collection</button>
                    </div>
                </div>
                <div
                    data-aos="fade-left"
                    data-aos-offset="500"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    id="collection" className="relative">
                    <img src={sport} alt="" className="lg:w-[400px] md:w-[330px] w-[250px] rounded-xl object-cover" />
                    <div id="collectionID" className=" space-y-2 ">
                        <p className="text-xl font-bold ">Check Out Our Sport Collection For man</p>
                        <button className="btn bg-transparent text-white hover:bg-[#FC6F2F]">Collection</button>
                    </div>
                </div>
            </div>
            <div>
            </div>
        </section>
    );
};

export default FamousCollection;