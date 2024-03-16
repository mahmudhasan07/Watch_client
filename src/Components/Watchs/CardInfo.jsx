import React from 'react';
import { useParams } from 'react-router-dom';

const CardInfo = () => {
    const id = useParams()
    const split = id?.id.split('=')
    console.log(split);
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