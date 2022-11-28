import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import NavHeading from '../Shared/NavHeading/NavHeading';
import Banner from './Banner/Banner';
import Catagory from './catagory/Catagory';

const Home = () => {
    const { working } = useContext(AuthContext)
    console.log(working)
    return (
        <div>
            <Banner></Banner>
            <Catagory></Catagory>
        </div>
    );
};

export default Home;