import Aos from 'aos';
import React, { useEffect, useRef, useState } from 'react';
import { animate, motion, useInView } from 'framer-motion';

const Card = ({ card, id }) => {
    console.log(id);
    return (
        <motion.div initial={{ y: -80, opacity:0 }} animate={{y:0, opacity:1}}  transition={{delay:1.5, duration:1.5,when:}} viewport={{ once: false, amount: 1 }}
            className={`w-72 border-2 text-white space-y-2 rounded-xl`}>
            <img src={card?.image} alt="" />
            <h1 className='text-2xl font-bold'>{card?.title}</h1>
            <h1 className='text-2xl font-bold'>{card.name}</h1>
        </motion.div>
    );
};

export default Card;