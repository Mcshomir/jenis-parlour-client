import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllUser = () => {
    const { data: users = [] } = useQuery({
        queryKey: ["user"],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/user')
            const data = res.json()
            return data;
        }
    })
    const handleClickDelete = user => {
        fetch(`http://localhost:5000/user/${user._id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(deleteingDatas => {
                console.log("deleteingData", deleteingDatas)
                if (deleteingDatas.deletedCount > 0) {
                    alert('deleted successfully !')
                }
            })
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Make Adming</th>
                            <th>Eelete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {users.map((user, i) =>
                            <tr key={user._id}>
                                <th>{i + 1}</th>
                                <th>

                                    <div className="avatar rounded-full">
                                        <div className="w-12 rounded-full">
                                            <img src={user.photoURL} />
                                        </div>
                                    </div>
                                </th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td> Admin</td>
                                <td className=' btn  btn-sm mt-5' onClick={() => handleClickDelete(user)}>Delete</td>
                            </tr>



                        )}



                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllUser;