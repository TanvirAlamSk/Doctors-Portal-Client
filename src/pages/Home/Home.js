import React from 'react';
import MainSection from '../../components/HomeComponents/MainSection/MainSection';
import HomeCard from '../../components/HomeComponents/HomeCard/HomeCard';
import ServiceSection from '../../components/HomeComponents/ServiceSection/ServiceSection';
import AboutSection from '../../components/HomeComponents/AboutSection/AboutSection';
import AppointmentSection from '../../components/HomeComponents/AppointmentSection/AppointmentSection';
import Review from '../../components/Review/Review';

const Home = () => {
    return (
        <div>
            <MainSection></MainSection>
            <HomeCard></HomeCard>
            <ServiceSection></ServiceSection>
            <AboutSection></AboutSection>
            <AppointmentSection></AppointmentSection>
            <Review></Review>
        </div>
    );
};

export default Home;