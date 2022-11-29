import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const NavHeading = () => {
    const { user, logOut, setUserRoll } = useContext(AuthContext);
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const handleToLogOut = () => {
        console.log("it is clicked")
        logOut()
            .then((res) => {
                console.log('logout')
                setUserRoll('Buyer')
                navigate(from, { replace: true })
                localStorage.removeItem("accessToken");

            })
            .catch(() => { })
    }

    const menu = <>
        <li className='my-2 mx-2 text-white'><Link to='/blog'>Blog</Link></li>
        <li className='my-2 mx-2 text-white'><Link to='/dashboard'>Dashboard</Link></li>
        {
            (user && user?.uid) ?
                <div className='flex items-center'><li className='text-white '>{user.displayName}</li>< li className='my-2 mx-2 text-white'><button className='btn btn-accent  rounded-lg  btn-outline' onClick={handleToLogOut} >Log Out</button></li> </div> :
                <>

                    <li className='my-2 mx-2 text-white'><Link to='/login'>Login</Link></li>
                    <li className='my-2 mx-2 text-white'><Link to='/signup'>Sign Up</Link></li>
                </>
        }

    </>
    return (
        <div className=' bg-slate-800 text-white shadow-lg'>
            <div className=" navbar  container mx-auto">
                <div className="navbar-start " >
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>

                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-800 rounded-box w-52">
                            {menu}

                        </ul>
                    </div>
                    <Link to='/' className="pacifico my-2 flex text-orange-500 items-center font-bold  text-xl">
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