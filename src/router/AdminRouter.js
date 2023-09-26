import React, { useContext } from 'react';
import { AuthContext } from '../context/UserContext/UserContext';
import useAdmin from '../Token/useAdmin';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRouter = ({ children }) => {
    const { user, loader } = useContext(AuthContext)
    const location = useLocation()
    const [admin, adminLoader] = useAdmin(user?.email)

    if (loader || adminLoader) {
        return <h1>Loading....</h1>
    }

    if (user && admin) {
        return children;
    } else {
        return <Navigate to="/doctorspotral/login" state={{ from: location }} replace></Navigate>
    }
};

export default AdminRouter;