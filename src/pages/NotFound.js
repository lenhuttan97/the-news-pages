import React from 'react';
import { useLocation, useRouteError } from 'react-router-dom';

function NotFound(props) {
    const error = useRouteError();
    const location = useLocation();
    const pathname = location.pathname;

    return (
        <div>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{pathname}</i>
            </p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}

export default NotFound;