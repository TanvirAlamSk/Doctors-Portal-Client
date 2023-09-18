import React from 'react';

const ServiceSectionCard = ({ item }) => {
    const { icon, title, subTitle } = item
    return (
        <div className="rounded shadow-lg py-6">
            <div className='w-full mx-auto my-6'>
                <img className='inline-block' src={icon} alt=''></img>
            </div>
            <div className='mx-5'>
                <h5 className='font-semibold'>{title}</h5>
                <p>{subTitle}</p>
            </div>
        </div>
    );
};

export default ServiceSectionCard;