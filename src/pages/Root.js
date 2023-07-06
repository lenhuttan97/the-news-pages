import React from 'react';
import { Outlet } from 'react-router-dom';

function Root(props) {
    return (
        <div>
           root
           <div>
            <Outlet></Outlet>
           </div> 
        </div>
    );
}

export default Root;