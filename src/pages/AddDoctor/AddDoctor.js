import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const AddDoctor = () => {
    const { handleSubmit, register, formState: { errors } } = useForm()
    const imageServerKey = process.env.REACT_APP_imgBBKey

    const handelAddDoctor = (data) => {
        const imgFrom = new FormData()
        imgFrom.append("image", data.image[0])
        fetch(`https://api.imgbb.com/1/upload?key=${imageServerKey}`, {
            method: "POST",
            body: imgFrom
        })
            .then((response) => response.json())
            .then((imgData) => {
                if (imgData.success) {
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        image: imgData.data.url
                    }

                    fetch("https://doctors-portal-server-green-xi.vercel.app/doctors", {
                        method: "POST",
                        headers: {
                            "content-type": "application/json",
                            authorization: `Bearer  ${localStorage.getItem("doctors-portal-token")}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then((response) => response.json())
                        .then((data) => {
                            if (data.acknowledged) {
                                toast.success("Add A New Doctor Successfully", {
                                    duration: 3000,
                                    position: "top-center"
                                })
                            }
                        })
                }
            })
    }
    return (
        <div className='mx-5'>
            <h3 className='text-left text-2xl'>Add A New Doctor</h3>
            <div className=' flex justify-center'>
                <form onSubmit={handleSubmit(handelAddDoctor)} className='shadow-xl p-10  lg:w-96'>
                    <div className="form-control w-full">
                        <label className="label font-semibold">
                            Name
                        </label>
                        <input {...register("name", { required: "Name is required" })} type='text' className="input input-bordered w-full max-w-xs"></input>
                        {
                            errors.name &&
                            <small className='text-red-500 mt-1 text-left'>{errors.name?.message}</small>
                        }
                    </div>
                    <div className="form-control w-full">
                        <label className="label font-semibold">Email</label>
                        <input {...register("email", { required: "Email Address is required" })} className='input input-bordered w-full max-w-xs'></input>
                        {
                            errors.email &&
                            <small className='text-red-500 mt-1 text-left'>{errors.email?.message}</small>
                        }

                    </div>
                    <div className="form-control w-full">
                        <label className="label font-semibold">Specialty</label>
                        <select {...register("specialty", { required: "Specialty is required " })} className="select select-bordered w-full max-w-xs">
                            <option value="Teeth Orthodontics">Teeth Orthodontics</option>
                            <option value="Cosmetic Dentistry">Cosmetic Dentistry</option>
                            <option value="Teeth Cleaning">Teeth Cleaning</option>
                            <option value="Cavity Protection">Cavity Protection</option>
                            <option value="Pediatric Dental">Pediatric Dental</option>
                            <option value="Oral Surgery">Oral Surgery</option>
                        </select>
                        {
                            errors.specialty &&
                            <small className='text-red-500 mt-1 text-left'>{errors.specialty?.message}</small>
                        }

                    </div>
                    <div className="form-control w-full">
                        <label className="label font-semibold">Photo</label>

                        <input type="file" {...register("image", { required: "Photo is required" })} className="file-input file-input-bordered file-input-success w-full max-w-xs" />
                        {
                            errors.image &&
                            <small className='text-red-500 mt-1 text-left'>{errors.image?.message}</small>
                        }

                    </div>
                    <div className="form-control w-full max-w-xs mt-6">
                        <input type='submit' className='btn btn-accent' value="Add A Doctor"></input>
                    </div>

                </form>
            </div>

        </div>
    );
};

export default AddDoctor;