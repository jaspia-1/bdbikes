import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import useSeller from '../../hooks/useSeller';
import BookingModal from '../Shared/BookingModal/BookingModal';

const AdvertiseSection = () => {
    const [adcars, setAdCars] = useState([])
    const { userRoll, user } = useContext(AuthContext)
    const [isSeller] = useSeller(user?.email)
    const [isAdmin] = useAdmin(user?.email)
    const [selectedData, setSelectedData] = useState(null);
    const [alterSeletedData, setAlterSelectedData] = useState(null);
    useEffect(() => {
        axios.get('http://localhost:5000/advertise')
            .then(data => setAdCars(data.data))
    }, [])
    const handleWishlist = car => {
        car.email = user.email;
        car._id = car.serial;
        fetch('http://localhost:5000/wishlist', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(car)
        })
            .then(res => res.json())
            .then(data => toast.success('Added to wishlist'))
    }
    useEffect(() => {
        setSelectedData(alterSeletedData)
    }, [alterSeletedData])
    const handleTosetSelectedData = car => {
        car._id = car.serial;
        setAlterSelectedData(car);
    }
    return (
        <div>

        </div>
    );
};


export default AdvertiseSection;