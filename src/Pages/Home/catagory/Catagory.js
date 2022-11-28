import React from 'react';
import { Link } from 'react-router-dom';
import ktm from '../../../assets/catagory/ktm.png'
import kawasaki from '../../../assets/catagory/kawasaki.png'
import honda from '../../../assets/catagory/honda.png'
import suzuki from '../../../assets/catagory/suzuki.png'

const Catagory = () => {
    return (
        <div className='container mx-auto my-9'>
            <div className='text-center'>

                <h1 className="text-5xl my-3 font-bold bebas capitalize">We allow only these brands to buy and sell</h1>
                <p className='text-slate-600'>Select any catagory to explore</p>
            </div>
            <div className='grid grid-cols-4 items-center'>
                <Link className='hover-brand mx-auto '> <img src={ktm} alt="" /></Link>
                <Link className='hover-brand mx-auto '> <img src={kawasaki} alt="" /></Link>
                <Link className='hover-brand mx-auto '> <img src={honda} alt="" /></Link>
                <Link className='hover-brand mx-auto '> <img src={suzuki} alt="" /></Link>

            </div>
        </div>
    );
};

export default Catagory;