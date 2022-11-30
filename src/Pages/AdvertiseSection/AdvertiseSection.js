import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import useSeller from '../../hooks/useSeller';
import BikeProduct from '../Shared/BikeProduct/BikeProduct';
import BookingModal from '../Shared/BookingModal/BookingModal';

const AdvertiseSection = () => {
    const [bikes, setAdBike] = useState([])
    const { userRoll, user } = useContext(AuthContext)
    const [isSeller] = useSeller(user?.email)
    const [isAdmin] = useAdmin(user?.email)
    const [selectedData, setSelectedData] = useState(null);
    const [alterSeletedData, setAlterSelectedData] = useState(null);
    const navigate = useNavigate()
    useEffect(() => {
        axios.get('https://bdbikeserver.vercel.app/advertise')
            .then(data => setAdBike(data.data))
    }, [])
    const handleWishlist = bike => {
        if (!user || !user?.email) {
            return navigate('/login')
        }
        bike.email = user.email;
        bike._id = bike.serial;
        fetch('https://bdbikeserver.vercel.app/wishlist', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bike)
        })
            .then(res => res.json())
            .then(data => toast.success('Added to wishlist'))
    }
    useEffect(() => {
        setSelectedData(alterSeletedData)
    }, [alterSeletedData])
    const handleTosetSelectedData = bike => {
        bike._id = bike.serial;
        setAlterSelectedData(bike);
    }

    return (
        <div>
            <div>
                {
                    selectedData && <BookingModal selectedData={selectedData} setSelectedData={setSelectedData}></BookingModal>
                }
            </div>
            {
                bikes.length !== 0 ?

                    <div className=' container mx-auto'>
                        <h1 className='text-center  text-5xl bebas'>Promoted</h1>
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
                                        const newbike = { ...bike }
                                        newbike._id = bike.serial
                                        setSelectedData(newbike)
                                        console.log(newbike)
                                    }}>Book Now</label>
                                    <button className='btn btn-gray btn-sm mx-2 my-2 ' onClick={() => handleWishlist(bike)}>Add on WishList</button>
                                </div>}</BikeProduct>)
                            }
                        </div>


                    </div> : ''
            }
        </div>
    )

};


export default AdvertiseSection;