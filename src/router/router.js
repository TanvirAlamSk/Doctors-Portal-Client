import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import About from "../pages/About/About";
import Appointment from "../pages/Appointment/Appointment";
import Reviews from "../pages/Reviews/Reviews";
import ContactUs from "../pages/ContactUs/ContactUs";
import Login from "../pages/Login/Login";

export const router = createBrowserRouter([
    {
        path: "/", element: <Main></Main>, children: ([
            { path: "/", element: <Home></Home> },
            { path: "/about", element: <About></About> },
            { path: "/appointment", element: <Appointment></Appointment> },
            { path: "/reviews", element: <Reviews></Reviews> },
            { path: "/contract", element: <ContactUs></ContactUs> },
            { path: "/login", element: <Login></Login> },
            { path: "*", element: <NotFound></NotFound> }
        ])
    }
])