import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import useSeller from '../../hooks/useSeller';
import NavHeading from '../Shared/NavHeading/NavHeading';
import Spinner from '../Shared/Spinner/Spinner';

const Dashbaords = () => {
    const { user } = useContext(AuthContext);
    const [isSeller] = useSeller(user?.email)
    const [isAdmin] = useAdmin(user?.email)
    return (
        <div>
            <NavHeading></NavHeading>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">


                    <Outlet></Outlet>


                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {
                            isSeller &&
                            <>



                                <li className='hover-li roboto'><Link to='/dashboard/myproducts'>My Products</Link></li>
                                <li className='hover-li roboto'><Link to='/dashboard/addaproduct'>Add A Product</Link></li>
                                <li className='hover-li roboto'><Link to='/dashboard/mywishlist'>My WishList </Link></li>
                                <li className='hover-li roboto'><Link to='/dashboard/myorders'>My Orders </Link></li>

                            </>

                        }
                        {
                            (!isAdmin && !isSeller) &&
                            <>
                                <li className='hover-li roboto'><Link to='/dashboard/mywishlist'>My WishList </Link></li>
                                <li className='hover-li roboto'><Link to='/dashboard/myorders'>My Orders </Link></li>
                            </>

                        }
                        {
                            isAdmin && <>
                                <li className='hover-li roboto'><Link to='/dashboard/allbuyers'>All Buyers </Link></li>
                                <li className='hover-li roboto'><Link to='/dashboard/allsellers'>All Sellers</Link></li>
                                <li className='hover-li roboto'><Link to='/dashboard/reporteditem'>Reported Items</Link></li>
                            </>


                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashbaords;