import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';
import Spinner from '../../Shared/Spinner/Spinner';

const AllSellers = () => {
    const { user } = useContext(AuthContext);
    const uri = `https://bdbikeserver.vercel.app/user?email=${user.email}&&role=Seller`
    const { data: sellers = [], isLoading, refetch } = useQuery({
        queryKey: ['user', user.email],
        queryFn: async () => {
            const res = await fetch(uri, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })
    console.log(sellers)

    const handleVerify = seller => {
        fetch(`https://bdbikeserver.vercel.app/verify?email=${user.email}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(seller)
        })
            .then(res => res.json())
            .then(data => {
                if (data.msg) {
                    toast.success("verified")
                    refetch()
                }
            })
    }
    if (isLoading) {
        return <Spinner></Spinner>
    }
    const handleToDelete = seller => {
        fetch(`https://bdbikeserver.vercel.app/userdelete?email=${user.email}&&selleremail=${seller.email}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`

            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.msg) {
                    toast.success("Deleted")
                    refetch()
                }
            })
    }
    return (
        <div className='m-5 font'>
            <h1 className='text-6xl border bg-slate-800 p-2 text-white bebas my-5 mx-3'>Sellers</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                            <th>Verify</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers.map((seller, idx) => <tr className='' key={seller._id}>
                                <th>{idx + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-24 rounded-full">
                                            <img src={seller.img} />
                                        </div>
                                    </div>
                                </td>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                                <td><button className='btn btn-secondary btn-sm' onClick={() => handleToDelete(seller)}>Delete</button></td>
                                <td>{
                                    seller.verifiedSeller ? <p className='font-bold'>Verified</p> : <button className='btn btn-gray btn-sm' onClick={() => handleVerify(seller)}>Verify</button>
                                }
                                </td>
                            </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;