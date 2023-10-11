import React from 'react';
import iconOne from '../../../assets/icons/Group 1372.png'
import iconTwo from '../../../assets/icons/Group 1373.png'
import iconThree from '../../../assets/icons/Group 1374.png'
import Button from '../../Sheard/Button/Button';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import TreatmentModal from './TreatmentModal';

const TreatmentSection = () => {

    const { data: treatmentCard = [] } = useQuery({
        queryKey: ["treatment"],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/services')
            const data = await res.json()
            return data
        }
    })

    // const treatmentDataSave = (da) => {
    //     console.log(da)
    //     fetch("http://localhost:5000/booked", {
    //         method: "POST",
    //         headers: {
    //             "content-type": "application/json"
    //         },
    //         body: JSON.stringify(da)
    //     })
    //         .then(res => res.json())
    //         .then(dats => { console.log(dats) })
    //         .catch(error => console.log("error", error))

    // }

    // const treatmentCard = [
    //     {
    //         id: 1,
    //         name: "Anti Age Face Treatment",
    //         descriptions: "We craft stunning and amazing web UI, using a well drrafted UX to fit your product.",
    //         icon: iconOne,
    //         price: "$99"
    //     },
    //     {
    //         id: 2,
    //         name: "Hair Color & Styleing",
    //         descriptions: "Amazing flyers, social media posts and brand representations that would make your brand stand out. ",
    //         icon: iconTwo,
    //         price: "$99"
    //     },
    //     {
    //         id: 3,
    //         name: "Skin Care Treatment",
    //         descriptions:
    //             "With well written codes, we build amazing apps for all platforms, mobile and web apps in general.",


    //         icon: iconThree,
    //         price: "$99"
    //     }
    // ]


    return (
        <div className='mb-5'>
            <h2 className='text-3xl text-center pt-8 mt-6'>Our Asesome Services !</h2>
            <div className='grid md:grid-cols-3 grid-cols-1  gap-12   my-10'>
                {
                    treatmentCard.map(card => < >
                        <div key={card._id}>
                            <div className="card w-[400px] h-[350px] bg-base-100 shadow-xl rounded-xl">
                                <figure className="px-10 pt-10">
                                    <img src={card.icon} alt="Shoes" className="rounded-xl w-2/4" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{card.name}</h2>
                                    <p>Price: {card.price}</p>

                                    <Link to={`/services/${card._id}`}>  <div ><Button > View more</Button></div></Link>

                                </div>
                            </div>
                        </div>
                    </>


                    )
                }



            </div>
            <div className='flex  justify-center' >  <Button>Expolore More</Button></div>

        </div>
    );
};

export default TreatmentSection;