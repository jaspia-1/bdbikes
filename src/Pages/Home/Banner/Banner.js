import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div>
            <div className='text-center bannr'>
                <div className='py-20 container mx-auto block md:flex justify-between  items-center'>
                    <h1 className='pacifico text-9xl text-orange-500  00'>Bd Bikes</h1>
                    <div className=' border mx-4 my-9 md:max-w-xs transparent p-2 md:ml-auto'>

                        <h1 className='text-7xl bebas font-bold text-center text-white'> Buy & Sell  <br />100% Online</h1>
                        <p className='text-xl font-bold roboto text-slate-200 py-2'>Get the vehicle and pricing details you need without any pressure, by conveniently buying from the comfort of your home.
                        </p>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Banner;