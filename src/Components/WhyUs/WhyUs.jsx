import React from 'react';
import { MdOutlineSecurity } from "react-icons/md";
import { MdAssignmentReturn } from "react-icons/md";
import { MdWorkspacePremium } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";




import "./why.css"

const WhyUs = () => {
    return (
        <section className=' mt-16'>
            <h1 className='text-5xl font-bold text-center mb-10 text-[#515839]'>Our <span className='text-[#FC6F2F]'>Services</span></h1>
            <div className='flex flex-wrap lg:my-16 md:my-10 my-6 justify-around'>
                <div className='relative z-50 w-fit py-5'>
                    <img id='IMG' src="https://i.ibb.co/PjqqfxS/Screenshot-2024-03-12-172217-removebg-preview.png" className='w-72 my-2 z-50 relative' alt="" />
                    <div className='w-12 absolute top-0 left-20 h-96 -skew-x-12 bg-[#515839]'></div>
                    <div className='w-12 absolute top-0 left-40 h-96 -skew-x-12 bg-[#FC6F2F]'></div>
                </div>
                <div className='text-3xl space-y-5 text-[#515839] font-semibold'>
                    <div className='flex gap-5'>
                        <MdOutlineSecurity  className='text-6xl text-[#FC6F2F]'></MdOutlineSecurity>
                        <h1>SAFE AND <br /> SECURE CHECKOUT</h1>
                    </div>
                    <div className='flex gap-5'>
                        <MdWorkspacePremium className='text-6xl text-[#FC6F2F]'></MdWorkspacePremium>
                        <h1>PREMIUM <br /> QUALITY PRODUCTS</h1>
                    </div>
                    <div className='flex gap-5'>
                        <MdAssignmentReturn className='text-6xl text-[#FC6F2F]'></MdAssignmentReturn>
                        <h1>7 DAY <br /> RETURN POLICY</h1>
                    </div>
                    <div className='flex gap-5'>
                        <FaShippingFast className='text-6xl text-[#FC6F2F]'></FaShippingFast>
                        <h1>FREE SHIPPING  NATIONWIDE <br /> WITH 72 HOURS</h1>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;