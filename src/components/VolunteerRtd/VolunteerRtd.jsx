import { useState } from "react";
import { MdCancel,  } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const VolunteerRtd = () => {

    const mylists = useLoaderData();
    const [users, setUsers] = useState(mylists)


    const handleCancel = id => {
        fetch(`https://assignment-11-server-side-gamma-steel.vercel.app/request/${id}`, {
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
                        confirmButtonText: "Yes, Cancel it!"
                    }).then((result) => {
                        if (result.isConfirmed) {
                            Swal.fire({
                                title: "Cancel",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    });
                    //remove the user from the UI
                    const requestUser = users.filter(user => user._id !== id);
                    setUsers(requestUser);
                }
            })
    }





    return (
        <div className="container px-4 mx-auto mt-8 mb-8">
        <div>
            <div className=" overflow-x-auto ">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr >
                            <th>1</th>
                            <th>Status:</th>
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
                                <td>{user.status}</td>
                                <td>{user.post}</td>
                                <td>{user.email}</td>
                                <td>{user.description}</td>
                                <td>{user.date}</td>
                                <td className="gap-2">
                                    <button onClick={() => handleCancel(user._id)}
                                        className=" text-red-600 hover:bg-red-400"><MdCancel></MdCancel> </button>
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

export default VolunteerRtd;