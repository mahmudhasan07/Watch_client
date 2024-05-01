import React, { useEffect, useRef, useState } from 'react';

import Card from './Card';
import useAxios, { AxiosSecure } from '../Axios/useAxios';
const Cards = () => {
    const axiosLink = useAxios(AxiosSecure)
    const search = useRef()
    // const sort =  useRef()
    const [loading, setloading] = useState(false)
    const [watch, setwatch] = useState();
    const [sort, setsort] = useState("");
    useEffect(() => {
        setloading(true)
        axiosLink.get(`/watches?data=${sort}`)
            .then(res => {
                // console.log(res);
                setwatch(res?.data)
                setloading(false)

            })
            .catch(error => {
                console.log(error);
            })
    }, [axiosLink, sort]);
    // console.log(watch);
    const handlesearch = (e) => {
        e.preventDefault()
        const data = search.current.value
        console.log(data);
        setloading(true)
        axiosLink.get(`/search/${data}`)
            .then(res => {
                console.log(res.data.length);
                setwatch(res?.data)
                setloading(false)
            })
            .catch(error => {
                console.log(error);
            })

        if (data.length < 1) {
            setloading(true)
            axiosLink.get(`/watches?data=${sort}`)
                .then(res => {
                    // console.log(res);
                    setwatch(res?.data)
                    setloading(false)

                })
                .catch(error => {
                    console.log(error);
                })
        }

    }

    const handlesort = (e) => {
        e.preventDefault()
        const value = e.target.value
        console.log(value);
        setsort(value)

    }
    return (
        <section>

            <h1 className='text-5xl permanent-marker-regular font-extrabold text-center my-7 text-[#515839]'>Watches <span className='text-[#FC6F2F]'>Collection</span> </h1>
            <div className='flex justify-center gap-3'>
                <input ref={search} type="text" className='lg:w-96 md:w-80 w-72 border-2 bg-black text-white p-2 rounded-2xl' />
                <button onClick={handlesearch} className='btn border-none hover:bg-[#FC6F2F] bg-[#515839] text-white'>Search</button>
            </div>
            <div className='flex justify-end mr-10'>
                <select onChange={handlesort} name="sort" id="" className='p-1 text-lg font-semibold rounded-xl'>
                    <option value="default">Default</option>
                    <option value="asc">Low to High</option>
                    <option value="desc">High to Low</option>
                </select>
            </div>
            <div className='flex flex-wrap justify-center gap-16 my-10'>
                {
                    loading == true ?
                        <p className='h-screen text-5xl my-auto'>loading</p>
                        :
                        watch?.length > 0 ?
                            watch?.map((element, idx) => <Card card={element} key={idx} id={idx}></Card>)
                            :
                            <h1 className='text-4xl font-bold my-10'>No Result Found</h1>

                } 
            </div>
        </section>
    );
};

export default Cards;