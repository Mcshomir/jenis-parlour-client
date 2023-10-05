import React from 'react';
import iconOne from '../../../assets/icons/Group 1372.png'
import iconTwo from '../../../assets/icons/Group 1373.png'
import iconThree from '../../../assets/icons/Group 1374.png'
import Button from '../../Sheard/Button/Button';

const TreatmentSection = () => {
    const treatmentCard = [
        {
            id: 1,
            name: "Anti Age Face Treatment",
            descriptions: "We craft stunning and amazing web UI, using a well drrafted UX to fit your product.",
            icon: iconOne,
            price: "$99"
        },
        {
            id: 2,
            name: "Hair Color & Styleing",
            descriptions: "Amazing flyers, social media posts and brand representations that would make your brand stand out. ",
            icon: iconTwo,
            price: "$99"
        },
        {
            id: 3,
            name: "Skin Care Treatment",
            descriptions:
                "With well written codes, we build amazing apps for all platforms, mobile and web apps in general.",


            icon: iconThree,
            price: "$99"
        }
    ]
    return (
        <div className='grid md:grid-cols-3 shadow-xl grid-cols-1  gap-12   my-20'>
            {
                treatmentCard.map(card => < >
                    <div key={card.id}>
                        <div className="card w-96 bg-base-100 shadow-xl rounded-xl">
                            <figure className="px-10 pt-10">
                                <img src={card.icon} alt="Shoes" className="rounded-xl w-2/4" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{card.name}</h2>
                                <p>Price: {card.price}</p>
                                <p>{card.descriptions}</p>

                            </div>
                        </div>
                    </div>
                </>


                )
            }

            <div className='flex align-middle justify-center' >  <Button>Expolore More</Button></div>

        </div>
    );
};

export default TreatmentSection;