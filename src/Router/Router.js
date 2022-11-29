import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Dashbaords from '../Pages/Dashboards/Dashbaords';
import WelcomeDashboard from '../Pages/Dashboards/Welcome/WelcomeDashboard';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/SignUp/SignUp';
import Private from '../Private/Private';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }

        ],
    },
    {
        path: '/dashboard',
        element: <Private><Dashbaords></Dashbaords></Private>,
        children: [
            {
                path: '/dashboard',
                element: <WelcomeDashboard></WelcomeDashboard>
            }
        ]
    }
]);


export default router;