import { useState } from "react";
import { MdDelete, MdSystemUpdateAlt } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ManagePost = () => {
    const mylists = useLoaderData();
    const [users, setUsers] = useState(mylists)


    const handleDelete = id => {
        fetch(`https://assignment-11-server-side-gamma-steel.vercel.app/volunteer/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    Swal.fire({
                        title: "Are you sure?",
                        text: "You won't be able to revert this!",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, delete it!"
                    }).then((result) => {
                        if (result.isConfirmed) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    });
                    //remove the user from the UI
                    const remainingUsers = users.filter(user => user._id !== id);
                    setUsers(remainingUsers);
                }
            })
    }

    return (
        <div>
            <div className="text-center mt-4 mb-8">
                <h2 className="text-3xl font-bold">Manage My Post Page</h2>
                <p>Need to write an essay about volunteering? Community <br />
                 service is a truly hot topic! This argumentative essay about the <br /> importance of volunteerism contains everything necessary to inspire you!</p>
            </div>
            <div>
                <div className=" overflow-x-auto ">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr >
                                <th></th>
                                <th>Image:</th>
                                <th>post</th>
                                <th>Email:</th>
                                <th>description</th>
                                <th>date</th>
                                <th>Button</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                users.map(user => <tr key={user._id}>
                                    <th></th>
                                    <img className="w-24 gap-4" src={user.image} alt="" />
                                    <td>{user.post}</td>
                                    <td>{user.email}</td>
                                    <td>{user.description}</td>
                                    <td>{user.date}</td>
                                    <td className="gap-2">
                                        <button onClick={() => handleDelete(user._id)}
                                            className=" text-red-600 hover:bg-red-400"><MdDelete></MdDelete> </button>
                                        <Link to={`/updateVolunteer/${user._id}`}><button className="ml-2 text-green-700"><MdSystemUpdateAlt></MdSystemUpdateAlt> </button></Link>
                                    </td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManagePost;