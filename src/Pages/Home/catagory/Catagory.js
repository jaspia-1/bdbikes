import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import ktm from '../../../assets/catagory/ktm.png'
import kawasaki from '../../../assets/catagory/kawasaki.png'
import honda from '../../../assets/catagory/honda.png'
import suzuki from '../../../assets/catagory/suzuki.png'

const Catagory = () => {
    let activeStyle = {
        border: "1px solid gray",
    };

    let activeClassName = "underline";

    return (
        <div className='container mx-auto mt-16 '>
            <div className='p-3'>
                <h1 className='text-center  text-5xl bebas'>Brands</h1>
                <h1 className="text-3xl my-3 font-bold roboto capitalize">We allow only these brands to buy and sell</h1>
                <p className='text-slate-600'>Select any catagory to explore</p>
            </div>
            <div className='grid grid-cols-4 items-center mb-10'>
                <NavLink style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                } to='/catagory/ktm' className='hover-brand mx-auto '> <img src={ktm} alt="" /></NavLink>
                <NavLink style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                } to='/catagory/kawasaki' className='hover-brand mx-auto '> <img src={kawasaki} alt="" /></NavLink>
                <NavLink style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                } to='/catagory/honda' className='hover-brand mx-auto '> <img src={honda} alt="" /></NavLink>
                <NavLink style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                } to='/catagory/suzuki' className='hover-brand mx-auto '> <img src={suzuki} alt="" /></NavLink>

            </div>
        </div>
    );
};

export default Catagory;