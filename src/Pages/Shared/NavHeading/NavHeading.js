import React from 'react';
import { Link } from 'react-router-dom';

const NavHeading = () => {
    const menu = <>
        <li className='my-2 mx-2'><Link to='/blog'>Blog</Link></li>
        <li className='my-2 mx-2 '><Link to='/dashboard'>Dashboard</Link></li></>
    return (
        <div className=' bg-gray-100 shadow-lg'>
            <div className=" navbar  container mx-auto">
                <div className="navbar-start " >
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-100 rounded-box w-52">
                            {menu}
                        </ul>
                    </div>
                    <Link to='/' className="pacifico my-2 flex items-center font-bold  text-xl">
                        Bd Bikes

                    </Link>
                </div>
                <div className="navbar-end hidden  lg:flex">
                    <ul className="menu menu-horizontal  p-0">
                        {menu}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default NavHeading;