import React from 'react';
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import quote from '../../assets/icons/quote.svg';
import ReviewCard from './ReviewCard/ReviewCard';

const comments = [
    {
        id: 1,
        name: "Winson Herry",
        image: people1,
        address: "Khulna",
        comments: "The services that I receive from DP is excellent. Dr. and the staff are friendly and ensure that I am properly informed about my health and care. I would have no qualms in recommending them to friendly and friends."
    },
    {
        id: 2,
        name: "Winson Herry",
        image: people2,
        address: "Barisal",
        comments: "Dr. did a great job with my first ever health exam. She explained everything to me in a very clear manner. She was also kind and friendly. All of the staff was great – they were helpful, patient and helped with my insurance."
    },
    {
        id: 3,
        name: "Winson Herry",
        image: people3,
        address: "Dhaka",
        comments: "Great medical office, wonderful and warm experience from start to finish. Appreciate Dr. taking time to go over the diagnosis clearly and treatment options. Was referred over by my general doctor and can see why. Highly recommended."
    },
]

const Review = () => {
    return (
        <div className=' my-20'>
            <div className='flex justify-between'>
                <div className='text-left'>
                    <h5 className='text-secondary font-bold'>Testimonial</h5>
                    <h2 className='text-3xl font-base my-4'>What Our Patients Says</h2>
                </div>
                <div>
                    <img src={quote} className='w-32 lg:w-40' alt=''></img>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-20'>
                {
                    comments.map((comment) => <ReviewCard key={comment.id} comment={comment}></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Review;