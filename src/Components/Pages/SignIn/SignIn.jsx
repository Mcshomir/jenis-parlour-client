import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { useForm } from 'react-hook-form';

const SignIn = () => {
    const { loginUser } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm()
    const handleSubmitClick = data => {
        console.log(data)
        loginUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log("siginIn user ", user)
            })
            .catch(error => console.log("singIn error", error))
    }

    return (
        <div>

            <dialog id="signin-modal" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">

                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button, it will close the modal */}
                            <button className="btn">X</button>
                        </form>
                    </div>
                    <div className='flex justify-center align-middle'>



                        <form onSubmit={handleSubmit(handleSubmitClick)}>
                            <h2 className='text-3xl ml-12'>SignIn !</h2>


                            <div className="form-control w-full max-w-xs">
                                <label className="label"><span className="label-text">What's your e-mail?</span>  </label>
                                <input {...register("email", { required: "E-mail  is required" })} type="email" className="input input-bordered w-full max-w-xs" placeholder='E-mail' />
                                <p
                                    className='text-red-400 text-sm'>{errors.email?.message}</p>
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label"><span className="label-text">Your password?</span>  </label>
                                <input {...register("password", { required: "Password  is required", minLength: { value: 6, message: "Min length is 6" } })} type="password" className="input input-bordered w-full max-w-xs" placeholder='Password' />
                                <p
                                    className='text-red-400 text-sm'>{errors.password?.message}</p>

                            </div>





                            <br />

                            <input className='btn btn-primary w-full' type="submit" value="SignUp" />

                            <div className="divider">OR</div>
                            <p><small>If you  have not an account? <Link onClick={() => document.getElementById('my_modal_4').showModal()} className='text-primary' >Plz SignUp </Link></small></p>





                        </form>

                    </div>


                </div>
            </dialog>
        </div>
    );
};

export default SignIn;