import React from 'react';
import NotFoundImg from '../../assets/NotFound/404-drib23.gif';
import Header from '../../components/Header/Header';
const NotFound = () => {
    return (
        <div>
            <Header></Header>
            <div className='flex justify-center'>
                <img src={NotFoundImg} alt=''></img>
            </div>
        </div>
    );
};

export default NotFound;