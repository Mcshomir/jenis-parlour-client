import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Elements } from '@stripe/react-stripe-js';
import PementCheckout from './PementCheckout';
import { loadStripe } from '@stripe/stripe-js';

const BookServices = () => {
    const { users } = useContext(AuthContext);

    const data = useLoaderData()
    const { title } = data;
    const { register, handleSubmit } = useForm()
    // const stripePromise = loadStripe('pk_test_51NugWqG3Ns2DAtioccfUDA9CNkw5PVhyJiwRkkmyNgCyYxRDkR4AGaHpvE2Pf8wFUz1vmQ1fcoKwf6dzvFji6l4o00cx5Yolnl');

    const clickHandleSubmit = (data) => {

        const booking = {
            displayName: data.name,
            email: data.email,
            title: data.title,
            paypal: data.paypal

        }
        console.log(data);
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log("bookignData", data)
                if (data.acknowledged) {
                    alert(`booking successfully !`)
                }
            })
    }




    return (
        <div className='m-10 bg-slate-100'>
            <form onSubmit={handleSubmit(clickHandleSubmit)} className='p-10'>
                <div className='flex flex-col w-2/3  gap-3'>
                    <input  {...register("name")} defaultValue={users?.displayName} type="text" placeholder="Your name" className="input input-bordered w-full max-w-xs" />
                    <input {...register("email")} defaultValue={users?.email} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    <input {...register("title")} defaultValue={title} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>

                <p>Pay with</p>
                <div className='my-4'>
                    <input {...register("credit")} type="checkbox" name="" id="card" />
                    <label htmlFor="card">Creadit card</label>
                    <input {...register("paypal")} className='ml-10' type="checkbox" name="" id="paypal" />
                    <label htmlFor="paypal">Paypal</label>

                </div>

                <div className='w-1/3  justify-start my-4'>

                    {/* 
                    <Elements stripe={stripePromise}>
                        
                    </Elements> */}

                    <input className='btn btn-primary' type="submit" value="Booked" />


                </div>

            </form>
        </div>
    );
};

export default BookServices;