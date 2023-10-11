import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TreatmentModal from './TreatmentModal';

const DetailsOfTreatment = () => {
    let { name, icon, descriptions, price } = useLoaderData()


    // const { data: treatmentCard = [] } = useQuery({
    //     queryKey: ["treatment"],
    //     queryFn: async () => {
    //         const res = await fetch('http://localhost:5000/services')
    //         const data = await res.json()
    //         return data
    //     }
    // })


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