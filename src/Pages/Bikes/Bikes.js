import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import useSeller from '../../hooks/useSeller';
import Catagory from '../Home/catagory/Catagory';
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
        </div>
    );
};

export default Bikes;