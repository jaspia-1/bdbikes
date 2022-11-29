import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOutForm from './CheckOutForm';
const stripePromise = loadStripe(process.env.REACT_APP_stripe_key)
const Payment = () => {
    const booking = useLoaderData();

    const { name, price, serial } = booking;
    console.log(booking)
    return (
        <div>
            <h2 className="text-6xl border bg-slate-800 p-2 text-white bebas my-5 mx-3"> Payment Process</h2>


            <h4 className="text-2xl bebus">Paying   <strong>${price}</strong>  for {name}</h4>


            <div className=' my-6'>
                <Elements stripe={stripePromise}>
                    <CheckOutForm booking={booking} />
                </Elements>

            </div>
        </div>
    );
};

export default Payment;