import React from 'react';
import treatment from "../../../assets/images/treatment.png"

const AboutSection = () => {
    return (
        <div className="flex flex-col md:flex-row  justify-center items-center bg-base-100  my-10">
            <div className='w-full md:w-1/2 text-center md:text-center'>
                <img className='w-11/12 md:w-3/5 my-6 lg:ml-20 rounded inline-block text-center md:text-right' src={treatment} alt="Movie" />
            </div>
            <div className='w-full md:w-1/2 text-left px-3 md:px-8'>
                <h2 className="text-3xl font-bold">Exceptional Dental Care, on Your Terms</h2>
                <p className="my-5">Thoroughly brushing your teeth for two minutes twice a day will remove plaque. Flossing in between your teeth at least once every day will ensure plaque and food debris is removed from places your toothbrush cannot reach. It’s also beneficial to use a mouthwash with fluoride to strengthen teeth enamel, remove bacteria and prevent tooth decay. Don’t forget to replace your manual toothbrush or electric toothbrush head every three months to achieve an efficient clean.</p>
                <button className='btn bg-gradient-to-r from-secondary to-primary text-semibold text-white'>GET STARTED</button>
            </div>
        </div>
    );
};

export default AboutSection;