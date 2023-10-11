import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { users, handleCreateUsers, updateUser } = useContext(AuthContext)
    const navigate = useNavigate();


    const handleSubmitClick = (data) => {
        console.log("shomir", data);
        handleCreateUsers(data.email, data.password)
            .then(result => {
                const user = result.user
                console.log("this is signUp user", user)
                const userInfo = { displayName: data.name, email: data.email, photoURL: data.photoURL, phoneNumber: data.number }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email, data.photoURL, data.password)
                        // navigate('/')


                    })
                    .catch(error => console.log(error));



            })
            .catch(error => console.error("createUser error", error))

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
                getAccessToken(email)

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

            {/* You can open the modal using document.getElementById('ID').showModal() method */}

            <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">

                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button, it will close the modal */}
                            <button className="btn">X</button>
                        </form>
                    </div>
                    <div className='flex justify-center align-middle'>



                        <form onSubmit={handleSubmit(handleSubmitClick)}>
                            <h2 className='text-3xl ml-12'>SignUp !</h2>


                            <div className="form-control w-full max-w-xs">
                                <label className="label"><span className="label-text">What's your name?</span>  </label>
                                <input type="name" placeholder='Name' className="input input-bordered w-full max-w-xs" {...register('name', { required: "Name is required" })} />
                                <p
                                    className='text-red-400 text-sm'>{errors.Name?.message}</p>


                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label"><span className="label-text">What's your e-mail?</span>  </label>
                                <input {...register("email", { required: "E-mail  is required" })} type="email" className="input input-bordered w-full max-w-xs" placeholder='E-mail' />
                                <p
                                    className='text-red-400 text-sm'>{errors.email?.message}</p>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label"><span className="label-text">What's your photoURL?</span>  </label>
                                <input {...register("photoURL", { required: "E-mail  is required" })} type="text" className="input input-bordered w-full max-w-xs" placeholder='photoURL' />
                                <p
                                    className='text-red-400 text-sm'>{errors.photoURL?.message}</p>
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label"><span className="label-text">Your password?</span>  </label>
                                <input {...register("password", { required: "Password  is required", minLength: { value: 6, message: "Min length is 6" } })} type="password" className="input input-bordered w-full max-w-xs" placeholder='Password' />
                                <p
                                    className='text-red-400 text-sm'>{errors.password?.message}</p>

                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label"><span className="label-text">Phone number</span>  </label>
                                <input {...register("number", { required: "Phone number is required" })} type="text" className="input input-bordered w-full max-w-xs" placeholder='+88xxxxxxxxxx' />
                                <p className='text-red-400 text-sm'>{errors?.number?.message}</p>

                            </div>



                            <br />

                            <input className='btn btn-primary w-full' type="submit" value="SignUp" />
                            {/* <p><small>already have an account? <Link onClick={() => document.getElementById('signin-modal').showModal()} className='text-primary' >Plz SignIn  </Link></small></p> */}
                            <div className="divider">OR</div>
                            <button className='btn btn-outline ' > CONTINUE WITH GOOGLE !</button>

                        </form>


                    </div>


                </div>
            </dialog>
        </div>
    );
};

export default SignUp;