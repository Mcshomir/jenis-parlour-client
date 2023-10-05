import { createBrowserRouter } from "react-router-dom";
import Header from "../../Components/Sheard/Header/Header";
import Blog from "../../Components/Pages/Blog/Blog";
import Main from "../../Layout/Main/Main";
import Home from "../../Components/Home/Home/Home";
import SignIn from "../../Components/Pages/SignIn/SignIn";


export const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [

            {
                path: '/', element: <Home></Home>
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
    }

])