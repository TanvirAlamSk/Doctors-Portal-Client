import React from 'react';
import bgimg from "../../../assets/images/appointment.png"

const Contract = () => {
    return (
        <div style={{ backgroundImage: `url(${bgimg})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }} className=' my-20'>
            <h6 className='text-secondary pt-10 font-medium'>Contact Us</h6>
            <h3 className='text-3xl font-base mb-8 mt-3 text-white'>Stay connected with us</h3>
            <input className='w-5/6 md:w-1/5 h-8 rounded pl-4 text-sm' placeholder='Email Address'></input>
            <br />
            <input className='my-5 w-5/6 md:w-1/5 h-8 rounded pl-4 text-sm' placeholder='Subject'></input>
            <br />
            <textarea className='w-5/6 md:w-1/5 h-20 rounded pl-4 pt-2 text-sm' placeholder='Your Massage'></textarea>
            <br></br>
            <button className='my-10 btn btn-secondary text-white px-6 py-0 '>Submit</button>
        </div >
    );
};

export default Contract;