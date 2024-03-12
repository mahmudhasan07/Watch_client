import React, { useEffect, useState } from 'react';

const Review = () => {
    const [outlet, setoutlet] = useState(0);
    const [visit, setvisit] = useState(1000);
    const [review, setreview] = useState(0);

    useEffect(() => {
        const outlettimer = setInterval(() => {
            const count = visit+1
            setvisit(count)
        },100)
    }, [visit]);
    return (
        <section>
            <div>
                {
                    visit
                }
            </div>
        </section>
    );
};

export default Review;