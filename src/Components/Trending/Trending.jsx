import React, { useEffect, useState } from 'react';
import useAxios, { AxiosSecure } from '../Axios/useAxios';
import Card from '../Watchs/Card';

const Trending = () => {
    const axiosLink = useAxios(AxiosSecure)
    const [array, setarray] = useState([]);
    useEffect(() => {
        axiosLink.get("/trending")
            .then(res => {
                console.log(res);
                setarray(res?.data)
            })
            .catch(error => {
                console.log(error);
            })
    }, [axiosLink]);
    return (
        <section
            className='lg:my-16 md:my-10 my-6'>
            <h1
                data-aos="fade-up"
                data-aos-offset="500"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                className='text-4xl text-center my-5 font-extrabold text-[#515839]'>Trending <span className='text-[#FC6F2F]'>Watches</span></h1>

            <marquee
                data-aos="fade-up"
                data-aos-offset="500"
                data-aos-duration="1100"
                data-aos-easing="ease-in-out"
                className="bg-[#515839] text-2xl my-6 p-1 text-black rounded-lg lg:mx-8 md:mx-6 mx-2">
                <h1 className='italic'>Highlight watches worn by celebrities or influences, as this can significantly influence purchasing decisions. Include images or quotes from celebrities to add credibility and appeal.</h1>
            </marquee>
            <div
            data-aos="fade-up"
            data-aos-offset="500"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
                className='flex justify-center gap-5 flex-wrap'>
                {
                    array.slice(0, 4)?.map((element, idx) => <Card card={element} key={idx} id={idx}></Card>)
                }

            </div>

        </section>
    );
};

export default Trending;