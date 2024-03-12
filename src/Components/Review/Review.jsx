import React, { useEffect, useState } from 'react';

const Review = () => {
    const [outlet, setoutlet] = useState(0);
    const [visit, setvisit] = useState(1000);
    const [review, setreview] = useState(0);

    useEffect(() => {
        const outlettimer = setInterval(() => {

        })
    }, []);
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