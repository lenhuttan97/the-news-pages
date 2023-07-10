import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

function LastestNews(props) {

    const news = props.news;

    return (
        <>
            <div className='caption'>
                <h2>lastest news</h2>
                <Link to='/'>
                    <span>See all</span>
                    <FontAwesomeIcon icon="fa-solid fa-angle-right" size='sm'/>
                </Link>
            </div>
            <div className='contents'>
                {
                    news.map((news) => <Card news={news}/>)
                }
            </div>
        </>
    );
}

export default LastestNews;