import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Popup from 'reactjs-popup';
import '../css/popup.css';
import { onClose } from '../data/features/popupSlice';
import { timeAgo } from './Card';


function PopupNews(props) {

    const news = useSelector((state) => state.popup.data);
    const isOpen = useSelector((state) => state.popup.isOpen);

    const scrollTo = useRef();

    const dispatch = useDispatch();
    const closeModal = () => {
        dispatch(onClose())
    };
    useEffect(() => {
        if (scrollTo && isOpen) {
            scrollTo.current.scrollIntoView(0,0)
          }
      }, [isOpen])
    return (
        <>
            {
                isOpen && <Popup open={isOpen} closeOnDocumentClick onClose={closeModal}>
                    <div className="modal">
                        <div className='overflow' >
                            <div >
                                <Popup
                                    trigger={
                                        <div className="button-close" onClick={closeModal} >
                                            <FontAwesomeIcon icon="fa-solid fa-xmark" />
                                        </div>
                                    }
                                    position='right center'
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
                            <div className='container header showIn' ref={scrollTo}>
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
                            <div className='container title showIn'>
                                <p>{news.author}</p>
                                <p>{moment(news.publishedAt).format("MMMM Do YYYY")}</p>
                                <h1>{news.title}</h1>
                            </div>
                            <div className='image showIn'>
                                <img src={news.urlToImage} alt={news.urlToImage} />
                            </div>
                            <div className='container content showIn'>
                                <p className='desription'>
                                    {news.description}
                                </p>
                                <p className='desription'>
                                    {news.content}
                                </p>
                            </div>
                            <div className='container footer showIn'>
                                <p>{news.url}</p>
                                <a href={news.url} target="_blank" rel="noopener noreferrer">
                                    <div className='button'>
                                        <span>read more</span>
                                    </div>
                                </a>

                            </div>
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