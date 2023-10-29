import React from 'react';
import Header from '../Components/Sheard/Header/Header';
import { Link, Outlet } from 'react-router-dom';



const DashboardLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col ">
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}

                        <Link to='/dashboard/alluser'> <li>
                            <a href="">All-User</a></li></Link>
                        <Link to='/dashboard/booked'> <li>
                            <a href="">Booked</a></li></Link>
                        <li><a><Link to='/dashboard/addservices/'> Add Services</Link></a></li>
                        <li><a> <Link to='/dashboard/pendingservices/'>Pending Services</Link></a></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;