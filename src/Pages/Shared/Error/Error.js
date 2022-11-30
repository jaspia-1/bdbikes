import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className=' min-h-screen '>

            <div class="flex flex-col items-center">
                <div class="text-indigo-500 font-bold text-7xl">
                    404
                </div>

                <div class="font-bold text-3xl xl:text-7xl lg:text-6xl md:text-5xl mt-10">
                    This page does not exist
                </div>

                <div class="text-gray-400 font-medium text-sm md:text-xl lg:text-2xl mt-8">
                    The page you are looking for could not be found.
                </div>
                <Link to='/' className='btn btn-primary btn-sm p-2 my-10'>Home</Link>
            </div>

        </div>
    );
};

export default Error;