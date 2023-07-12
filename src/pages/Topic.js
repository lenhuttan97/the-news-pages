import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { json, Link, useNavigate, useParams } from 'react-router-dom';
import Card from '../components/Card';
import '../css/topic.css';
import data from '../data/demo.json';
import { topics, news as topic, loadTopic, status, onNextPage, error } from '../data/features/topicSlice';

function Topic(props) {

  const { topicId } = useParams();

  const load = useSelector(status);
  const news = useSelector(topic);
  const datass = useSelector(topics);
  const message = useSelector(error);

  const dispatch = useDispatch();

  const [another, setAnother] = useState(data.articles.slice(17, 20));
  const [datas, setDatas] = useState();
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    if (load === 'idle' || load === 'full') {
      setIsLoad(true)
      setDatas(datass);
    } else {
      setIsLoad(false)
    }
  }, [topicId, news, datass, load])

  useEffect(() => {
    if (load === 'error') {
      throw json({status: load});
    }
  }, [message])

  const handleButton = () => {
    dispatch(onNextPage());
  }


  useEffect(() => {
    dispatch(loadTopic({ topic: topicId, page: 1 }))
  }, [topicId])

  const timeAgo = (time) => moment(time).fromNow();

  return (
    <div className='topic-news'>
      <div className='card headline'>
        <div className='content'>
          <div className='info'>
            <div className='logo'>
              {isLoad ? <img src={require('../assets/yahoo-icon.png')} alt={news.source.name} /> : <div className='skeleton'></div>}

            </div>

            {isLoad ? <>
              <span>
                {news.source.name}
              </span>
              <span className='timeAgo'>
                {timeAgo(news.publishedAt)}
              </span>
            </> : <div className='skeleton skeleton-text'></div>
            }
          </div>
          <div className='title'>
            {isLoad ? <>
              <h3>
                {news.title}
              </h3>
              <p>{news.description}</p>
            </> : <>
              <div className='skeleton skeleton-text'></div>
              <div className='skeleton skeleton-text'></div>
            </>
            }
          </div>
          <div className='footer'>
            {isLoad ? <span>
              {moment(news.publishedAt).format("MMMM Do YYYY")}
            </span> :

              <div className='skeleton skeleton-text'></div>
            }

          </div>
        </div>
        <div className='image'>
          {isLoad ? <img src={news.urlToImage} alt={news.urlToImage} /> : <div className='skeleton'></div>}

        </div>
      </div>
      <div className='news'>
        <div className='main'>
          {
            isLoad ? datas.map((news) => <Card news={news} isLoad={isLoad} /> ) : <Card isLoad={false} />
          }
          <div className='button-6' onClick={()=>handleButton()}>
              Load More
          </div>
        </div>
        <div className='right'>
          <div className='qc'>

          </div>
          <div className='another'>
            <div className='another-item'>
              <div className='caption'>
                <h2>top news</h2>
                <Link to='/'>
                  <span>See all</span>
                  <FontAwesomeIcon icon="fa-solid fa-angle-right" />
                </Link>
              </div>
              <div className='item'>
                {
                  another.map((news) => <Card news={news} isDeription={false} isLoad={isLoad} />)
                }
              </div>
            </div>
            <div className='another-item'>
              <div className='caption'>
                <h2>top news</h2>
                <Link to='/'>
                  <span>See all</span>
                  <FontAwesomeIcon icon="fa-solid fa-angle-right" />
                </Link>
              </div>
              <div className='item'>
                {
                  another.map((news) => <Card news={news} isDeription={false} isLoad={isLoad} />)
                }
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>

  );
}

export const ckeckTopic = (params) => {
  const arrTopic = ["business", "entertainment", "general", "health", "science", "sports", "technology"];
  if (!arrTopic.includes(params.params.topicId)) {
    throw new Error("no topic Id")
  }
  return params.params.topicId;
}

export default Topic;