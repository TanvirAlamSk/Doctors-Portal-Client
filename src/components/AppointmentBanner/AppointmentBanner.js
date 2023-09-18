import React from 'react';
import { DayPicker } from 'react-day-picker';
import chair from "../../assets/images/chair.png"
// import bgImg from "../../assets/images/bg.png"


const AppointmentBanner = ({ selectDate, setSelectDate }) => {
    return (
        <div className=''>
            <div className='main-section flex flex-col-reverse md:flex-row justify-center items-center gap-12 py-8 md:py-24'>
                <span className=''>
                    <DayPicker
                        mode='single'
                        selected={selectDate}
                        onSelect={setSelectDate}
                    >
                    </DayPicker>

                </span>
                <div className='w-full  md:w-2/5 '>
                    <img className='md:ml-6' src={chair} alt=''></img>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;