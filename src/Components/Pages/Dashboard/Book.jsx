import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';

const Book = () => {
    const { users } = useContext(AuthContext);
    const { handleSubmit, register } = useForm()
    const clickHandleSubmit = data => {
        console.log("This is from data", data);
        const userinfo = {
            name: data.name,
            email: data.email,
            radio: data.radio,
            treatment: data.select

        }

    }

    const { data: treatments = [] } = useQuery({
        queryKey: ["tretments"],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/treatment")
            const data = await res.json()
            return data;
        }
    })



    const saveBookingData = () => {
        fetch('http://localhost:5000/booking', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                console.log("bookingData", data)
            })
    }
    return (
        <div>
            <h2> Booking!</h2>
            <div className='flex flex-col gap-5 m-8'>
                <input type="text" placeholder="Type here" className="input input-bordered input-md w-full max-w-xs" defaultValue={users.displayName} />
                <input type="email" placeholder="Type here" className="input input-bordered input-md w-full max-w-xs" defaultValue={users.email} />
                <select className="select select-bordered w-full max-w-xs">
                    {
                        treatments.map(treatment =>
                            <option
                                key={treatment._id}
                                treatment={treatment.name}
                            >{treatment.name}</option>

                        )
                    }
                    {/* <option disabled selected>Normal</option> */}


                </select>
                <div className=' flex gap-5'>

                    <div className="">
                        <label className="label cursor-pointer">
                            <span className="label-text">Paypal</span>
                            <input type="radio" name="radio-10" className="radio checked:bg-gray-500 ml-2" checked />
                        </label>
                    </div>
                    <div className="">
                        <label className="label cursor-pointer">
                            <span className="label-text">Creadit Card</span>
                            <input type="radio" name="radio-10" className="radio checked:bg-gray-500 ml-2" checked />
                        </label>
                    </div>
                </div>
                <input className='btn btn-primary w-1/4' type="submit" value="submit" />

            </div>

        </div>
    );
};

export default Book;