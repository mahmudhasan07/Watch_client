// import pilot from "../../../public/pilot.png";
// import sport from "../../../public/sport.png";

import pilot from "../../../public/pilot.png"
import sport from "../../../public/sport.png"
import { } from "./collection.css"
const FamousCollection = () => {
    return (
        <section className="lg:my-12 md:my-8 my-5">
            <h1 className="text-4xl font-extrabold my-7 text-center text-[#515839]">Best Collects For <span className="text-[#FC6F2F]">Men & Women</span></h1>
            <div className="flex justify-center gap-14 ">
                <div id="collection" className="relative">
                    <img src={pilot} alt="" className=" lg:w-[400px] md:w-[300px] w-[200px] rounded-xl object-cover" />
                    <div id="collectionID" className=" space-y-2 ">
                        <p className="text-xl font-bold ">Check Out Our Pilot Collection For man</p>
                        <button className="btn bg-transparent text-white hover:bg-[#FC6F2F]">Collection</button>
                    </div>
                </div>
                <div id="collection" className="relative">
                    <img src={sport} alt="" className="lg:w-[400px] md:w-[300px] w-[200px] rounded-xl object-cover" />
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