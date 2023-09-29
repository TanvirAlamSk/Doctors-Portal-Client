import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const Users = () => {

    const { data: allUsers = [], refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const response = await fetch("https://doctors-portal-server-green-xi.vercel.app/users")
            const data = response.json();
            return data;
        }
    })

    const handelMakeAdmin = (id) => {
        fetch(`https://doctors-portal-server-green-xi.vercel.app/users/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("doctors-portal-token")}`
            },
        })
            .then((response) => response.json())
            .then((data) => {
                if (data?.acknowledged) {
                    toast.success("Make Admin Successful", {
                        duration: 2000,
                        position: "top-center"
                    })
                    refetch()
                }

            })
    }

    return (
        <div className='mx-5'>
            <h3 className='text-2xl text-left'>All Users</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Promotion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {
                            allUsers.map((oneUser, i) => <tr>
                                <th>{i + 1}</th>
                                <td>{oneUser.name}</td>
                                <td>{oneUser.email}</td>
                                {
                                    oneUser?.role !== "Admin" ?

                                        <tb className="btn btn-sm text-white btn-secondary my-1  py-0">
                                            <button onClick={() => handelMakeAdmin(oneUser?._id)}>Make Admin</button>
                                        </tb>
                                        :
                                        <td></td>
                                }
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;