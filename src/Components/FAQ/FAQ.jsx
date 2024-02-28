import "./FAQ.css"

const FAQ = () => {
    return (
        <section className="my-10">
            <h1 className="text-5xl font-bold text-center text-[#515839]">Frequently <span className="text-[#FC6F2F]">Asked</span> Questions</h1>
            <div className="relative py-10">
                <img id="FAQimg" src="https://i.ibb.co/BPY2MQs/FAQ1.jpg" className="w-96 object-cover aspect-square rounded-xl border-8" alt="" />
                <img src="https://i.ibb.co/866fRLR/FAQ2.jpg" className="w-40 aspect-square object-cover border-4 border-white rounded-xl absolute top-[70%] left-80" alt="" />
            </div>
            <div className="">
            </div>
        </section>
    );
};

export default FAQ;