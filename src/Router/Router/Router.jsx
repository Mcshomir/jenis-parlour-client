import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";

import AllHome from "../../Components/Home/AllHome";
import SignUp from "../../Components/Pages/SignUp/SignUp";
import DashboardLayout from "../../Layout/DashboardLayout";
import Dashboard from "../../Components/Sheard/Dashboard/Dashboard";
import AddService from "../../Components/Sheard/Dashboard/AddService";
import PendingServices from "../../Components/Sheard/Dashboard/PendingServices";
import PrivetRouter from "../PrivetRouter/PrivetRouter";
import BookServices from "../../Components/Home/ServiceSection/bookServices";
import Booked from "../../Components/Sheard/Dashboard/Booked";
import AllUser from "../../Components/Sheard/Dashboard/AllUser";

export const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            { path: '/home', element: <AllHome></AllHome> },

            {
                path: '/bookservices/:_id',
                element: <BookServices></BookServices>,
                loader: ({ params }) => fetch(`http://localhost:5000/pending/${params._id}`)


            },
            {
                path: '/signup', element: <SignUp></SignUp>
            },
            {
                path: '/*', element: <h1>Not Found ! 404</h1>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivetRouter> <DashboardLayout></DashboardLayout></PrivetRouter>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/addservices/',
                element: <AddService></AddService>
            },
            {
                path: '/dashboard/pendingservices/',
                element: <PendingServices></PendingServices>
            },
            {
                path: '/dashboard/booked/',
                element: <Booked></Booked>
            },
            {
                path: '/dashboard/alluser/',
                element: <AllUser></AllUser>
            }
        ]

    }
])