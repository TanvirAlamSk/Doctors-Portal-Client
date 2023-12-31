import React, { useContext } from 'react';
import { AuthContext } from '../context/UserContext/UserContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouter = ({ children }) => {
    const { user, loader } = useContext(AuthContext)
    const location = useLocation()
    if (loader) {
        return <h1>Loading....</h1>
    }
    if (user) {
        return children
    } else {
        return <Navigate to="/doctorspotral/login" state={{ from: location }} replace></Navigate>
    }


};

export default PrivateRouter;