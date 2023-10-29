import React, { useContext } from 'react';
import img from '../../../assets/images/signup.avif'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import SignIn from '../SignIn/SignIn';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const SignUp = () => {
    const navigate = useNavigate()
    const { handleCreateUsers, updateUser } = useContext(AuthContext)
    const { register, handleSubmit } = useForm()
    const clickHandleSubmit = data => {
        console.log("signUp", data)
        const profile = {
            displayName: data.name,
            photoURL: data.photoURL
        }
        handleCreateUsers(data.email, data.password)

            .then(result => {
                const user = result.user;
                updateUser(profile)
                    .then(() => {
                        saveUser(data.name, data.email, data.photoURL, data.password)

                    })
                    .catch(e => console.log(e))
                console.log("createUser", user)
                toast.success("signup successfully !")
                navigate('/')
            })
            .catch(error => console.error("createUserError", error))

    }
    const saveUser = (name, email, photoURL, password) => {
        const user = { name, email, photoURL, password }
        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log("saveUserData", data)
                getAccessToken(data.email)

            })
    }

    const getAccessToken = user => {
        fetch(`http://localhost:5000/jwt?user=${user}`)
            .then(res => res.json())
            .then(data => {
                if (data.accessToken) {
                    localStorage.setItem("accessToken", data.accessToken)
                    navigate('/');
                }
                console.log("accessTokenData", data);
            })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-center ">SignUp!</h1>
                        <img src={img} className='mt-3' alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(clickHandleSubmit)} className="card-body" >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input {...register("name")} type="text" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email")} type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input {...register("photoURL")} type="text" placeholder="photoURL" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register("password")} type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">SignUp</button>
                                <small>If you have account <Link className='text-blue-400' onClick={() => document.getElementById('my_modal_5').showModal()}> please signin</Link></small>


                            </div>


                        </form>
                    </div>
                </div>
            </div>
            <SignIn></SignIn>
        </div>
    );
};

export default SignUp;