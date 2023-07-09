import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header'
import Footer from '../components/Footer'

function Root(props) {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
}

export default Root;