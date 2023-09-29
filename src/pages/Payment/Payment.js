import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from '../../components/CheckoutForm/CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
const stripePromise = loadStripe(process.env.REACT_APP_STRIPRPUBLICKEY)

const Payment = () => {
    const booking = useLoaderData();
    const { date, email, patientName, price, phone, slot, treatment } = booking
    return (
        <div className='mx-5'>
            <h3 className='text-2xl text-left'>Payment Service</h3>
            <p className='text-left mt-5'>{patientName} please pay {price} for {treatment} in {date} slot {slot}</p>
            <div className='w-96 mx-auto mt-8'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm booking={booking}></CheckoutForm>
                </Elements>
            </div>

        </div>
    );
};

export default Payment;