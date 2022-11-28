import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';


const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext)
    const { saveUser } = useContext(AuthContext)
    const [loggedUserEmail, setLoggedUserEmail] = useState('');

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleToSignIn = () => {
        googleSignIn()
            .then(res => {
                console.log(res)
                saveUser(res.user.displayName, res.user.email, 'Buyer', res.user.photoURL)
                    .then(result => result.json())
                    .then(success => {
                        console.log(success)
                        console.log(res.user)
                        setLoggedUserEmail(res.user.email)
                    })
                    .catch(err => console.log(err))
                console.log('successfully loggd in ')
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <button className='btn btn-accent  w-full' onClick={handleToSignIn}>CONTINUE WITH GOOGLE</button>
        </div>
    );
};

export default SocialLogin;