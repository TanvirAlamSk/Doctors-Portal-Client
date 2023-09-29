import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext/UserContext';
import { updateProfile, getAuth } from 'firebase/auth';
import app from '../../firebase/Firebase.init';
import toast from 'react-hot-toast';

const Signup = () => {
    const auth = getAuth(app)
    const { createUser, googleLogin } = useContext(AuthContext)
    const navigate = useNavigate()
    const { register, formState: { errors }, handleSubmit } = useForm()

    const notifySigninSuccess = () => {
        return toast.success('Login Successful.',
            {
                duration: 2000,
                position: "top-center"
            }
        )

    }
    const notifySigninUnSuccess = (error) => {
        if (error.code === "auth/invalid-email") {
            return toast.error("Email is not valid", {
                duration: 2000,
                position: "top-right"
            })
        }
        return toast.error("SignIn UnSuccessful", {
            duration: 2000,
            position: "top-right"
        })
    }

    const handelSignup = (data) => {
        createUser(data.email, data.password)
            .then((userCredential) => {
                updateProfile(auth.currentUser, {
                    displayName: data.name
                })
                    .then(() => {
                        saveUserInDB(data.name, data.email);
                        //----------------------------------------

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
                                notifySigninSuccess()
                                navigate("/")
                            })
                        //---------------------------------------- 

                    })
                    .catch((error) => alert(error))
            })
            .catch((error) => notifySigninUnSuccess(error))
    }

    const saveUserInDB = (name, email) => {
        fetch("https://doctors-portal-server-green-xi.vercel.app/users", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ name, email })
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.acknowledged) {
                    navigate("/")
                }
            })
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
                        <input className='btn btn-accent w-full mt-5' type="submit" />
                        <label className="label mt-2 text-center inline-block">
                            <span className="label-text-alt">Already Have An account  <Link to="/doctorspotral/login" className='text-secondary'> Go Login</Link></span>
                        </label>
                    </form>
                    <div className="divider">OR</div>
                    <input onClick={googleLogin} className='btn btn-outline w-full' value="CONTINUE WITH GOOGLE" />
                </div>
            </div>

        </div>
    );
};

export default Signup;