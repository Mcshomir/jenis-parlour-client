import { createBrowserRouter } from "react-router-dom";
import Header from "../../Components/Sheard/Header/Header";
import Blog from "../../Components/Pages/Blog/Blog";
import Main from "../../Layout/Main/Main";
import Home from "../../Components/Home/Home/Home";
import SignIn from "../../Components/Pages/SignIn/SignIn";
import PrivetRouter from "../PrivetRouter/PrivetRouter";
import Dashboard from "../../Components/Pages/Dashboard/Dashboard";
import DashboardLayout from "../../Layout/DashboardLayout";
import DashboardUserLilst from "../../Components/Pages/Dashboard/DashboardUserLilst";
import MakeAdmin from "../../Components/Pages/Dashboard/MakeAdmin";
import Book from "../../Components/Pages/Dashboard/Book";
import BookList from "../../Components/Pages/Dashboard/BookList";
import DetailsOfTreatment from "../../Components/Home/TreatmentSection/DetailsOfTreatment";


export const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [

            {
                path: '/', element: <Home></Home>
            },
            {
                path: '/home', element: <Home></Home>
            },
            {
                path: '/services/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
                element: <DetailsOfTreatment></DetailsOfTreatment>
            },


            {
                path: '/blog', element: <Blog></Blog>
            },

            {
                path: '/signin', element: <SignIn></SignIn>
            },

            {
                path: '/*', element: <h3>Not Found ! 403</h3>
            }

        ]
    },
    {
        path: '/dashboard',
        element: <PrivetRouter><DashboardLayout></DashboardLayout></PrivetRouter>,
        children: [
            {
                path: '/dashboard',
                element: <PrivetRouter><DashboardUserLilst></DashboardUserLilst></PrivetRouter>
            },

            {
                path: '/dashboard/booklist',
                element: <PrivetRouter><BookList></BookList></PrivetRouter>
            },
            {
                path: '/dashboard/makeadmin',
                element: <PrivetRouter><MakeAdmin></MakeAdmin></PrivetRouter>
            }
        ]

    }

])