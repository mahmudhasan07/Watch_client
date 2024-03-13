import React, { useEffect, useState } from 'react';

import Card from './Card';
import useAxios, { AxiosSecure } from '../Axios/useAxios';
const Cards = () => {
    const axiosLink = useAxios(AxiosSecure)
    const [loading, setloading] = useState(false)
    const [watch, setwatch] = useState();
    useEffect(() => {
        setloading(true)
        axiosLink.get("/watches")
            .then(res => {
                console.log(res);
                setwatch(res?.data)
                setloading(false)

            })
            .catch(error => {
                console.log(error);
            })
    }, [axiosLink]);
    console.log(watch);
    return (
        <section>

            <h1 className='text-4xl font-extrabold text-center my-10 text-[#515839]'>Watches <span className='text-[#FC6F2F]'>Collection</span> </h1>
            <div className='flex flex-wrap justify-center gap-10 my-10'>
                {
                    loading == true ?
                        <p className='h-screen text-5xl my-auto'>loading</p>
                        :
                            watch?.map((element, idx) => <Card card={element} key={idx} id={idx}></Card>)
                            
                }
            </div>
        </section>
    );
};

export default Cards;