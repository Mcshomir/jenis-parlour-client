import React, { useContext } from 'react';
import logoOne from '../../../assets/images/logo.png'
import { Link } from 'react-router-dom';
import Banner from '../../Home/Banner/Banner';
import Button from '../Button/Button';
import SignUp from '../../Pages/SignUp/SignUp';
import SignIn from '../../Pages/SignIn/SignIn';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { FaStar } from 'react-icons/fa';

const Header = () => {
    const { users, LogOutclick } = useContext(AuthContext)
    const navbarInfo = <>
        <li>
            <Link to='/'>Home</Link>
        </li>
        <li>
            <Link to='/blog'>Blog</Link>
        </li>
        <li>
            <Link to='/servies'>Services</Link>
        </li>
        <li >
            <Link to='/contuct-us'>Contuct-Us</Link>
        </li>



        {
            users?.uid ? <li >
                <Link to='/about'>About</Link>
            </li> :
                <li >
                    <Link to='/signin'>Signin</Link>
                </li>
        }






        {/* <li onClick={() => document.getElementById('signin-modal').showModal()}>
            <Link to='/signin'>SingIn</Link>
        </li> */}
    </>
    const handleLogOutClick = () => {
        LogOutclick()
            .then(() => {

            })
            .catch(error => { console.error("logouterror", error) })
    }


    return (
        <>

            <div className='navbar bg-orange-50 '>
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navbarInfo}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl"><img className='h-8 w-28' src={logoOne} alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navbarInfo}
                    </ul>
                </div>
                <div className="navbar-end">

                    {
                        users?.uid ? <>
                            <div className="avatar online">
                                <div className="w-14 rounded-full">
                                    <img src={users?.email} />
                                </div>
                            </div>


                            <span className='btn bg-gradient-to-r from-primary to-secondary text-white' onClick={handleLogOutClick}>SignOut</span>

                        </> : < ><FaStar /> </>
                    }


                </div>
                {/* onClick={() => document.getElementById('signin-modal').showModal()} */}



                <SignUp></SignUp>

            </div >

        </>
    );
};

export default Header;