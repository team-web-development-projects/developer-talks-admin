import React from 'react';
import NavSideBar from '../layouts/NavSideBar';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div className="flex flex-row mx-auto">
            <NavSideBar/>
            <Outlet/>
        </div>
    );
};

export default Home;