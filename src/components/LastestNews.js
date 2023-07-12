import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

function LastestNews(props) {

    const news = props.news;

    const isLoad = props.isLoad;

    return (
        <>
            <div className='caption'>
                <h2>
                    {isLoad ? <>lastest news</>: <div className='skeleton skeleton-text'></div>}
                </h2>
                {
                    isLoad &&  <Link to='/'>
                    <span>See all</span>
                    <FontAwesomeIcon icon="fa-solid fa-angle-right" size='sm'/>
                </Link>
                }
              
            </div>
            <div className='contents'>
                {
                    news.map((news) => <Card news={news} isLoad={isLoad}/>)
                }
            </div>
        </>
    );
}

export default LastestNews;