import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header'
import Footer from '../components/Footer'

function Root(props) {
    return (
        <>
            <div className='container'>
                <Header></Header>
            </div>

            <main>
                <Outlet></Outlet>
            </main>
            <div className='container'>
                <Footer></Footer>
            </div>

        </>
    );
}

export default Root;