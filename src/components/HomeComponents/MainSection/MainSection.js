import React from 'react';
import chair from "../../../assets/images/chair.png"
import "./MainSection.css"

const MainSection = () => {
    return (
        <div className='main-section flex flex-col-reverse md:flex-row justify-between items-center gap-5 py-8 md:py-24'>
            <div className='w-full md:w-1/2 text-left'>
                <h2 className='text-3xl text-black md:text-5xl font-bold my-7'>Your New Smile Starts Here</h2>
                <p className='my-5 text-open-sans text-slate-500'>We custom-make veneers for trusted dentists so you get the most beautiful, natural-looking smile.</p>
                <button className='btn bg-gradient-to-r from-secondary to-primary text-semibold text-white'>GET STARTED</button>
            </div>
            <div className='w-full  md:w-1/2'>
                <img src={chair} alt=''></img>
            </div>
        </div>
    );
};

export default MainSection;