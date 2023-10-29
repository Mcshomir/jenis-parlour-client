import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TreatmentModal from './TreatmentModal';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { format } from 'date-fns';

const DetailsOfTreatment = () => {

    let { name, icon, descriptions, price } = useLoaderData()
    // const [selectedDate, setSelectedDate] = useState(new Date())

    // const date = format(selectedDate, 'PP')


    // const { data: treatmentCard = [] } = useQuery({
    //     queryKey: ["treatment"],
    //     queryFn: async () => {
    //         const res = await fetch('http://localhost:5000/services')
    //         const data = await res.json()
    //         return data
    //     }
    // })


    // const handleClick = () => {
    // const data = {
    //     name,
    //     displayName: `${users.displayName}`,
    //     email: `${users?.email}`,
    //     icon,
    //     shomir: "aks",
    //     price,
    //     date,
    //     descriptions
    // }
    // console.log(data)
    // fetch('http://localhost:5000/booking', {
    //     method: 'POST',
    //     headers: {
    //         'content-type': 'application/json'
    //     },
    //     body: JSON.stringify(data)
    // })
    //     .then(res => res.json())
    //     .then(bookingData => {
    //         console.log("bookingdata", bookingData);
    //         alert(`${}booking successfully !`)



    //     })
    // }


    return (
        <div className=' flex justify-center  my-12'>


            <div className="card card-side bg-base-100 shadow-xl  w-[500px]   border-x-slate-950 ">
                <figure><img src={icon} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{descriptions}</p>
                    <p>Price:${price}</p>
                    <div className="card-actions justify-end">
                        <a href="#my_modal_8" className="btn">Book</a>
                    </div>
                </div>
                <TreatmentModal
                    treatmentName={name}
                    price={price}




                ></TreatmentModal>
            </div>








        </div>
    );
};

export default DetailsOfTreatment;