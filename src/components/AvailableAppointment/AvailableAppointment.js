import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AvailableAppointmentCard from './AvailableAppointmentCard/AvailableAppointmentCard';
import { useQuery } from '@tanstack/react-query';
// import { useQuery } from 'react-query';

const AvailableAppointment = ({ selectDate }) => {
    const date = format(selectDate, 'PPP')

    // const [availableAppointments, setAvailableAppointments] = useState([]);
    // useEffect(() => {
    //     fetch(`http://localhost:5000/appointmentoptions?date=${date}`)
    //         .then((response) => response.json())
    //         .then((data) => setAvailableAppointments(data))
    // }, [date])


    const { data: availableAppointments = [], refetch } = useQuery({
        queryKey: ["availableAppointments", date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appointmentoptions?date=${date}`)
            const data = await res.json()
            return data;
        }
    })

    return (
        <div className='my-20'>
            <h1 className='mb-10 mt-20 text-secondary font-semibold'>Your Selected Date : {date}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6'>
                {availableAppointments.map((availableAppointment => <AvailableAppointmentCard
                    key={availableAppointment._id}
                    availableAppointment={availableAppointment}
                    selectDate={selectDate}
                    refetch={refetch}
                ></AvailableAppointmentCard>))}
            </div>
        </div>
    );
};

export default AvailableAppointment;