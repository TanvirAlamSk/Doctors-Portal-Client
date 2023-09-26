import React, { useContext } from 'react';
import Header from '../../components/Header/Header';
import RightArrow from '../../assets/icons/right-arrow.png';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext/UserContext';
import useAdmin from '../../Token/useAdmin';

const DashBoardLayout = () => {
    const { user } = useContext(AuthContext)
    const [admin] = useAdmin(user?.email)
    return (
        <div>
            <Header></Header>
            <div className="drawer-content flex flex-col items-start justify-start mx-2">
                <label htmlFor="my-drawer-2" tabIndex={0} className="btn btn-ghost lg:hidden ">
                    <img src={RightArrow} alt='' className="h-5 w-5 " fill="none" stroke="currentColor">
                    </img>
                </label>

            </div>

            <div className="drawer lg:drawer-open">

                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-60 lg:w-80 min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li><Link to="/dashboard">All Appointment</Link></li>
                        {
                            admin &&
                            <>
                                <li><Link to="/dashboard/users">All User</Link></li>
                                <li><Link to="/dashboard/add-doctor">Add A Doctor</Link></li>
                                <li><Link to="/dashboard/manage-doctor">Manage Doctor</Link></li>
                            </>

                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoardLayout;