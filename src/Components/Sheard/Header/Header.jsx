import React from 'react';
import logoOne from '../../../assets/images/logo.png'
import { Link } from 'react-router-dom';
import Banner from '../../Home/Banner/Banner';
import Button from '../Button/Button';

const Header = () => {
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
        <li>
            <Link to='/signin'>About</Link>
        </li>
        <li>
            <Link to='/signup'>SingIn</Link>
        </li>
    </>


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
                    <Button>SignUp</Button>
                </div>
            </div>

        </>
    );
};

export default Header;