import React, { useEffect, useState } from 'react';

const Review = () => {
    const [outlet, setoutlet] = useState(0);
    const [visit, setvisit] = useState(1000);
    const [review, setreview] = useState(0);

    useEffect(() => {
        
    }, [visit]);
    let value = 1000
    // setInterval(() => {
    //     // const count = 
    //     setvisit(visit +10)
    //     console.log(visit);
    //     // setvisit(value)
    // }, 1000)
    console.log(visit);
    return (
        <section>
            <div className='text-4xl'>
                <h1>{
                    // visit
                }</h1>
            </div>
        </section>
    );
};

export default Review;