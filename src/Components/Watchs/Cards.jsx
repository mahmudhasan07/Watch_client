import React from 'react';
import watch from "../../../public/data.json"
import Card from './Card';
const Cards = () => {
    return (
        <section>
            <h1 className='text-3xl font-extrabold text-center my-10 '>Watches Collection </h1>
            <div className='flex flex-wrap justify-center gap-5'>
                {
                    watch.map((element,idx)=><Card card={element} key={idx} id={idx}></Card>)
                }
            </div>
        </section>
    );
};

export default Cards;