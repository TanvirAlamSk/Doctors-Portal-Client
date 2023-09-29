import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/UserContext/UserContext';
import { Link } from 'react-router-dom';

const MyAppointment = () => {
    const { user } = useContext(AuthContext);
    const { data: myBooked = [], refetch } = useQuery({
        queryKey: ["booking", user?.email],
        queryFn: async () => {
            const response = await fetch(`https://doctors-portal-server-green-xi.vercel.app/bookings?email=${user?.email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem("doctors-portal-token")}`
                }
            })
            if (response.status == 401 || response.status == 403) {
                const data = []
                return data;
            }
            const data = await response.json();
            return data;
        }
    })


    return (
        <div className='mx-5'>
            <h3 className='text-2xl text-left'>My Appointment</h3>
            <div className=" w-full">
                <table className="table">
                    <thead>
                        <tr>
                            <th>NO</th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Slot</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myBooked?.map((book, i) => <tr key={i}>
                                <th>{i + 1}</th>
                                <td>{book.patientName}</td>
                                <td>{book.treatment}</td>
                                <td>{book.date}</td>
                                <td>{book.slot}</td>
                                <td>
                                    {book.price && !book.paid ?
                                        <Link to={`/dashboard/payment/${book._id}`}>
                                            <button className='btn btn-xs btn-secondary text-white'>
                                                Pay
                                            </button>
                                        </Link>
                                        :
                                        <p className='text-green-500 font-medium'>Paid</p>
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;