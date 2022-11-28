import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import NavHeading from '../Pages/Shared/NavHeading/NavHeading';

const Main = () => {
    return (
        <div>
            <NavHeading></NavHeading>
            <Outlet></Outlet>
            <Toaster />

        </div>
    );
};

export default Main;