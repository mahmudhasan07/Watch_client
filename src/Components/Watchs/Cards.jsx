import React, { useEffect, useState } from 'react';

import Card from './Card';
import useAxios, { AxiosSecure } from '../Axios/useAxios';
const Cards = () => {
    const axiosLink = useAxios(AxiosSecure)
    const [watch, setwatch] = useState();
    useEffect(() => {
        axiosLink.get("/watches")
            .then(res => {
                console.log(res);
                setwatch(res?.data)

            })
            .catch(error => {
                console.log(error);
            })
    }, [axiosLink]);
    console.log(watch);
    return (
        <section>

            <h1 className='text-3xl font-extrabold text-center my-10 '>Watches Collection </h1>
            <div className='flex flex-wrap justify-center gap-5'>
                {
                    watch?.map((element, idx) => <Card card={element} key={idx} id={idx}></Card>)
                }
            </div>
        </section>
    );
};

export default Cards;