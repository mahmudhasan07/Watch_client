import React, { useEffect, useState } from 'react';

const Review = () => {
    const [outlet, setoutlet] = useState(0);
    const [visit, setvisit] = useState(1000);
    const [review, setreview] = useState(0);

    useEffect(() => {
        setInterval(() => {
            const count = visit + 10
            setvisit(count)
        }, 1000)
    }, [visit, setvisit]);
    return (
        <section>
            <div className='text-4xl'>
                <h1>{
                    visit
                }</h1>
            </div>
        </section>
    );
};

export default Review;