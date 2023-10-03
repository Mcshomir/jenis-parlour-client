import { createBrowserRouter } from "react-router-dom";
import Header from "../../Components/Sheard/Header/Header";
import Blog from "../../Components/Pages/Blog/Blog";

export const router = createBrowserRouter([
    {
        path: '/', element: <Header></Header>
    },
    {
        path: '/blog', element: <Blog></Blog>
    },
    {
        path: '/*', element: <h3>Not Found ! 403</h3>
    }
])