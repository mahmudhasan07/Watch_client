import React from 'react';
import watch from "../../../public/data.json"
import Card from './Card';
const Cards = () => {
    return (
        <section>
            <div>
                {
                    watch.map((element,idx)=><Card card={element} key={idx} id={idx}></Card>)
                }
            </div>
        </section>
    );
};

export default Cards;