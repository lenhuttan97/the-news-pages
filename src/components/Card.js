import { MotionConfig } from 'framer-motion';
import moment from 'moment/moment';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { onOpen } from '../data/features/popupSlice';
import { motion } from 'framer-motion';
import { card } from './animation';

export const timeAgo = (time) => moment(time).fromNow();

function Card(props) {


    const news = props.news;
    const position = props.position;
    const [isDeription, setIsDeription] = useState(true);

    const [isPosition] = useState(position ? position : 'hoverCenter');

    const [isLoad, setIsLoad] = useState(props.isLoad);

    const dispatch = useDispatch();

    const onOpenDetail = () => {
        dispatch(onOpen(news))
    }
    useEffect(() => {
        let description = props.isDeription;
        if (description !== undefined && !description) {
            setIsDeription(description);
        }
    }, [])

    useEffect(() => {
        setIsLoad(props.isLoad)
    }, [props.isLoad])
    return (
        <motion.div className='card' onClick={onOpenDetail}
            variants={card}
            whileHover={isPosition}
            whileTap='tap'
            initial='hidden'
            whileInView='show'
        >
            <div className='image'>
                {isLoad ? <img src={news.urlToImage} alt={news.urlToImage} /> : <div className='skeleton'></div>}
            </div>
            <div className='content'>
                <div className='info'>
                    {
                        isLoad ? <>
                            <div className='logo'>
                                <img src={require('../assets/yahoo-icon.png')} alt={news.source.name} />
                            </div>
                            <span>
                                {news.source.name}
                            </span>

                            <span className='timeAgo'>
                                {timeAgo(news.publishedAt)}
                            </span>
                        </> : <>
                            <div className='skeleton skeleton-text'></div>
                        </>
                    }


                </div>
                <div className='title'>

                    {isLoad ? <>
                        <h3>
                            {news.title}
                        </h3>
                        {isDeription && <p>
                            {news.description}
                        </p>}
                    </> : <>
                        <div className='skeleton skeleton-text'></div>
                        <div className='skeleton skeleton-text'></div>
                        <div className='skeleton skeleton-text'></div>
                        <div className='skeleton skeleton-text'></div>
                    </>}

                </div>
            </div>
        </motion.div>);
}

export default Card;