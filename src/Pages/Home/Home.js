import React from 'react';
import NavHeading from '../Shared/NavHeading/NavHeading';
import Banner from './Banner/Banner';
import Catagory from './catagory/Catagory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Catagory></Catagory>
        </div>
    );
};

export default Home;