import React from 'react';
import { Link } from 'react-router-dom';
import '../css/notFound.css'

function NotFound(props) {
    return (
        <div className='main-not-found'>
            <div className='header'>
                <h1>Oops!</h1>
            </div>
            <div className='conent'>
                <h3>404 - pages not found</h3>
                <p>
                    The page you looking for might have been removed had its name changed or it temporarily unavailable
                </p>
                <Link className='button' to='/'>
                    <span>
                        go to homepage
                    </span>
                </Link>
            </div>
        </div>
    );
}

export default NotFound;