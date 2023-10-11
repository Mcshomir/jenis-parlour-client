import React, { useContext } from 'react';
import logoOne from '../../../assets/images/logo.png'
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { FaStar } from 'react-icons/fa';

const HeaderTwo = () => {
    const { users, LogOutclick } = useContext(AuthContext)
    const handleLogOutClick = () => {
        LogOutclick()
            .then(() => {

            })
            .catch(error => { console.error("logouterror", error) })
    }
    return (
        <div>
            <div className='navbar bg-orange-50 '>
                <div className="navbar-start">

                    <a className="btn btn-ghost normal-case text-xl"><img className='h-8 w-28' src={logoOne} alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a href="">Dashboard</a></li>
                    </ul>

                </div>


                <div className="navbar-end">

                    {
                        users?.uid ? <>
                            <div className="avatar online">
                                <div className="w-12 rounded-full">
                                    <img src={users?.photoURL} />
                                </div>
                            </div>


                            <span className='btn bg-gradient-to-r from-primary to-secondary text-white' onClick={handleLogOutClick}>SignOut</span>

                        </> : < ><FaStar /> </>
                    }


                </div>
                {/* onClick={() => document.getElementById('signin-modal').showModal()} */}



                {/* <SignUp></SignUp> */}

            </div >

        </div>




    );
};

export default HeaderTwo;