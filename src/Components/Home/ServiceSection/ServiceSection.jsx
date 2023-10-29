import React from 'react';
import iconOne from '../../../assets/icons/Group 1372.png'
import iconTwo from '../../../assets/icons/Group 1373.png'
import iconThree from '../../../assets/icons/Group 1374.png'
import Button from '../../Sheard/Button/Button';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

const ServiceSection = () => {

    const { data: treatmentCard = [] } = useQuery({
        queryKey: ["treatment"],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/pending')
            const data = await res.json()
            return data
        }
    })
    const handleClickDelete = pending => {
        fetch(`http://localhost:5000/pending/${pending._id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(deletingData => {
                console.log("deleteingData", deletingData)
                if (deletingData.deletedCount > 0) {
                    alert('deleted successfully !')
                }
            })
    }



    return (
        <div className='mb-5 '>
            <h2 className='text-3xl text-center pt-8 mt-6'>Our Asesome Services !</h2>
            <div className='grid md:grid-cols-3 grid-cols-1    my-10'>
                {
                    treatmentCard.map(card => < >
                        <div key={card._id}>
                            <div className="  card w-[300px] h-[300px] my-5 bg-orange-100 shadow-xl rounded-xl">
                                <figure className="px-10 pt-10">
                                    <img src={card.img} alt="Shoes" className="rounded-xl w-2/4" />
                                </figure>

                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{card.title}</h2>
                                    <p>{card.description}</p>
                                    <p><small>Price: {card.price}</small></p>

                                    <Link to={`/bookservices/${card._id}`}>  <div ><Button >Book</Button></div></Link>

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

export default ServiceSection;