import React, { useEffect, useState } from 'react';
import useAxios, { AxiosSecure } from '../Axios/useAxios';
import Card from '../Watchs/Card';

const Trending = () => {
    const axiosLink = useAxios(AxiosSecure)
    const [array, setarray] = useState([]);
    useEffect(() => {
        axiosLink.get("/trending")
        .then(res=>{
            console.log(res);
            setarray(res?.data)
        })
        .catch(error=>{
            console.log(error);
        })
    }, [axiosLink]);
    return (
        <section className='lg:my-12 md:my-8 my-6'>
            <h1 className='text-4xl text-center my-5 font-bold text-[#515839]'>Trending <span className='text-[#FC6F2F]'>Watches</span></h1>

            <marquee  className="bg-[#515839] text-2xl my-5 p-1 text-black rounded-lg lg:mx-8 md:mx-6 mx-2">
                <h1 className=''>Highlight watches worn by celebrities or influences, as this can significantly influence purchasing decisions. Include images or quotes from celebrities to add credibility and appeal.</h1>
            </marquee>
            <div className='flex justify-center gap-5 flex-wrap'>
                {
                    array.slice(0,4)?.map((element, idx)=> <Card card={element} key={idx} id={idx}></Card>)
                }
                
            </div>
            
        </section>
    );
};

export default Trending;