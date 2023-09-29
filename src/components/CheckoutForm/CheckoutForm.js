import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const CheckoutForm = ({ booking }) => {
    const stripe = useStripe()
    const elements = useElements()
    const [cardError, setCardError] = useState("")
    const [cardPaymentMethod, setCardPaymentMethod] = useState("")
    const [transectionId, setTransectionId] = useState("")
    const [processing, setProcessing] = useState(false)
    const [secretClient, setSecretClient] = useState("")
    const { price, patientName, phone, email, _id } = booking
    useEffect(() => {
        fetch("https://doctors-portal-server-green-xi.vercel.app/create-payment-intent", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("doctors-portal-token")}`
            },
            body: JSON.stringify({ price })
        })
            .then((response) => response.json())
            .then((data) => {
                setSecretClient(data.clientSecret)
            })
    }, [price])

    const handleSubmitCard = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement)

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            setCardError(error)
            // console.log("errror", error)
        } else {
            // console.log("paymentMethod", paymentMethod)
            setCardError("")
        }
        setProcessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            secretClient,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patientName,
                        email,
                        phone,
                    },
                },
            })
        if (confirmError) {
            setCardError(confirmError);
            return;
        }
        if (paymentIntent.status === "succeeded") {
            setTransectionId(paymentIntent.id)
            const payment = {
                price,
                email,
                transectionId: paymentIntent.id,
                bookingId: _id
            }
            fetch("https://doctors-portal-server-green-xi.vercel.app/payment", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(payment)
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.acknowledged) {
                        toast.success("Your Payment Successful", {
                            duration: 3000
                        })
                    }
                })
        }
        setProcessing(false)
    }
    return (
        <div>
            <form onSubmit={handleSubmitCard}>
                <CardElement options={{
                    style: {
                        base: {
                            fontSize: "16px",
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        }
                    }
                }}></CardElement>
                <div className='flex justify-start'>
                    <button className='btn btn-sm btn-primary px-5 mt-5' type='submit' disabled={!stripe || !secretClient || processing}>Pay</button>
                </div>
            </form>
            <p className='text-red-700'>{cardError?.message}</p>
        </div>
    );
};

export default CheckoutForm;