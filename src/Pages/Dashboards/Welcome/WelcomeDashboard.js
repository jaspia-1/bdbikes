import React from 'react';
import dashpng from '../../../assets/dashboard.png'

const WelcomeDashboard = () => {
    return (
        <div>
            <div className='container mx-auto my-10 '>
                <div className='md:flex items-center block '>

                    <h1 className="pacifico text-center text-7xl text-orange-600">Bd Bikes</h1>
                    <img src={dashpng} className="mx-auto" alt="" />
                </div>
                <h2 className="text-3xl text-slate-500 bebas text-center">Let's Tour on your dashboard</h2>
            </div>

        </div>
    );
};

export default WelcomeDashboard;