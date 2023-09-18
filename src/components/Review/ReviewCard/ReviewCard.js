import React from 'react';

const ReviewCard = ({ comment }) => {
    const { name, image, address, comments } = comment
    return (
        <div className='shadow-lg text-left p-6 rounded-lg'>
            <p className=''>{comments}</p>
            <div className='flex items-center mt-6'>
                <img src={image} className='w-12 border-2 border-primary rounded-full mr-9' alt=''></img>
                <div className=''>
                    <p>{name}</p>
                    <small>{address}</small>
                </div>
            </div>

        </div>
    );
};

export default ReviewCard;