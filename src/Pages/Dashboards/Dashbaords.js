import React from 'react';
import { Outlet } from 'react-router-dom';
import NavHeading from '../Shared/NavHeading/NavHeading';
import Spinner from '../Shared/Spinner/Spinner';

const Dashbaords = () => {
    return (
        <div>
            <NavHeading></NavHeading>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashbaords;