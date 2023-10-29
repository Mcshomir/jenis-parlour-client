import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const PendingServices = () => {
    const { data: pendingData = [] } = useQuery({
        queryKey: ["pendingData"],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/services')
            const data = await res.json()
            return data
        }
    })
    const handlePending = (pen) => {


        const done = {
            title: pen.title,
            description: pen.description,
            img: pen.img,
            price: pen.price,
        };
        console.log("done", done);

        fetch("http://localhost:5000/pending", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(done),
        })
            .then((res) => res.json())
            .then((servicesData) => {
                console.log(servicesData);
                if (servicesData.acknowledged) {
                    alert("successfully uploaded to the services in home .......");
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };


    const handleClickDelete = pending => {
        fetch(`http://localhost:5000/pending/${pending._id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log("deleteingData", data)
                if (data.deletedCount > 0) {
                    alert('deleted successfully !')
                }
            })
    }
    const handleClickDeleteServices = services => {
        fetch(`http://localhost:5000/services/${services._id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log("deleteingData", data)
                if (data.deletedCount > 0) {
                    alert('deleted successfully !')
                }
            })
    }


    return (
        <div className='grid grid-cols-2 gap-2'>
            {
                pendingData.map(pData => <div key={pData._id} className="card w-84 bg-orange-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={pData.img} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{pData.title}</h2>
                        <p>{pData.description}</p>
                        <div className="card-actions">

                            <button onClick={() => handlePending(pData)} className="btn-sm btn btn-primary">Pending</button>





                            <button onClick={() => handleClickDeleteServices(pData)} className="btn-sm btn btn-secondary">Delete</button>
                        </div>
                    </div>
                </div>)
            }




        </div>
    );
};

export default PendingServices;

// {
//     data.price && !data.paid && <Link to={`/dashboard/payment/${data._id}`}>
//         <button className='btn btn-sm btn-primary'>Pay</button>
//     </Link>
// }
// {
//     data.price && data.paid && <button className='btn btn-sm btn-success'>Paid</button>
// }