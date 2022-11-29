import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import useSeller from '../../hooks/useSeller';
import Catagory from '../Home/catagory/Catagory';
import BikeProduct from '../Shared/BikeProduct/BikeProduct';
import ProductCard from '../Shared/ProductCard/ProductCard';

const Bikes = () => {
    const bikes = useLoaderData();
    const [selectedData, setSelectedData] = useState(null);
    const { userRoll, user } = useContext(AuthContext)
    const [isSeller] = useSeller(user?.email)
    const [isAdmin] = useAdmin(user?.email)
    console.log(bikes)
    return (
        <div>
            <Catagory></Catagory>
            <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-3'>
                {
                    bikes.map(car => <BikeProduct key={car._id} product={car}>{(userRoll !== 'admin' && user) && <div className=' flex justify-between'>
                        <p>
                            <label htmlFor="booking-model" className='btn btn-primary  btn-sm mx-2 my-2' onClick={() => setSelectedData(car)}>Book Now</label>
                            <button className='btn btn-gray btn-sm mx-2 my-2 '>Add on WishList</button></p>
                    </div>}</BikeProduct>)
                }
            </div>
        </div>
    );
};

export default Bikes;