import React from 'react';
import './Extra.css'

const Extra = () => {
    return (
        <div className='md:flex  block justify-around extra my-10 py-10 text-white'>
            <div className='text-center p-3'>
                <h3 className='text-2xl bebas'>Happy Customers
                </h3>
                <h2 className="text-4xl text-red-600 roboto">40000+</h2>
                <p className='text-xs'> A pool of satisfied customers who loved our service <br /> in buying, selling, and exchanging used bikes

                </p>
            </div>
            <div className='text-center p-3'>
                <h3 className='text-2xl bebas'>Customer Rating 4.7 / 5

                </h3>
                <h2 className="text-4xl text-red-600 roboto">Rating</h2>
                <p className='text-xs'> Highest customer rating in the market



                </p>
            </div>
            <div className='text-center p-3'>
                <h3 className='text-2xl bebas'>Sells On every hour

                </h3>
                <h2 className="text-4xl text-red-600 roboto">20+</h2>
                <p className='text-xs'>Wide range of refurbished two-wheelers <br /> with superior customer service




                </p>
            </div>
        </div>
    );
};

export default Extra;