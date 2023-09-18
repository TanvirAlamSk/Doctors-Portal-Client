import React from 'react';
import cardicon1 from "../../../assets/icons/clock.svg"
import cardicon2 from "../../../assets/icons/marker.svg"
import cardicon3 from "../../../assets/icons/phone.svg"
import CardItem from './CardItem/CardItem';

const cardItems = [
    {
        id: 1,
        icon: cardicon1,
        title: "Opening Hours",
        subTitle: "Morning: 07:30 am to 05:00 pm"
    },
    {
        id: 2,
        icon: cardicon2,
        title: "Visit our location",
        subTitle: "Gulshan, Dhaka-1212, Bangladesh"
    },
    {
        id: 3,
        icon: cardicon3,
        title: "Contact us now",
        subTitle: "+88 02 8836000"
    }
]

const HomeCard = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6 my-10'>
            {
                cardItems.map((items) => <CardItem key={items.id} items={items}></CardItem>)
            }
        </div>
    );
};

export default HomeCard;