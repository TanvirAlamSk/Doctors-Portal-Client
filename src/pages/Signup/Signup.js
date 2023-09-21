import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm()
    const handelSignup = (data) => {
        console.log(data)
    }
    return (
        <div className='flex justify-center items-center'>
            <div className='shadow-xl px-12 py-12 rounded-md lg:w-1/3'>
                <h2 className='text-2xl font-medium'>Sign UP</h2>
                <div>
                    <form onSubmit={handleSubmit(handelSignup)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                Name
                            </label>
                            <input {...register("name", { required: "Name is required" })} type="text" className="input input-bordered w-full max-w-xs" />
                            {errors.name && <small className='text-red-500 mt-1 text-left'>{errors.name?.message}</small>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className='label'>
                                Email
                            </label>
                            <input {...register("email", { required: "Email Address is required" })} type="email" className="input input-bordered w-full max-w-xs"></input>
                            {
                                errors.email && <small className='text-red-500 mt-1 text-left'>{errors.email?.message}</small>
                            }
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className='label'>Password</label>
                            <input {...register("password", {
                                required: "Must fill up password field",
                                minLength: {
                                    value: 6,
                                    massage: "Password must be minimum 6 or more character"
                                },
                                pattern: { value: /(?=.*[A-Z])(?=.*[!@#$ &*])(?=.*[0-9])(?=.*[a-z])/, massage: "Password must be strong" }
                            })} type='password' className="input input-bordered w-full max-w-xs"></input>
                            {errors.password && <small className='text-red-500 mt-1 text-left'>{errors.password?.message}</small>
                            }


                        </div>
                        <input className='btn btn-accent w-full mt-10' type="submit" />
                        <label className="label mt-2 text-center inline-block">
                            <span className="label-text-alt">Already Have An account  <Link to="/login" className='text-secondary'> Go Login</Link></span>
                        </label>
                    </form>
                    <div className="divider">OR</div>
                    <input className='btn btn-outline w-full' value="CONTINUE WITH GOOGLE" />
                </div>
            </div>

        </div>
    );
};

export default Signup;