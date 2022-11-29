import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import Spinner from '../../Shared/Spinner/Spinner';
import WishListOrderCard from '../../Shared/WishlistOrderCard/WishListOrderCard';

const MyWishList = () => {
    const { user, setUserRoll, logOut } = useContext(AuthContext);
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const uri = `http://localhost:5000/wishlist?email=${user.email}`
    const { data: bikes = [], isLoading } = useQuery({
        queryKey: ['wishlist', user.email],
        queryFn: async () => {
            const res = await fetch(uri, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            if (res.status === 403) {
                setUserRoll('Buyer')
                logOut()
                    .then(() => {
                        navigate(from, { replace: true })
                        localStorage.removeItem("accessToken");
                    })
            }
            const data = await res.json();
            return data;
        }
    })
    if (isLoading) {
        return <Spinner></Spinner>
    }
    return (
        <div>
            <h1 className='text-6xl border bg-slate-800 p-2 text-white bebas my-5 mx-3'>My Wishlist</h1>
            <div className="overflow-x-auto p-6">
                <table className="table w-full ">
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Status</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            bikes.map((bike, idx) => <tr key={bike._id}>
                                <th>{idx + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-24 rounded-xl">
                                            <img src={bike.img} />
                                        </div>
                                    </div>
                                </td>
                                <td>{bike.name}</td>
                                <td>{bike.price}</td>
                                <td>{

                                    (bike?.issold && bike?.newOwner === bike.email) ? <div className='text-end'><p className='roboto'>Paid <br /> </p> <p className='text-xl text-slate-500'>You won the item</p></div> : (bike?.issold) ? <div><p className='roboto'>Sold</p></div> :
                                        <Link to={`/dashboard/payment/${bike.serial}`}><button className='btn btn-primary  '>Pay</button></Link>
                                }

                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>




        </div>
    );
};

export default MyWishList;