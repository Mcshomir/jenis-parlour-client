import { format } from 'date-fns';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const TreatmentModal = ({ treatmentName, price }) => {
    const { users } = useContext(AuthContext);

    const [selectedDate, setSelectedDate] = useState(new Date())
    const date = format(selectedDate, 'PP')
    const { register, handleSubmit } = useForm()

    const handleClick = (data) => {
        console.log("booked data", data)
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(bookingData => {
                console.log(bookingData);
                if (bookingData.acknowledged) {
                    toast.success("Booked successfully")

                }
            })
    }



    return (
        <div>
            {/* The button to open modal */}

            {/* Put this part before </body> tag */}
            <div className="modal" id="my_modal_8">
                <h3 className="font-bold text-lg">Hello!</h3>

                <form onSubmit={handleSubmit(handleClick)} className="modal-box">
                    <h3 className="font-bold text-lg">Booking Form !</h3>
                    <input {...register("name")} defaultValue={users?.displayName} type="text" placeholder="Your name " className="input input-bordered w-full max-w-xs" />

                    <input {...register("treatmentName")} defaultValue={treatmentName} readOnly type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    <input {...register("price")} defaultValue={price} readOnly type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    <input {...register("date")} value={date} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />





                    <div className="modal-action">

                        <input className='btn bg-orange-400' type="submit" value="Booked" />
                        <a href="#" className="btn">Cencel</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TreatmentModal;