import moment from 'moment/moment';
import React, { useEffect, useState } from 'react';


export const timeAgo = (time) => moment(time).fromNow();

function Card(props) {
    const news = props.news;
    const [isDeription, setIsDeription] = useState(true);

    useEffect(()=>{
        let description = props.isDeription;
        if(description !== undefined && !description){
            setIsDeription(description);
        }
    })
    return (
        <div className='card'>
            <div className='image'>
                <img src={news.urlToImage} alt={news.urlToImage} />
            </div>
            <div className='content'>
                <div className='info'>
                    <div className='logo'>
                        <img src={require('../assets/yahoo-icon.png')} alt={news.source.name} />
                    </div>
                    <span>
                        {news.source.name}
                    </span>

                    <span className='timeAgo'>
                        {timeAgo(news.publishedAt)}
                    </span>

                </div>
                <div className='title'>
                    <h3>
                        {news.title}
                    </h3>
                    { isDeription && <p>{news.description}</p>}
                </div>
            </div>
        </div>);
}

export default Card;