import React, { useEffect, useState } from 'react';

const Review = () => {
    const [sell, setsell] = useState(100);
    const [visit, setvisit] = useState(1000);
    const [review, setreview] = useState(0.00);

    useEffect(() => {
        let value1 = 1000
        let value2 = 0.00
        let value3 = 1000
        setInterval(() => {
            value1 = value1 + 10
            if(value1 <100010){
                setvisit(value1)
            }else{
                clearInterval()
            }
        }, 5)

        setInterval(() => {
            value2 = (value2+ 0.10)
            // console.log(value2.toFixed(2));
            if(value2 < 4.7){
                setreview(value2.toFixed(2))
            }else{
                clearInterval()
            }

        }, 700);
        setInterval(() => {
            value3 = value3+10
            if(value3 <10010){
                setsell(value3)

            }else{
                clearInterval()
            }

        }, 50);

    }, []);
    return (
        <section className='mt-8 relative w-10/12 rounded-2xl mx-auto py-10  font-semibold  text-[#FC6F2F] bg-[#515839]'>
            <div className='flex justify-around pb-5 top-5  bg-[#515839] rounded-2xl absolute w-full'>
            <div className='text-4xl text-center'>
                <h1>{visit}<span>+</span></h1>
                <h1>Customer Visited</h1>
            </div>
            <div className='text-4xl text-center'>
                <h1>{review}<span>⭐+</span></h1>
                <h1>Customer Reviewed</h1>
            </div>
            <div className='text-4xl text-center'>
                <h1>{sell}<span>+</span></h1>
                <h1>Customer Purchased</h1>
            </div>
            </div>
        </section>
    );
};

export default Review;