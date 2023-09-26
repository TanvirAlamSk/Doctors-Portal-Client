import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/UserContext/UserContext';

const MyAppointment = () => {
    const { user } = useContext(AuthContext);
    const { data: myBooked = [], refetch } = useQuery({
        queryKey: ["booking", user?.email],
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/bookings?email=${user?.email}`, {
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
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;