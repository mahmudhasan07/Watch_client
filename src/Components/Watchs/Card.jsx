import Aos from 'aos';
import React, { useEffect, useRef, useState } from 'react';
import { animate, motion, useInView } from 'framer-motion';
import "./Card.css"

const Card = ({ card, id }) => {
    console.log(id);
    return (
        <div

            className={`card w-72 h-80 border-2 relative  text-white space-y-2 rounded-xl`}>
            <img src={card?.Watch_image} id='card-img' className=' h-full w-full object-cover rounded-lg' alt="" />
            <div id='cardinfo'>
                <h1>{card?.Watch_name}</h1>
                <h1>{card?.Watch_brand}</h1>
                <h1>{card?.Watch_gender}</h1>
                <h1>{card?.Watch_price}</h1>
            </div>

        </div>
    );
};

export default Card;