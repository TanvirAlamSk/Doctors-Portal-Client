import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import ModalItem from '../../components/ModalItem/ModalItem';
import toast from 'react-hot-toast';

const ManageDoctor = () => {
    const [doctorInfo, setDoctorInfo] = useState("")

    const { data: doctors = [], isLoading, refetch } = useQuery({
        queryKey: ["doctors"],
        queryFn: async () => {
            const response = fetch("http://localhost:5000/doctors");
            const data = (await response).json()
            return data;
        }
    })
    const handelDoctor = (doctorInfo) => {
        // const id = doctorInfo._id
        fetch(`http://localhost:5000/doctors/${doctorInfo._id}`, {
            method: "DELETE",
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.acknowledged) {
                    toast.success(`Doctor ${doctorInfo.name} Delete Successfully`, {
                        duration: 2500,
                    })
                    refetch()
                }
            })
    }

    return (
        <div className='mx-5'>
            <h3 className='text-left text-2xl'>Manage doctor</h3>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>NO.</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>E.mail</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, i) => <tr key={i}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={doctor?.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {doctor.name}
                                </td>
                                <td>
                                    {doctor.email}
                                </td>
                                <td>
                                    {doctor.specialty}
                                </td>
                                <td>
                                    <label onClick={() => setDoctorInfo(doctor)} htmlFor="my_modal_6" className='btn btn-sm bg-red-500 text-white hover:bg-red-700'>Delete</label>
                                </td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            <ModalItem doctorInfo={doctorInfo} handelDoctor={handelDoctor}></ModalItem>
        </div>
    );
};

export default ManageDoctor;