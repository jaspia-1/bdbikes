import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [buyorseller, setBuyOrSerller] = useState('Buyer');
    const [signUpError, setSignUpError] = useState('');
    return (
        <div >
            <div className='border rounded-lg  m-3.5 container bg-gradient-to-r  from-slate-900 to-slate-800 mx-auto max-w-md p-3 '>


                <form onSubmit={handleSubmit()} className=" ">
                    <h4 className="text-2xl text-center my-2 bebas  p-2 rounded-lg text-orange-500" >Sign Up</h4>

                    <div className="form-control w-full  ">
                        <label className="label">
                            <span className="text-orange-500 label-text roboto">Name</span>

                        </label>
                        <input type="text" placeholder="Name" className="input input-bordered w-full "  {...register("name", {
                            required: "Provide a Name",

                        })} />
                        {errors.name && <p className='text-red-600 py-2' role="alert">{errors.name?.message}</p>}


                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="text-orange-500 label-text roboto">Email</span>
                        </label>
                        <input className="input input-bordered w-full" {...register("email", {
                            required: "Provide a email",

                        })} type="email" placeholder="Email" />
                        {errors.email && <p className='text-red-600 py-2' role="alert">{errors.email?.message}</p>}


                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="text-orange-500 label-text roboto">Password</span>
                        </label>
                        <input className="input input-bordered w-full  " {...register("password",

                            {
                                required: "Provide a password",
                                minLength: { value: 6, message: "Provide at least 6 characters" },
                                pattern: {
                                    value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                                    message: "Password Must Strong"
                                }
                            }
                        )} type="password" placeholder="Password" />
                        {errors.password && <p className=' text-red-600 py-2' role="alert">{errors.password?.message}</p>}

                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="text-orange-500 label-text mt-6 roboto">Select what you are</span>
                        </label>
                        <div className='flex justify-evenly my-2'>


                            <div className='flex'>
                                <input {...register("buyeorseller")} onClick={(e) => setBuyOrSerller
                                    (e.value)} className="radio radio-secondary mx-2" type="radio" value="Buyer" defaultChecked={buyorseller === 'Buyer' ? true : false} />
                                <p className='text-orange-500'>Buyer</p>

                            </div>
                            <div className='flex'>
                                <input {...register("buyeorseller")} onClick={(e) => setBuyOrSerller
                                    (e.value)} className="radio radio-secondary mx-2" type="radio" value="Seller" defaultChecked={buyorseller === 'Seller' ? true : false} />
                                <p className='text-orange-500'>Seller</p>
                            </div>
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="text-orange-500 label-text">Add a Profile Picture</span>
                            </label>
                            <input className="file-input file-input-bordered mb-5 file-input-sm w-full" {...register("img", {
                                required: "Provide an Image"
                            })} type="file" placeholder="image" />


                        </div>

                    </div>

                    <div className='w-full text-center my-2'>

                        <input type="submit" className='btn   w-full ' value="Sign Up" />
                    </div>
                    <p className='mt-3 text-center text-orange-500 '>Already have an account?<Link to='/login' className='text-secondary mx-2'>Login</Link></p>
                    {
                        signUpError && <p className='text-red-600'>{signUpError}</p>
                    }
                    <div className=" text-orange-500 divider">OR</div>
                </form>

            </div>
        </div>
    );
};

export default SignUp;