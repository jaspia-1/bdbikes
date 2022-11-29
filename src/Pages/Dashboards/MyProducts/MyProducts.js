import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import BikeProduct from '../../Shared/BikeProduct/BikeProduct';
import Spinner from '../../Shared/Spinner/Spinner';

const MyProducts = () => {
    const { user, logOut, setUserRoll } = useContext(AuthContext);
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const uri = `http://localhost:5000/product?email=${user.email}`
    const { data: bikes = [], isLoading, refetch } = useQuery({
        queryKey: ['products', user.email],
        queryFn: async () => {
            try {
                const res = await fetch(uri, {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                if (res.status === 403) {
                    setUserRoll('Buyer')
                    logOut()
                        .then(() => {
                            localStorage.removeItem("accessToken");
                            navigate(from, { replace: true })
                        })
                }
                const data = await res.json();
                return data;
            }
            catch (err) {

            }
        }

    })

    if (isLoading) {
        return <Spinner></Spinner>
    }
    console.log(bikes)
    const handleDelete = bike => {
        fetch(`http://localhost:5000/singlebike/${bike._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`

            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    refetch()
                    toast.success('Data deleted')

                }
            })
    }
    const handleAvailable = bike => {
        fetch(`http://localhost:5000/available`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(bike),
        })
            .then(res => res.json())
            .then(data => {
                refetch()

            })
    }
    const handleSold = bike => {
        fetch(`http://localhost:5000/sold`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(bike),
        })
            .then(res => res.json())
            .then(data => {
                refetch()

            })
    }
    const handleToAddvertise = bike => {
        const advertise = {
            name: bike.name,
            price: bike.price,
            email: bike.email,
            catagory: bike.catagory,
            img: bike.img,
            year: bike.year,
            orginalprice: bike.orginalprice,
            phone: bike.phone,
            location: bike.location,
            condition: bike.condition,
            serial: bike._id,
            sellername: bike.sellername,
            description: bike.description,
            verifiedSeller: bike.verifiedSeller,
            issold: false,
            newOwner: "",
            txnid: ""

        }

        fetch('http://localhost:5000/advertise', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(advertise)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("Selected for Advertisement ")

                } else {


                }
            })

    }
    return (
        <div>
            <h1 className='text-6xl border bg-slate-800 p-2 text-white bebas my-5 mx-3'>My Products</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-3'>

                {
                    bikes.map(product => <BikeProduct key={product._id} product={product}>

                        {
                            (product?.issold) ? <div className='w-full'>
                                <p className='text-xs gray-text'> Status: Already Sold</p>
                                <button className='m-1 p-1 w-full rounded btn-circle  btn  text-white text-center btn-sm' onClick={() => handleAvailable(product)}>Make Available</button>
                                <div>
                                    <button className='btn btn-primary btn-sm w-full  m-1 ' onClick={() => handleDelete(product)}>DELETE</button>
                                </div>
                            </div> :
                                <div className='w-full'> <p className='text-xs gray-text'> Status: Available</p> <p className='m-1 btn btn-sm w-full rounded btn-circle  text-white text-center ' onClick={() => handleSold(product)}> Make Sold</p> <div> <button className='btn btn-accent w-full btn-sm m-1 p-1' onClick={() => handleDelete(product)}>DELETE</button></div><div> <button className='btn btn-secondary w-full btn-sm m-1 p-1' onClick={() => handleToAddvertise(product)}>Advertise</button></div></div>
                        }
                    </BikeProduct>)
                }
            </div>
        </div>
    );
};

export default MyProducts;