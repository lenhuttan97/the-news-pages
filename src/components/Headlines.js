import React, { useEffect, useState } from 'react';
import moment, { now } from 'moment';

const RightCard = (props) => {
    const news = props.news;
    return (<div className='card'>
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
            </div>
        </div>
    </div>)
}


const timeAgo = (time) => moment(time).fromNow();


function Headlines(props) {

    // console.log(props.news);
    const main = props.news[0];
    const right = props.news.slice(1, 5);

    return (
        <>
            <div className='main-news'>
                <div className='image'>
                    <img src={main.urlToImage} alt={main.urlToImage} />
                </div>
                <div className='content'>
                    <div className='info'>
                        <div className='logo'>
                            <img src={require('../assets/yahoo-icon.png')} alt={main.source.name} />
                        </div>
                        <span>
                            {main.source.name}
                        </span>

                        <span className='timeAgo'>
                            {timeAgo(main.publishedAt)}
                        </span>

                    </div>
                    <div className='title'>
                        <h2>
                            {main.title}
                        </h2>
                        <p>
                            {main.description}
                        </p>

                    </div>
                    <div className='footer'>
                        <span>
                            {moment(main.publishedAt).format("MMMM Do YYYY")}
                        </span>
                    </div>
                </div>
            </div>
            <div className='right-news'>
                {right.map((news) => <RightCard news={news}></RightCard>)}
            </div>
        </>

    );
}

export default Headlines;