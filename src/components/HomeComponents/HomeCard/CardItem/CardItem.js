import React from 'react';

const CardItem = ({ items }) => {
    const { id, icon, title, subTitle } = items
    return (
        <div className={`${id % 2 == 0 ? "bg-accent" : "bg-gradient-to-r from-secondary to-primary"} text-white flex items-center p-6 rounded-lg`}>
            <div className='mr-5'>
                <img src={icon} alt=''></img>
            </div>
            <div className='text-left'>
                <h5>{title}</h5>
                <p>{subTitle}</p>
            </div>
        </div>
    );
};

export default CardItem;