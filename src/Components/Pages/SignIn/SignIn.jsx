import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const navigate = useNavigate()
    const { loginUser } = useContext(AuthContext)
    const { register, handleSubmit } = useForm()
    const clickeHandleSubmit = data => {
        console.log("sigin", data)
        loginUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log("signinUser", user);
                navigate('/')
            })
            .catch(error => { console.error(error) })
    }
    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}

            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <form onSubmit={handleSubmit(clickeHandleSubmit)} className="modal-box">
                    <h3 className="font-bold text-lg">login!</h3>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register("email")} type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register("password")} type="password" placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className='mt-5'>
                        <input className='btn btn-primary' type="submit" value="SignIn" />
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>

                </form>
            </dialog>
        </div>
    );
};

export default SignIn;