
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const VolenteerSectonDetails = () => {
    const { user, } = useContext(AuthContext);

    const handleRequest = event => {
        event.preventDefault();

        const form = event.target;
        const description = form.description.value;
        const category = form.category.value;
        const location = form.text.value;
        const post = form.title.value;
        const date = form.date.value;
        const email = form.email.value;
        const status = form.status.value;

        const newRequest = { post, status, location, date, image, description, category, email, }
        console.log(newRequest);
        fetch('https://assignment-11-server-side-gamma-steel.vercel.app/request', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newRequest)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success',
                    text: 'Request Successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
            }
        })


    }
    
    


    const [card, setCard] = useState({})
    const { _id } = useParams()
    useEffect(() => {
        fetch('https://assignment-11-server-side-gamma-steel.vercel.app/volunteer')
            .then(res => res.json())
            .then(data => {
                const result = data.find(item => item._id == _id)
                setCard(result);
            })
    }, [_id])
    // console.log(card);

    const { post, location, date, image, description, category, } = card;


    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl w-full mt-10 mb-10 grid grid-cols-1 md:grid-cols-2 container px-4 mx-auto ">
                <figure><img className="w-full h-80" src={image} alt="Movie" /></figure>
                <div className="card-body w-full  ">
                    <h2 className="card-title text-4xl">Post Title: {post}</h2>
                    <h2 className="card-title text-3xl font-normal">Category: {category}</h2>
                    <h2 className="card-title text-2xl">Date: {date}</h2>
                    <p className="card-title text-2xl">description: {description}</p>
                    <div className="card-actions justify-end">
                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>Be a Volunteer</button>
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <div className="gadgetContainer pt-10 container px-4 mx-auto mb-4">
                                    <div className="shadow-lg p-5 border dark:bg-[#1a2641d5]">
                                        {/* Heading */}
                                        <div className="mt-5 mb-8">
                                            <p className="text-center text-3xl font-semibold">
                                                <span className="mr-3 text-[#FF497C]">
                                                    <i className="bx bxs-alarm-add"></i>
                                                </span>
                                                <span className="dark:text-white font-bold ">
                                                    Be a Volunteer page/Modal
                                                </span>
                                            </p>
                                        </div>
                                        {/* form */}
                                        <form onSubmit={handleRequest}>
                                            <div className="flex gap-8 ">
                                                <div className="flex-1">
                                                    <p>Image:</p>
                                                    <img className="w-44" src={image} alt="" />

                                                    <label className='text-gray-700 ' htmlFor='description'>
                                                        Description
                                                    </label>
                                                    <textarea
                                                        className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                                        name='description'
                                                        id='description'
                                                        defaultValue={description}
                                                        disabled
                                                    ></textarea>

                                                    <label
                                                        className="block mt-4 mb-2 dark:text-white"
                                                        htmlFor=" Location"
                                                    >
                                                        Location
                                                    </label>
                                                    <input
                                                        className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                                                        type="text"
                                                        placeholder=" Location "
                                                        id="text "
                                                        name="text"
                                                        defaultValue={location}
                                                        disabled
                                                    />
                                                    <label className='text-gray-700 ' htmlFor='emailAddress'>
                                                        Email Address
                                                    </label>
                                                    <input
                                                        id='emailAddress'
                                                        type='email'
                                                        name='email'
                                                        disabled
                                                        defaultValue={user?.email}
                                                        className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                                    />
                                                </div>
                                                {/* Right side */}
                                                <div className="flex-1">
                                                    <label className="block mb-2 dark:text-white" htmlFor="image">
                                                        Post Title
                                                    </label>
                                                    <input
                                                        className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                                                        type="title"
                                                        placeholder=" Post Title "
                                                        id="title"
                                                        name="title"
                                                        defaultValue={post}
                                                        disabled
                                                    />
                                                    <div className='flex flex-col gap-2 '>
                                                        <label className='text-gray-700 ' htmlFor='category'>
                                                            Category
                                                        </label>
                                                        <select
                                                            name='category'
                                                            id='category'
                                                            className='border p-2 rounded-md'
                                                            defaultValue={category}
                                                            disabled
                                                        >
                                                            <option value='healthcare'>healthcare</option>
                                                            <option value='Geducation'>Geducation</option>
                                                            <option value='social service'>social service</option>
                                                            <option value='animal welfare'>animal welfare</option>
                                                        </select>
                                                    </div>

                                                    <label
                                                        className="block mt-4 mb-2 dark:text-white"
                                                        htmlFor="cost"
                                                    >
                                                        Deadline
                                                    </label>
                                                    <input
                                                        className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                                                        type="date"
                                                        placeholder="Deadline  "

                                                        id="date"
                                                        name="date"
                                                        defaultValue={date}
                                                        disabled
                                                    />
                                                    <label className="block mb-2 dark:text-white" htmlFor="image">
                                                        Status
                                                    </label>
                                                    <input
                                                        className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                                                        type="title"
                                                        placeholder=" Status "
                                                        id="status"
                                                        name="status"

                                                    />
                                                </div>
                                            </div>

                                            <input
                                                className="px-4 w-full py-2 mt-4 rounded hover:bg-[#ab3154]  bg-black duration-200 text-white cursor-pointer font-semibold"
                                                type="submit"
                                                value="Request "
                                            />
                                        </form>
                                    </div>
                                </div>
                                <div className="modal-action">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn">Close</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                        <Link to="/"> <a href="#_" className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                            <button>Back Home</button>
                        </a></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VolenteerSectonDetails;