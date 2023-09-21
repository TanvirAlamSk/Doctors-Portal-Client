import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';


const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const handelLogin = data => {
        console.log(data)
        // console.log(errors)
        // data.target.reset();
    };
    return (
        <div className='flex justify-center items-center'>
            <div className='shadow-xl px-16 py-12 rounded-md'>
                <h2 className='text-2xl font-medium'>Login</h2>
                <div>
                    <form onSubmit={handleSubmit(handelLogin)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                Email
                            </label>
                            <input {...register("email", { required: "Email Address is required" })} type="email" className="input input-bordered w-full max-w-xs" />
                            {errors.email && <small className='text-red-500 mt-1 text-left'>{errors.email?.message}</small>}

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                Password
                            </label>
                            <input {...register("password",
                                {
                                    required: "Must fill up password field",
                                    minLength: { value: 6, message: "Password must be minimum 6 or more character" },
                                    pattern: { value: /(?=.*[A-Z])(?=.*[!@#$ &*])(?=.*[0-9])(?=.*[a-z])/, message: "password must be strong" }
                                }
                            )} type="password" className="input input-bordered w-full max-w-xs" />
                            {errors.password && <small className='text-red-500 mt-1 text-left'>{errors.password.message}</small>}

                            <label className="label">
                                <span className="label-text-alt">Forget Password</span>
                            </label>
                        </div>
                        <input className='btn btn-accent w-full' type="submit" />
                        <label className="label mt-2">
                            <span className="label-text-alt">New to Doctors Portal?<Link to="/signup" className='text-secondary'> Create new account</Link></span>
                        </label>
                    </form>
                    <div className="divider">OR</div>
                    <input className='btn btn-outline w-full' value="CONTINUE WITH GOOGLE" />
                </div>
            </div>
        </div>
    );
};

export default Login;