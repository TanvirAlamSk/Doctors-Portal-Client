import React from 'react';
import { useForm } from 'react-hook-form';

const AddDoctor = () => {
    const { handleSubmit, register, formState: { errors } } = useForm()

    const handelAddDoctor = (data) => {
        console.log(data.name)
    }
    return (
        <div className='mx-5'>
            <h3 className='text-left text-2xl'>Add A Doctor</h3>
            <div className=' flex justify-center'>
                <form onSubmit={handleSubmit(handelAddDoctor)} className='shadow-xl p-10 lg:w-96'>
                    <div className="form-control w-full">
                        <label className="label">
                            Name
                        </label>
                        <input {...register("name", { required: "Name is required" })} type='text' className="input input-bordered w-full max-w-xs"></input>
                        {
                            errors.name &&
                            <small className='text-red-500 mt-1 text-left'>{errors.name?.message}</small>
                        }
                    </div>
                    <div className="form-control w-full">
                        <label className="label">Email</label>
                        <input {...register("email", { required: "Email Address is required " })} className='input input-bordered w-full max-w-xs'></input>
                        {
                            errors.email &&
                            <small className='text-red-500 mt-1 text-left'>{errors.email?.message}</small>
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