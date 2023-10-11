import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import ConfiremationModal from '../../Sheard/ConfiremationModal/ConfiremationModal';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
const DashboardUserLilst = () => {
    const { users } = useContext(AuthContext)
    const [deletingDoctor, setDeletingDoctor] = useState(null)
    const closeModal = () => {
        return setDeletingDoctor(null)
    }

    const { data: userData, isLoading, refetch } = useQuery({
        queryKey: ["user"],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/user")
            const data = await res.json()
            return data
        }
    })

    const handleDelete = (users) => {
        fetch(`http://localhost:5000/user/${users._id}`, {
            method: 'DELETE',
            headers: {
                "content-type": "application/json"
            }

        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success(`Doctors ${data.email} have deleted successfully !`)
                    refetch();
                }
            })
    }
    if (isLoading) {
        return <h2>Loading...</h2>
    }


    return (
        <div>
            <h1 className='text-3xl '> All UserList</h1>
            <div className="overflow-x-auto">
                <table className="table">

                    <thead>
                        <tr>
                            <th></th>

                            <th>Name</th>
                            <th>Email</th>

                            <th>Password</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userData?.map((data, i) =>

                                <tr key={data._id} className="bg-base-200">
                                    <th>{i + 1}</th>
                                    {/* <td>
                                        <div className="avatar online">
                                            <div className="w-12 rounded-full">
                                                <img src={users?.photoURL} />
                                            </div>
                                        </div>
                                    </td> */}


                                    <td>{data?.name}</td>
                                    <td>{data?.email}</td>
                                    <td>{data?.password}</td>
                                    <td onClick={() => setDeletingDoctor(data)}>    <a href="#my_modal_8" className="btn">delete</a></td>
                                </tr>

                            )
                        }


                    </tbody>
                </table>
            </div>

            {
                deletingDoctor && <ConfiremationModal

                    title={'Are you sure to delete?'}
                    message={`if you delete ${deletingDoctor.email} can not be undone !`}
                    closeModal={closeModal}
                    handleDelete={handleDelete}
                    userData={deletingDoctor}

                ></ConfiremationModal>
            }




        </div>
    );
};

export default DashboardUserLilst;