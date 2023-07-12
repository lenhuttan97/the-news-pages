import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Popup from 'reactjs-popup';
import '../css/popup.css';
import { onClose } from '../data/features/popupSlice';
import { timeAgo } from './Card';


function PopupNews(props) {

    const news = useSelector((state) => state.popup.data);
    const isOpen = useSelector((state) => state.popup.isOpen);

    const dispatch = useDispatch();
    const closeModal = () => {
        dispatch(onClose())
    };

    return (
        <>
            {
                isOpen && <Popup open={isOpen} closeOnDocumentClick onClose={closeModal}>
                    <div className="modal">
                        <div >
                            <Popup
                                trigger={
                                    <div className="button-close" onClick={closeModal}>
                                        <FontAwesomeIcon icon="fa-solid fa-xmark" />
                                    </div>
                                }
                                position='left center'
                                on={['hover']}
                                arrow={true}
                                arrowStyle={{
                                    color: 'rgba(21, 36, 69)'
                                }}
                                contentStyle={
                                    {
                                        width: '100px',
                                        lineHeight: '30px',
                                        backgroundColor: 'rgba(21, 36, 69)',
                                        color: '#fff',
                                        textAlign: 'center',
                                        borderRadius: '5px',
                                        textTransform: 'capitalize'
                                    }
                                }
                            >
                                <span>close!</span>
                            </Popup>
                        </div>
                        <div className='container header'>
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
                        <div className='container title'>
                            <p>{news.author}</p>
                            <p>{moment(news.publishedAt).format("MMMM Do YYYY")}</p>
                            <h1>{news.title}</h1>
                        </div>
                        <div className='image'>
                            <img src={news.urlToImage} alt={news.urlToImage} />
                        </div>
                        <div className='container content'>
                            <p className='desription'>
                                {news.description}
                            </p>
                            <p className='desription'>
                                {news.content}
                            </p>
                        </div>
                        <div className='container footer'>
                            <p>{news.url}</p>
                            <a href={news.url} target="_blank" rel="noopener noreferrer">
                            <div className='button'>
                                <span>read more</span>
                            </div>
                            </a>
                            
                        </div>
                    </div>
                </Popup>

            }

            {/* <button type="button" className="button" onClick={() => setOpen(o => !o)}>
                Controlled Popup
            </button> */}

        </>
    );
}

export default PopupNews;