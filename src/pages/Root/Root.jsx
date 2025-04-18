import React from 'react';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import { Outlet, useNavigation } from 'react-router';

const Root = () => {
    const navigation = useNavigation();
    const isNavigation = Boolean(navigation.location)
    return (
        <div>
            <Navbar></Navbar>
            {isNavigation && <span>Loading....</span>}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;