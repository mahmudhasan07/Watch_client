import Aos from 'aos';
import React, { useEffect, useRef, useState } from 'react';
import { animate, motion, useInView } from 'framer-motion';
import "./Card.css"

const Card = ({ card, id }) => {
    console.log(id);
    const note = card?.Watch_note
    // console.log(note);
    const newarray = note.split(".")
    console.log(newarray);
    return (
        <div

           id='card' className={`card w-96 h-96   text-white space-y-2 rounded-xl`}>
            <img src={card?.Watch_image} id='card-img' className='h-96 w-full object-cover rounded-lg' alt="" />
            <div id='cardinfo' className='px-1'>
                <h1 className='text-xl p-1 font-semibold'>Model: {card?.Watch_name}</h1>
                <h1 className='text-xl p-1 font-semibold'>Brand: {card?.Watch_brand}</h1>
                <h1 className='text-xl p-1 font-semibold'>Gender: {card?.Watch_gender}</h1>
                <h1 className='text-xl p-1 font-semibold'>Price: {card?.Watch_price}</h1>
                <h1 className='text-lg p-1'>Note: {card?.Watch_note}</h1>
            </div>

        </div>
    );
};

export default Card;