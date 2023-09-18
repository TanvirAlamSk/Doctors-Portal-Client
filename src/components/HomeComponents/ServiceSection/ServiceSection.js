import React from 'react';
import icon1 from "../../../assets/images/fluoride.png"
import icon2 from "../../../assets/images/cavity.png"
import icon3 from "../../../assets/images/whitening.png"
import ServiceSectionCard from './ServiceSectionCard/ServiceSectionCard';

const ServiceSection = () => {
    const serviceItems = [
        {
            id: 1,
            icon: icon1,
            title: "Fluoride Treatment",
            subTitle: "Fluoride, a mineral that occurs naturally in many foods and water, helps prevent tooth decay."
        },
        {
            id: 2,
            icon: icon2,
            title: "Cavity Filling",
            subTitle: "Simple and straightforward one that can be done right at your dentist's office."
        },
        {
            id: 3,
            icon: icon3,
            title: "Teeth Whitening",
            subTitle: "Quick and painless in-office whitening system that provides dramatic results—teeth that are up to eight shades whiter!"
        }
    ]
    return (
        <div className='text-center my-16'>
            <h4 className='text-secondary font-bold'>OUR SERVICES</h4>
            <h2 className='text-2xl text'>Services We Provide</h2>
            <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4 my-16'>
                {
                    serviceItems.map((item) => <ServiceSectionCard key={item.id} item={item}></ServiceSectionCard>)}
            </div>

        </div>
    );
};

export default ServiceSection;