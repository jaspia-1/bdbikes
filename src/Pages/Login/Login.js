import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useToken from '../../hooks/useToken';

import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { user, login, saveUser, seLoading, loading } = useContext(AuthContext)
    const [signUpError, setSignUpError] = useState('');
    const [loggedUserEmail, setLoggedUserEmail] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const [token] = useToken(loggedUserEmail);
    const from = location.state?.from?.pathname || '/';
    useEffect(() => {
        if (token) {
            toast.success('Logged in');
            navigate(from, { replace: true })
            console.log("dhukse")
            seLoading(false)

        }
    }, [token])
    const handleToLogin = (data) => {
        seLoading(true)
        login(data.email, data.password)
            .then(res => {

                console.log(res.user)
                setLoggedUserEmail(res.user.email);



            }
            )
            .catch(err => {
                seLoading(false)
                toast.error(err.message)


            })
    }
    return (
        <div>
            <div className='border rounded-lg bg-gradient-to-r  from-slate-900 to-slate-800 mx-auto max-w-md m-3.5 container  p-3'>


                <form onSubmit={handleSubmit(handleToLogin)} >
                    <p className="pacifico my-2 text-right  flex text-orange-500 items-center font-bold  text-xl">
                        Bd Bikes

                    </p>
                    <h4 className="text-2xl text-center my-2 popin  text-orange-500 bebas">Login</h4>



                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text text-orange-500">Email</span>
                        </label>
                        <input className="input input-bordered w-full" {...register("email", {
                            required: "Provide a email",

                        })} type="email" placeholder="Email" />
                        {errors.email && <p className='text-red-600 py-2' role="alert">{errors.email?.message}</p>}



                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-orange-500">Password</span>
                        </label>
                        <input className="input input-bordered w-full  " {...register("password", {
                            required: "Provide a password",
                        })} type="password" placeholder="Password" />
                        {errors.password && <p className='text-red-600 py-2' role="alert">{errors.email?.password}</p>}



                    </div>


                    <div className='w-full text-center my-2'>

                        <input type="submit" className='btn btn-accent my-4   w-full ' value="Sign Up" />
                    </div>
                    <p className='mt-3 text-center text-orange-500'>New Here?<Link to='/signup' className='text-secondary mx-2'>SignUp</Link></p>
                    {
                        signUpError && <p className='text-red-600'>{signUpError}</p>
                    }
                    <div className="divider text-orange-500">OR</div>
                </form>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;