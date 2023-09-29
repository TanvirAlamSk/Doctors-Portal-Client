import React, { useContext } from 'react';
import { format } from 'date-fns';
import { AuthContext } from '../../../context/UserContext/UserContext';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const notifyBookingSuccess = () => {
    return toast.success('Booking Successful.',
        {
            duration: 2000,
            position: "top-center"
        }
    )

}

const AvailableAppointmentCard = ({ availableAppointment, selectDate, refetch }) => {
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    const { name, slots, _id, price } = availableAppointment;
    const handelAppointment = (event) => {
        event.preventDefault()
        const form = event.target
        const date = event.target.date.value
        const slot = event.target.slot.value
        const patientName = form.patientname.value
        const phone = form.phone.value
        const email = form.email.value

        const booking = {
            treatment: name,
            date,
            slot,
            patientName,
            price,
            phone,
            email,

        }

        fetch("https://doctors-portal-server-green-xi.vercel.app/bookings", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(booking)
        })
            .then((responce) => responce.json())
            .then((data) => {
                if (data?.acknowledged) {
                    notifyBookingSuccess()
                    refetch()
                }
            })

        navigate("/appointment");
        event.target.reset()
    }

    return (
        <div className="card shadow-xl text-center">
            <div className="card-body items-center text-center">
                <h2 className="card-title text-secondary">{name}</h2>
                <p className='mt-2 mb-4'>{slots?.length > 0 ? slots?.length + " SPACES AVAILABLE" : "Try Another Day"}</p>
                <h5 className='font-semibold'>Price: <span className='text-primary'>${price}</span></h5>
                <div className="card-actions justify-Center">
                    <button className='btn bg-gradient-to-r from-secondary to-primary text-semibold text-white ' onClick={() => document.getElementById(`booking_modal${_id}`).showModal()} disabled={slots.length == 0}>Book Appointment</button>
                </div>
            </div>
            {/*  */}
            <dialog id={`booking_modal${_id}`} className="modal">
                <form onSubmit={handelAppointment} className="modal-box">
                    <div className='flex justify-between mb-12'>
                        <h3 className="font-bold text-lg">{name}</h3>
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle bg-slate-600 text-slate-400 absolute right-2">✕</button>
                        </form>
                    </div>

                    <input name="date" className='border-none w-full h-12 rounded-lg text-slate-600 bg-slate-200 pl-3' value={`${format(selectDate, 'PPP')}`} readOnly>
                    </input>

                    <select name="slot" className='border-none w-full my-6 h-12 rounded-lg bg-slate-200 pl-3'>
                        {slots.map((slot, i) => <option key={i} value={`${slot}`}>{slot}</option>)}
                    </select>

                    <input name='patientname' className='border-none w-full h-12 rounded-lg text-slate-600 bg-slate-200 pl-3' defaultValue={user?.displayName}>
                    </input>

                    <input name='phone' type='number' className='border-none w-full my-6  h-12 rounded-lg text-slate-600 bg-slate-200 pl-3' placeholder='Phone Number' required>
                    </input>

                    <input name='email' className='border-none w-full h-12 rounded-lg text-slate-600 bg-slate-200 pl-3' defaultValue={user?.email} readOnly>
                    </input>

                    {/* <form method="dialog" type='submit' className='w-full mt-5'> */}
                    <input type='submit' htmlFor={`booking_modal${_id}`} className=' border-none w-full h-12 mt-5 rounded-lg bg-slate-600 text-slate-200 pl-3 ' value="Submit">
                        {/* Submit */}
                    </input>

                    {/* </form> */}
                </form>
            </dialog>
            {/*  */}
        </div>
    );
};

export default AvailableAppointmentCard;