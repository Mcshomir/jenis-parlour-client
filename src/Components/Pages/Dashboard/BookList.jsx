import { useQuery } from '@tanstack/react-query';
import React from 'react';

const BookList = () => {
    const { data: bookingData = [] } = useQuery({
        queryKey: ["booking"],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/booking')
            const data = await res.json()
            return data;
        }
    })
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>TreatmentName</th>
                            <th>Date</th>
                            <th>Status</th>

                        </tr>
                    </thead>
                    <tbody>
                        {bookingData.map((data, i) =>
                            <tr key={data._id}>
                                <th>{i + 1}</th>
                                <td>{data.name}</td>
                                <td>{data.treatmentName}</td>
                                <td>{data.date}</td>
                                <td> Pending</td>
                            </tr>

                        )}



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BookList;