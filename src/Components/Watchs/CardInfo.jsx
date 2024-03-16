import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useAxios from '../Axios/useAxios';

const CardInfo = () => {
    const id = useParams()
    const split = id?.id.split('=')
    console.log(split);
    const axiosLink = useAxios()
    useEffect(() => {
        axiosLink.get(`/watches/${split[1]}`)
        .then(res=>{
            console.log(res.data);
        })
        .catch(error=>{
            console.log(error);
        })
    }, [axiosLink, split]);
    return (
        <section>
            <h1 className='text-4xl font-semibold text-center text-[#515839]'>Product <span className='text-[#FC6F2F]'>Information</span></h1>
            <div>
                <div>

                </div>
            </div>
        </section>
    );
};

export default CardInfo;