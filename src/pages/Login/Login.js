import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext/UserContext';
import toast from 'react-hot-toast';


const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { userLogin, googleLogin } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"

    const notifyLoginSuccess = () => {
        return toast.success('Login Successful.',
            {
                duration: 2000,
                position: "top-center"
            }
        )

    }
    const notifyLoginUnSuccess = () => {
        return toast.error("Email or Password Is wrong", {
            duration: 2000,
            position: "top-right"
        })
    }




    const handelLogin = data => {
        userLogin(data.email, data.password)
            .then((userCredential) => {
                fetch("https://doctors-portal-server-green-xi.vercel.app/jwt", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify({ email: data.email })
                })
                    .then((response) => response.json())
                    .then((data) => {
                        localStorage.setItem("doctors-portal-token", data.token);
                        notifyLoginSuccess()
                        navigate(from, { replace: true })
                    })
            })
            .catch((error) => notifyLoginUnSuccess())

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
                                    minLength: { value: 6, message: "Password must be minimum 6 or more character" }
                                }
                            )} type="password" className="input input-bordered w-full max-w-xs" />
                            {errors.password && <small className='text-red-500 mt-1 text-left'>{errors.password.message}</small>}

                            <label className="label">
                                <span className="label-text-alt">Forget Password</span>
                            </label>
                        </div>
                        <input className='btn btn-accent w-full' type="submit" />
                        <label className="label mt-2">
                            <span className="label-text-alt">New to Doctors Portal?<Link to="/doctorspotral/signup" className='text-secondary'> Create new account</Link></span>
                        </label>
                    </form>
                    <div className="divider">OR</div>
                    <input onClick={googleLogin} className='btn btn-outline w-full' value="CONTINUE WITH GOOGLE" />
                </div>
            </div>
        </div>
    );
};

export default Login;