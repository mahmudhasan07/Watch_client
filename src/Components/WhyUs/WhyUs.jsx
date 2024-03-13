import React from 'react';
import { MdOutlineSecurity } from "react-icons/md";
import { MdAssignmentReturn } from "react-icons/md";
import { MdWorkspacePremium } from "react-icons/md";



import "./why.css"

const WhyUs = () => {
    return (
        <section className='my-20'>
            <h1 className='text-5xl font-bold text-center my-10 text-[#515839]'>Our <span className='text-[#FC6F2F]'>Services</span></h1>
            <div className='flex justify-around'>
                <div className='relative z-50 w-fit py-5'>
                    <img id='IMG' src="https://i.ibb.co/PjqqfxS/Screenshot-2024-03-12-172217-removebg-preview.png" className='w-72 my-2 z-50 relative' alt="" />
                    <div className='w-12 absolute top-0 left-20 h-96 -skew-x-12 bg-[#515839]'></div>
                    <div className='w-12 absolute top-0 left-40 h-96 -skew-x-12 bg-[#FC6F2F]'></div>
                </div>
                <div className='text-3xl space-y-3 font-semibold'>
                    <div>
                        <h1>SAFE AND <br /> SECURE CHECKOUT</h1>
                    </div>
                    <div>
                        <h1>PREMIUM <br /> QUALITY PRODUCTS</h1>
                    </div>
                    <div>
                        <h1>7 DAY <br /> RETURN POLICY</h1>
                    </div>
                    <div>
                        <h1>FREE SHIPPING <br /> NATIONWIDE WITH 72 HOURS</h1>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;