import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAxios from '../Axios/useAxios';
import { motion } from "framer-motion";

const CardInfo = () => {
    const id = useParams()
    const [array, setarray] = useState();
    // const [split, setsplit] = useState();
    const [details, setdetails] = useState();
    const split = id?.id.split('=')
    console.log(split);
    const axiosLink = useAxios()
    useEffect(() => {
        axiosLink.get(`/watches/${split[1]}`)
        .then(res=>{
            // console.log(res.data);
            setarray(res?.data)
            // const data = res?.data?.Watch_note.split(".")
            // console.log(data);
            setdetails(res?.data?.Watch_note.split("."))
        })
        .catch(error=>{
            console.log(error);
        })
    }, [axiosLink, split]);

    console.log(details);
    return (
        <section className='my-10'>
            <h1 className='text-4xl font-bold text-center text-[#515839]'>Product <span className='text-[#FC6F2F]'>Information</span></h1>
            <div className='grid lg:grid-cols-2 grid-cols-1 lg:my-14 md:my-9 my-6'>
                <motion.div initial={{x:"-200%", opacity:0}} animate={{x:0, opacity:1}} transition={{delay:1, duration:1.5, ease:"backOut"}}>
                    <img src={array?.Watch_image} className='w-80 rounded-2xl mx-auto' alt="" />
                </motion.div>
                <motion.div initial={{x:"200%", opacity:0}} animate={{x:0, opacity:1}} transition={{delay:1, duration:1.5, ease:"backOut"}} 
                className='text-xl text-white font-semibold my-auto mr-2'>
                    <h1 className='text-[#FC6F2F]'>Name : <span className='text-[#515839]'> {array?.Watch_name}</span></h1>
                    <h1 className='text-[#FC6F2F]'>Brand : <span className='text-[#515839]'> {array?.Watch_brand}</span></h1>
                    <h1 className='text-[#FC6F2F]'>Gender :  <span className='text-[#515839]'> {array?.Watch_gender}</span></h1>
                    <h1 className='text-[#FC6F2F]'>Price : <span className='text-[#515839]'> {array?.Watch_price}</span></h1>
                    <div>
                        <h1 className='text-xl text-[#FC6F2F] font-semibold'>Watch Details</h1>
                        {
                            details?.map((element,idx)=><li className='text-lg text-[#515839]' key={idx}>{element}</li>)
                        }
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CardInfo;