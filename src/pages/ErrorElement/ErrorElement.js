import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorElement = () => {
    const error = useRouteError()
    return (
        <div className='text-red-500'>
            Not Found, this item
            <p className='text-red-500'>{error.statusText || error.message}</p>
            <p>Please <Link to="/doctorspotral/login">Login</Link> Again</p>
        </div>
    );
};

export default ErrorElement;