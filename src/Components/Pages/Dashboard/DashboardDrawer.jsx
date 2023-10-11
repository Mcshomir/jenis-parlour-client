import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashboardDrawer = () => {
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>
                    {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <Link to='/dashboard'>   <li><a>All User</a></li></Link>
                        <Link to='/dashboard/book'>   <li><a>Book</a></li></Link>
                        <Link to='/dashboard/booklist'>   <li><a>Book-List</a></li></Link>

                        <Link to='/dashboard/makeadmin'><li><a>Make </a></li></Link>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardDrawer;