import React, { useEffect } from 'react';
import useAxios, { AxiosSecure } from '../Axios/useAxios';

const Trending = () => {
    const axiosLink = useAxios(AxiosSecure)
    useEffect(() => {
        axiosLink.get("/trending")
        .then(res=>{
            console.log(res);
        })
        .catch(error=>{
            console.log(error);
        })
    }, []);
    return (
        <section>
            <h1 className='text-4xl text-center my-5 font-bold text-[#515839]'>Trending <span className='text-[#FC6F2F]'>Watches</span></h1>

            <marquee  className="bg-[#515839] text-2xl p-1 text-black rounded-lg mx-5">
                <h1 className=''>Highlight watches worn by celebrities or influences, as this can significantly influence purchasing decisions. Include images or quotes from celebrities to add credibility and appeal.</h1>
            </marquee>
            <div>


                
            </div>
            
        </section>
    );
};

export default Trending;