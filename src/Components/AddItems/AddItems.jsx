
import './AddItems.css'
const AddItems = () => {


    return (
        <section className="h-screen">
                <h1 className='text-4xl font-bold text-center text-white my-12'>Add Your Watches</h1>
            <div className="bg-gray-950  flex items-center p-5 justify-center w-fit mx-auto">
                <form action="" className="text-white space-y-3">
                    <div className="flex flex-wrap gap-10">
                        <div className='space-y-1'>
                            <label htmlFor="" className="text-lg font-semibold">Watch Name</label> <br />
                            <input type="text" className="2 w-80 bg-black rounded-2xl p-1" />
                        </div>
                        <div className='space-y-1'>
                            <label htmlFor="" className="text-lg font-semibold">Watch Brand Name</label> <br />
                            <input type="text" className=" w-80 bg-black rounded-2xl p-1" />
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-10">
                        <div className='space-y-1'>
                            <label htmlFor="" className="text-lg font-semibold">Watch Price</label> <br />
                            <input type="text" className=" w-80 bg-black rounded-2xl p-1" />
                        </div>
                        <div className='space-y-1'>
                            <label htmlFor="" className="text-lg font-semibold">Type of Gender</label> <br />
                            <select name="" id="" className=" w-80 bg-black rounded-2xl p-1">
                                <option value="men">Men</option>
                                <option value="women">Women</option>
                                <option value="Kids">Kids</option>
                            </select>
                        </div>
                    </div>
                    <div className="">
                        <label htmlFor="" className='text-lg font-semibold'>Watch Description</label>
                        <div className="p-2">
                        <textarea name="" className="w-full rounded-2xl bg-black p-2" id=""  rows="10"></textarea>
                        </div>
                    </div>
                    <div>
                        <button id="submitBTN" className=" bg-transparent">Submit</button>
                    </div>
                </form>

            </div>
            
        </section>
    );
};

export default AddItems;