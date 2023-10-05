import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { useForm } from 'react-hook-form';

const SignIn = () => {
    const { loginUser, users } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm()
    const location = useLocation()
    const navigate = useNavigate()
    const from = location?.state?.from?.pathname || '/';
    const handleSubmitClick = data => {
        console.log(data)
        loginUser(data.email, data.password)
            .then((result) => {
                const user = result.user;
                console.log("logInUser data", user)
            })
            .catch(error => {
                console.log("logingUserError", error)
            })
    }
    if (users) {
        navigate(from, { replace: true })
    }



    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">SignIn now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(handleSubmitClick)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">What's your e-mail?</span>
                                </label>
                                <input type="email" {...register('email', { required: "Name is required !" })} placeholder="email" className="input input-bordered" required />
                                <p className='text-red-400 text-sm'>{errors.email?.message}</p>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register("password", { required: "Password is required", minLength: { value: 6, message: "Should be 6 character" } })} type="password" placeholder="password" className="input input-bordered" required />
                                <p className='text-red-400 text-sm'>{errors.password?.message}</p>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">SignIn</button>
                            </div>
                            <div className="divider">OR</div>

                            <button className='btn btn-outline ' onClick={() => document.getElementById('my_modal_4').showModal()}>Create an Account?</button>
                        </form>
                    </div>
                </div>
            </div>





        </div>
    );
};

export default SignIn;