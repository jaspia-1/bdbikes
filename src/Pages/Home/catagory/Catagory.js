import React from 'react';
import { Link } from 'react-router-dom';
import ktm from '../../../assets/catagory/ktm.png'
import kawasaki from '../../../assets/catagory/kawasaki.png'
import honda from '../../../assets/catagory/honda.png'
import suzuki from '../../../assets/catagory/suzuki.png'

const Catagory = () => {
    return (
        <div className='container mx-auto mt-16 '>
            <div className=''>
                <h1 className='text-center  text-5xl bebas'>Brands</h1>
                <h1 className="text-3xl my-3 font-bold roboto capitalize">We allow only these brands to buy and sell</h1>
                <p className='text-slate-600'>Select any catagory to explore</p>
            </div>
            <div className='grid grid-cols-4 items-center mb-10'>
                <Link className='hover-brand mx-auto '> <img src={ktm} alt="" /></Link>
                <Link className='hover-brand mx-auto '> <img src={kawasaki} alt="" /></Link>
                <Link className='hover-brand mx-auto '> <img src={honda} alt="" /></Link>
                <Link className='hover-brand mx-auto '> <img src={suzuki} alt="" /></Link>

            </div>
        </div>
    );
};

export default Catagory;