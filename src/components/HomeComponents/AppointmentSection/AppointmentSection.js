import React from 'react';
import doctorImg from '../../../assets/images/doctor-small.png';
import "./AppointmentSection.css"

const AppointmentSection = () => {
    return (
        <div className='appointment-section flex flex-col md:flex-row justify-center items-center mt-32 mb-20 mx-0 w-full'>
            <div className='text-right hidden md:block'>
                <img className='w-3/4 -mt-16 inline-block' src={doctorImg} alt=''></img>
            </div>
            <div className='p-6 md:p-0 md:pr-8 text-left text-white w-full md:w-1/2'>
                <h6 className='text-secondary font-bold'>Appointment</h6>
                <h2 className='text-3xl font-semibold my-8'>Make an appointment Today</h2>
                <p className=''>One of the mainstays of life is making and keeping appointments. Many people consider “an appointment” to mean a doctor’s visit or a job interview or other more formal. However, it is important to realize that such activities as meeting a friend for lunch or dinner, going to a concert with friends, or having work done on your flat are all appointments.</p>
                <button className='btn bg-gradient-to-r from-secondary to-primary text-semibold text-white border-none mt-5'>GET STARTED</button>
            </div>
        </div>
    );
};

export default AppointmentSection;