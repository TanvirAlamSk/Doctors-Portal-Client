import React from 'react';
import { format } from 'date-fns';

const AvailableAppointmentCard = ({ availableAppointment, selectDate }) => {
    const { name, slots, _id } = availableAppointment;
    const handelAppoinment = () => {

    }
    return (
        <div className="card shadow-xl text-center">
            <div className="card-body items-center text-center">
                <h2 className="card-title text-secondary">{name}</h2>
                <p>{slots?.[0]}</p>
                <div className="card-actions justify-Center">
                    <button className='btn bg-gradient-to-r from-secondary to-primary text-semibold text-white mt-10' onClick={() => document.getElementById(`my_modal${_id}`).showModal()}>Book Appointment</button>
                </div>
            </div>
            {/*  */}
            <dialog id={`my_modal${_id}`} className="modal">
                <div className="modal-box">
                    <div className='flex justify-between mb-12'>
                        <h3 className="font-bold text-lg">{name}</h3>
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle bg-slate-600 text-slate-400 absolute right-2">✕</button>
                        </form>
                    </div>
                    <input className='border-none w-full h-12 rounded-lg text-slate-600 bg-slate-200 pl-3' value={`${format(selectDate, 'PPP')}`} readOnly></input>
                    <select className='border-none w-full my-6 h-12 rounded-lg bg-slate-200 pl-3'>
                        {slots.map((slot, i) => <option key={i} >{slot}</option>)}
                    </select>

                    <input className='border-none w-full h-12 rounded-lg text-slate-600 bg-slate-200 pl-3' placeholder='Full Name'></input>
                    <input className='border-none w-full my-6  h-12 rounded-lg text-slate-600 bg-slate-200 pl-3' placeholder='Phone Number'></input>
                    <input className='border-none w-full h-12 rounded-lg text-slate-600 bg-slate-200 pl-3' placeholder='Email'></input>

                    <div className="modal-action">
                        <form method="dialog" className='w-full'>
                            <button onClick={handelAppoinment} className=' border-none w-full h-12 rounded-lg bg-slate-600 text-slate-200 pl-3 ' value="Submit">Submit</button>
                        </form>
                    </div>
                </div>
            </dialog>
            {/*  */}
        </div>
    );
};

export default AvailableAppointmentCard;