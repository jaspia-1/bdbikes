import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import useSeller from '../../hooks/useSeller';
import Catagory from '../Home/catagory/Catagory';
import BikeProduct from '../Shared/BikeProduct/BikeProduct';
import BookingModal from '../Shared/BookingModal/BookingModal';
import ProductCard from '../Shared/ProductCard/ProductCard';

const Bikes = () => {
    const bikes = useLoaderData();
    const [selectedData, setSelectedData] = useState(null);
    const { userRoll, user } = useContext(AuthContext)
    const [isSeller] = useSeller(user?.email)
    const [isAdmin] = useAdmin(user?.email)
    const navigate = useNavigate()
    console.log(bikes)
    const handleWishlist = car => {
        if (!user || !user?.email) {
            return navigate('/login')
        }
        car.email = user.email;

        fetch('http://localhost:5000/wishlist', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(car)
        })
            .then(res => res.json())
            .then(data => toast.success('Added On wishlist'))
    }
    console.log(userRoll)
    return (
        <div>
            <div>
                {
                    selectedData && <BookingModal selectedData={selectedData} setSelectedData={setSelectedData}></BookingModal>
                }
            </div>
            <Catagory></Catagory>
            {
                userRoll === 'admin' && <div className='container'>

                    <h1 className=" m-4 text-center  text-slate-500">You are an admin .You can't Book .Booking can possible for sellers and buyers</h1>
                </div>
            }
            <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-3'>
                {
                    bikes.map(bike => <BikeProduct key={bike._id} product={bike}>{(userRoll !== 'admin') && <div className=' flex justify-between'>

                        <label htmlFor="booking-model" className='btn btn-primary  btn-sm mx-2 my-2' onClick={() => {
                            if (!user || !user?.email) {
                                return navigate('/login')
                            }

                            setSelectedData(bike)
                        }}>Book Now</label>
                        <button className='btn btn-gray btn-sm mx-2 my-2 ' onClick={() => handleWishlist(bike)}>Add on WishList</button>
                    </div>}</BikeProduct>)
                }
            </div>
        </div>
    );
};

export default Bikes;