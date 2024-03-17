import Aos from 'aos';
import React, { useEffect, useRef, useState } from 'react';
import { animate, motion, useInView } from 'framer-motion';
import "./Card.css"
import { useNavigate } from 'react-router-dom';

const Card = ({ card, id }) => {
    // console.log(id);
    const navigate = useNavigate()
    const note = card?.Watch_note
    // console.log(note);
    // const newarray = note.split(".")
    // console.log(newarray);
    return (
        <div

           id='card' className={`card w-80 h-80   text-white space-y-2 rounded-xl`}>
            <img src={card?.Watch_image} id='card-img' className='h-full w-full object-cover rounded-lg' alt="" />
            <div id='cardinfo' className=' pt-5 text-center'>
                <h1 className='text-xl p-1 font-semibold'>Model: {card?.Watch_name}</h1>
                <h1 className='text-xl p-1 font-semibold'>Brand: {card?.Watch_brand}</h1>
                <h1 className='text-xl p-1 font-semibold'>Gender: {card?.Watch_gender}</h1>
                <h1 className='text-xl p-1 font-semibold'>Price: {card?.Watch_price}</h1>
                <button onClick={()=> navigate(`/watches/model=${card?.Watch_name}`)} className='btn border-none text-white font-semibold text-lg' id='detailsBTN'>Details</button>
            </div>

        </div>
    );
};

export default Card;