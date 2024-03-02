import Aos from 'aos';
import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const Card = ({ card, id }) => {
    console.log(id);
    return (
        <motion.div initial={{ x: -800 }}   animate={{x:0}}  viewport={{ once: false, amount: 1 }}
            className={`w-72 border-2 text-white space-y-2 rounded-xl`}>
            <img src={card?.image} alt="" />
            <h1 className='text-2xl font-bold'>{card?.title}</h1>
            <h1 className='text-2xl font-bold'>{card.name}</h1>
        </motion.div>
    );
};

export default Card;