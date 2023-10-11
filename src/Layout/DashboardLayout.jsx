import React from 'react';
import Header from '../Components/Sheard/Header/Header';
import { Outlet } from 'react-router-dom';
import DashboardDrawer from '../Components/Pages/Dashboard/DashboardDrawer';
import HeaderTwo from '../Components/Sheard/Header/HeaderTwo';

const DashboardLayout = () => {
    return (
        <div>
            <Header></Header>
            <DashboardDrawer></DashboardDrawer>
        </div>
    );
};

export default DashboardLayout;