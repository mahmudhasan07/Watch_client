import React, { useState } from 'react';
import "./service.css"

const Services = () => {
    const [count, setcount] = useState(1000);

    const timer = setInterval(() => {
        setcount(count+10)
    }, 1000);
    return (
        <section className='my-10'>

            <div id='carddiv' className='h-60 border-2 w-60 text-center text-3xl text-white items-center  mx-auto bg-[#515839]'>
            {count}
                {/* <img id='img' src="https://i.ibb.co/c64L2sJ/432044893-1400818297981947-8508382469092611163-n.jpg" className='w-40 mx-auto' alt="" /> */}
            </div>

            <button onClick={()=>setcount(count+10)} className='btn'>Add</button>



            
        </section>
    );
};

export default Services;