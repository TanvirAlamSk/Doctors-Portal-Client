import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AvailableAppointmentCard from './AvailableAppointmentCard/AvailableAppointmentCard';

const AvailableAppointment = ({ selectDate }) => {
    const [availableAppointments, setAvailableAppointments] = useState([]);

    useEffect(() => {
        fetch("appointmentOptions.json")
            .then((response) => response.json())
            .then((data) => setAvailableAppointments(data))
    }, [])

    return (
        <div className='my-10'>
            <h1 className='mb-10 mt-20 text-secondary font-semibold'>Your Selected Date : {format(selectDate, 'PPP')}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6'>
                {availableAppointments.map((availableAppointment => <AvailableAppointmentCard
                    key={availableAppointment._id}
                    availableAppointment={availableAppointment}
                    selectDate={selectDate}
                ></AvailableAppointmentCard>))}
            </div>
        </div>
    );
};

export default AvailableAppointment;