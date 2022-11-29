import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import AdvertiseSection from '../AdvertiseSection/AdvertiseSection';
import Extra from '../Extra/Extra';
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
            <AdvertiseSection></AdvertiseSection>
            <Extra></Extra>
        </div>
    );
};

export default Home;