import { motion } from "framer-motion"
import './AddItems.css'
import { useState } from "react";
import axios from "axios";
import useAxios, { AxiosSecure } from "../Axios/useAxios";
import Swal from 'sweetalert2'
// import axios from "axios";
const AddItems = () => {

    const [previewimage, setpreviewimage] = useState(null);
    const axiosLink = useAxios(AxiosSecure)
    // console.log();

    const handleAddWatch = (e) => {
        e.preventDefault()
        const from = e.target

        const name = from.name.value
        const brand = from.brand.value
        const price = from.price.value
        const gender = from.gender.value
        const image = from.upload.files[0]
        const note = from.note.value
        // const data = { name, brand, price, gender, img, note }
        // console.log(upload);

        if (image) {
            axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_API}`, { image },
                {
                    headers: {
                        "content-type": "multipart/form-data"
                    }
                })
                .then(res => {
                    console.log(res.data.data.display_url);
                    const imgURL = res?.data?.data?.display_url

                    const data = { name, brand, price, gender, imgURL, note }

                    axiosLink.post("/products", data)
                        .then(res => {
                            console.log(res);
                            Swal.fire({
                                title: "Successfully Added",
                                text: "Your Product is successfully added",
                                icon: "success"
                              });

                        })
                        .catch(error => {
                            console.log(error);
                        })


                })
                .catch(error => {
                    console.log(error);
                })
        }


    }

    const handleimage = (e) => {
        const img = e.target.files[0]
        console.log(img);
        const imageurl = URL.createObjectURL(img)
        setpreviewimage(imageurl)

    }


    return (
        <section className="my-10">
            <h1 className='text-4xl font-bold text-center text-white mb-10'>Add Your Watches</h1>
            <motion.div initial={{y:"-500%", opacity:0}} animate={{y:0, opacity:1}} transition={{duration:1.5, ease:"backOut"}} id="sectionDiv" className="bg-gray-950 rounded-2xl flex items-center p-5 justify-center w-fit mx-auto">
                <form onSubmit={handleAddWatch} action="" className="text-white space-y-3">
                    <div className="flex flex-wrap gap-10">
                        <div className='space-y-1'>
                            <label htmlFor="" className="text-lg font-semibold">Watch Name</label> <br />
                            <input type="text" name="name" className="2 w-80 bg-black rounded-2xl p-1" />
                        </div>
                        <div className='space-y-1'>
                            <label htmlFor="" className="text-lg font-semibold">Watch Brand Name</label> <br />
                            <input type="text" name="brand" className=" w-80 bg-black rounded-2xl p-1" />
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-10">
                        <div className='space-y-1'>
                            <label htmlFor="" className="text-lg font-semibold">Watch Price</label> <br />
                            <input type="text" name="price" className=" w-80 bg-black rounded-2xl p-1" />
                        </div>
                        <div className='space-y-1'>
                            <label htmlFor="" className="text-lg font-semibold">Type of Gender</label> <br />
                            <select name="gender" id="select" className=" w-80 bg-black rounded-2xl p-1">
                                <option className=" focus:bg-orange-600" value="men">Men</option>
                                <option className=" focus:bg-orange-600" value="women">Women</option>
                                <option className=" focus:bg-orange-600" value="Kids">Kids</option>
                            </select>
                        </div>
                    </div>
                    <div className=" flex flex-wrap gap-10">
                        <div className="">
                            <label htmlFor="" className='text-lg font-semibold'>Watch Description</label> <br />
                            <input onChange={handleimage} name="upload" type="file" className=" w-80 bg-black rounded-2xl p-1" />
                        </div>
                        <div className="">
                            <img src={previewimage} alt="" className="w-20" />
                        </div>
                    </div>
                    <div className="">
                        <label htmlFor="" className='text-lg font-semibold'>Watch Description</label>
                        <div className="p-2">
                            <textarea name="note" className="w-full rounded-2xl bg-black p-2" id="" rows="10"></textarea>
                        </div>
                    </div>
                    <div>
                        <button id="submitBTN" className=" bg-transparent">Submit</button>
                    </div>
                </form>

            </motion.div>

        </section>
    );
};

export default AddItems;