import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import About from "../pages/About/About";
import Appointment from "../pages/Appointment/Appointment";
import ContactUs from "../pages/ContactUs/ContactUs";
import Login from "../pages/Login/Login";
import Secondary from "../layout/Secondary/Secondary";
import Signup from "../pages/Signup/Signup";
import DashBoardLayout from "../layout/DashBoard/DashBoardLayout";
import MyAppointment from "../pages/MyAppointment/MyAppointment";
import PrivatrRouter from "../router/PrivateRouter";
import Users from "../pages/Users/Users";
import AdminRouter from "./AdminRouter";
import AddDoctor from "../pages/AddDoctor/AddDoctor";
import ManageDoctor from "../pages/ManageDoctor/ManageDoctor";



export const router = createBrowserRouter([
    {
        path: "/", element: <Main></Main>, children: ([
            { path: "/", element: <Home></Home> },
            { path: "/about", element: <About></About> },
            { path: "/appointment", element: <Appointment></Appointment> },
            { path: "/contract", element: <ContactUs></ContactUs> },

        ])
    },
    {
        path: "/doctorspotral", element: <Secondary></Secondary>, children: ([
            { path: "/doctorspotral/login", element: <Login></Login> },
            { path: "/doctorspotral/signup", element: <Signup></Signup> },
        ])
    },
    {
        path: "/dashboard", element: <PrivatrRouter><DashBoardLayout></DashBoardLayout></PrivatrRouter>, children: ([
            {
                path: "/dashboard", element: <MyAppointment></MyAppointment >
            },
            {
                path: "/dashboard/users", element: <AdminRouter><Users></Users></AdminRouter>
            },
            {
                path: "/dashboard/add-doctor", element: <AddDoctor></AddDoctor>
            },
            {
                path: "/dashboard/manage-doctor", element: <ManageDoctor></ManageDoctor>
            }

        ])
    },
    {
        path: "*", element: <NotFound></NotFound>
    }
])