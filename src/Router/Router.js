import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Bikes from '../Pages/Bikes/Bikes';
import Blog from '../Pages/Blog/Blog';
import AddProduct from '../Pages/Dashboards/AddProduct/AddProduct';
import AllBuyers from '../Pages/Dashboards/AllBuyers/AllBuyers';
import AllSellers from '../Pages/Dashboards/AllSellers/AllSellers';

import Dashbaords from '../Pages/Dashboards/Dashbaords';
import MyOrders from '../Pages/Dashboards/MyOrders/MyOrders';
import MyProducts from '../Pages/Dashboards/MyProducts/MyProducts';
import MyWishList from '../Pages/Dashboards/MyWishList/MyWishList';
import WelcomeDashboard from '../Pages/Dashboards/Welcome/WelcomeDashboard';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Payment from '../Pages/Shared/Payment';
import SignUp from '../Pages/SignUp/SignUp';
import Private from '../Private/Private';
import SellerRoute from '../Private/SellerRoute';
import AdminRouteProtect from './AdminRouteProtect/AdminRouteProtect';

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
            },
            {
                path: '/catagory/:id',
                element: <Bikes></Bikes>,
                loader: async ({ params }) => fetch(`https://bdbikeserver.vercel.app/catagory/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
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
            },
            {
                path: '/dashboard/addaproduct',
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path: '/dashboard/myproducts',
                element: <SellerRoute><MyProducts></MyProducts> </SellerRoute>
            },
            {
                path: '/dashboard/mywishlist',
                element: <Private><MyWishList></MyWishList> </Private>
            },

            {
                path: '/dashboard/myorders',
                element: <Private><MyOrders></MyOrders> </Private>
            },
            {
                path: '/dashboard/allsellers',
                element: <AdminRouteProtect><AllSellers></AllSellers></AdminRouteProtect>
            },
            {
                path: '/dashboard/allbuyers',
                element: <AdminRouteProtect><AllBuyers></AllBuyers></AdminRouteProtect>
            },
            {

                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: async ({ params }) => fetch(`https://bdbikeserver.vercel.app/payinfo/${params.id}`)
            },
        ]
    }
]);


export default router;