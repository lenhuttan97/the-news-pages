import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Card from '../components/Card';
import '../css/topic.css';
import data from '../data/demo.json';
import { topics , news as topic, loadTopic, status} from '../data/features/topicSlice';

function Topic(props) {
  
  const { topicId } = useParams();

  const load = useSelector(status);
  const news = useSelector(topic);
  const datas = useSelector(topics);

  const dispatch = useDispatch();

  const [another, setAnother] = useState(data.articles.slice(17, 20));

  const [isLoad , setIsLoad] = useState(false);

  useEffect(() => {
    if(load === 'idle'){
      setIsLoad(true)
    }else{
      setIsLoad(false)
    }
  }, [topicId, news , datas, load])


  useEffect(() => {
    dispatch(loadTopic({topic: topicId, page: 1}))
  }, [topicId])

  const timeAgo = (time) => moment(time).fromNow();

  return (
  <>
    {isLoad &&    <div className='topic-news'>
      <div className='card headline'>
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
            <p>{news.description}</p>
          </div>
          <div className='footer'>
            <span>
              {moment(news.publishedAt).format("MMMM Do YYYY")}
            </span>
          </div>
        </div>
        <div className='image'>
          <img src={news.urlToImage} alt={news.urlToImage} />
        </div>
      </div>
      <div className='news'>
        <div className='main'>
          {
            datas.map((news) => <Card news={news} />)
          }
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
                  another.map((news) => <Card news={news} isDeription={false} />)
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
                  another.map((news) => <Card news={news} isDeription={false} />)
                }
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>}
  </>
 
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