import React from 'react';
import { Outlet } from 'react-router-dom';
import NavHeading from '../Pages/Shared/NavHeading/NavHeading';

const Main = () => {
    return (
        <div>
            <NavHeading></NavHeading>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;