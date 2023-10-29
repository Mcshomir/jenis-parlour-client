import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Booked = () => {

    const { data: bookingDatas = [] } = useQuery({
        queryKey: ['booking'],
        queryFn: async () => {

            const res = await fetch('http://localhost:5000/booking')
            const data = await res.json()
            return data

        }
    })

    // const { data: booking = [], } = useQuery({
    //     queryKey: ["deleteBooking"],
    //     queryFn: async () => {
    //         const res = await fetch(`http://localhost:5000/booking/${booking.id}`)
    //         const data = await res.json()
    //         return data
    //     }
    // })

    const handleDelete = booking => {
        fetch(`http://localhost:5000/booking/${booking._id}`, {
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
        <div>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>
                                Email
                            </th>
                            <th>Title</th>
                            <th>Card</th>
                            <th>Pay</th>
                            <th>
                                Delete
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            bookingDatas.map((bookingData, i) =>
                                <tr key={bookingData._id}>
                                    <th>{i + 1}</th>
                                    <td>{bookingData.displayName}</td>
                                    <td>{bookingData.email}</td>
                                    <td>{bookingData.title}</td>
                                    <td>{bookingData?.papyal}</td>
                                    <td>Paid</td>
                                    <td>
                                        <li onClick={() => handleDelete(bookingData)} className='btn btn-sm '> delete</li>
                                    </td>
                                </tr>


                            )
                        }



                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Booked;