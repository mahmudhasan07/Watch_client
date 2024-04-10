import Aos from 'aos';
import React, { useEffect, useRef, useState } from 'react';
import { animate, motion, useAnimation } from 'framer-motion';
import "./Card.css"
import { useNavigate } from 'react-router-dom';
import { useInView } from "react-intersection-observer";
// import { motion } from "framer-motion";

const Card = ({ card, id }) => {
    // console.log(id + 1);
    const navigate = useNavigate()
    const note = card?.Watch_note

    const control = useAnimation()
    const [ref, inView] = useInView()
    // console.log(note);
    // const newarray = note.split(".")
    // console.log(newarray);

    // useEffect(() => {
    //     AOS.init()
    // }, 
    const squareVariants = {
        visible: { x: 0, opacity: 1 },
        hidden: { x: -((id + 1) * 300), opacity: 0 }
    }
    return (

        <motion.div variants={squareVariants} initial={"hidden"} animate={"visible"} transition={{ duration: 2 }}
            id='card' className={`card w-80 h-80 text-white space-y-2 rounded-xl`}>
            <img src={card?.Watch_image} id='card-img' className='h-full w-full object-cover rounded-lg' alt="" />
            <div id='cardinfo' className=' pt-5 text-center'>
                <h1 className='text-xl p-1 font-semibold'>Model: {card?.Watch_name}</h1>
                <h1 className='text-xl p-1 font-semibold'>Brand: {card?.Watch_brand}</h1>
                <h1 className='text-xl p-1 font-semibold'>Gender: {card?.Watch_gender}</h1>
                <h1 className='text-xl p-1 font-semibold'>Price: {card?.Watch_price}</h1>
                <button onClick={() => navigate(`/watches/model=${card?.Watch_name}`)} className='btn border-none text-white font-semibold text-lg' id='detailsBTN'>Details</button>
            </div>

        </motion.div>
    );
};

export default Card;