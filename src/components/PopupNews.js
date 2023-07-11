import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import '../css/popup.css';

import data from '../data/demo.json';
import { timeAgo } from './Card';


function PopupNews(props) {

    const [news, setData] = useState(data.articles[6])

    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);

    return (
        <div>
            <button type="button" className="button" onClick={() => setOpen(o => !o)}>
                Controlled Popup
            </button>
            <Popup open={open} closeOnDocumentClick onClose={closeModal}>
                <div className="modal">
                    <div >
                        <Popup
                            trigger={
                                <div className="button-close" onClick={() => setOpen(o => !o)}>
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
                        <div className='button'>
                            <span>read more</span>
                        </div>
                    </div>
                </div>
            </Popup>
        </div>
    );
}

export default PopupNews;