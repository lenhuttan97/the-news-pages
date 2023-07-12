import React, { useEffect, useState } from 'react';
import moment, { now } from 'moment';
import { useDispatch } from 'react-redux';
import { onOpen } from '../data/features/popupSlice';

const RightCard = (props) => {

    const isLoad = props.isLoad;

    const news = props.news;
    return (
        <div className='card' onClick={() => props.onOpenDetail(news)}>
            <div className='image'>

                {isLoad ? <img src={news.urlToImage} alt={news.urlToImage} /> : <div className='skeleton'></div>}

            </div>
            <div className='content'>
                <div className='info'>
                    <div className='logo'>
                        {isLoad ? <img src={require('../assets/yahoo-icon.png')} alt={news.source.name} /> : <div className='skeleton'></div>}
                    </div>
                    <span>
                        {isLoad ? <>{ news.source.name }</> : <>  <div className='skeleton skeleton-text' style={{ width: '200px' }}></div>
                            <div className='skeleton skeleton-text' style={{ width: '200px' }}></div></>}
                    </span>
                    {isLoad && <span className='timeAgo'>
                    {timeAgo(news.publishedAt)}
                </span> }
                </div>
                <div className='title'>
                    <h3>
{isLoad ? <>{news.title}</> :<>
                        <div className='skeleton skeleton-text'></div>
                        <div className='skeleton skeleton-text'></div>
                        <div className='skeleton skeleton-text'></div></>}
                    </h3>
                </div>
            </div>
        </div>)
}


const timeAgo = (time) => moment(time).fromNow();


function Headlines(props) {

    const isLoad = props.isLoad;
    const main = props.news[0];
    const right = props.news.slice(1, 5);

    const dispatch = useDispatch();

    const onOpenDetail = (news) => {
        dispatch(onOpen(news))
    }

    return (
        <>
            <div className='main-news' >
                <div className='image'>
                {isLoad ? <img src={main.urlToImage} alt={main.urlToImage} /> :   <div className='skeleton' ></div>}
                </div>
                <div className='content' onClick={() => onOpenDetail(main)}>
                    <div className='info'>
                        <div className='logo'>
                        {isLoad ? <img src={require('../assets/yahoo-icon.png')} alt={main.source.name} /> :   <div className='skeleton'></div>}
                        </div>

                        {isLoad ? <>
                            <span>
                            {main.source.name}
                        </span>

                        <span className='timeAgo'>
                            {timeAgo(main.publishedAt)}
                        </span>
                        </> : <div style={{ width: '80%', marginLeft: '10px' }}>
                            <div className='skeleton skeleton-text'></div>
                            <div className='skeleton skeleton-text'></div>
                        </div>}
                    </div>
                    <div className='title'>
                        <h2>
                         {isLoad ? main.title : <>   <div className='skeleton skeleton-text'></div>
                            <div className='skeleton skeleton-text'></div>
                            <div className='skeleton skeleton-text'></div>
                            <div className='skeleton skeleton-text'></div></>}
                        </h2>
                        <p>
                        {isLoad ? main.description : <> <div className='skeleton skeleton-text' style={{ marginTop: '20px' }}></div>
                            <div className='skeleton skeleton-text'></div>
                            <div className='skeleton skeleton-text'></div>
                            <div className='skeleton skeleton-text'></div></>}
                        </p>

                    </div>
                    <div className='footer'>
                        <span>
                        {isLoad ? moment(main.publishedAt).format("MMMM Do YYYY") :    <div className='skeleton skeleton-text'></div>}
                        </span>
                    </div>
                </div>
            </div>
            <div className='right-news'>
                {right.map((news) => <RightCard news={news} onOpenDetail={onOpenDetail} isLoad={isLoad}></RightCard>)}
            </div>
        </>

    );
}

export default Headlines;