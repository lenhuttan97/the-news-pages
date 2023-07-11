import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import React, { useState, useEffect } from 'react';
import { Link, useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Card from '../components/Card';
import '../css/topic.css';
import data from '../data/demo.json';

function Topic(props) {
  const [article, setArticle] = useState(null)
  const { topicId } = useParams()

  const [datas, setDatas] = useState(data.articles.slice(10, 20))
  const [news, setData] = useState(data.articles[19])

  const [another, setAnother] = useState(data.articles.slice(17, 20))

  const navigate = useNavigate()

  useEffect(() => {
    if (topicId !== 'article') {
      // throw Error(`throw an error!`);
    }

    setArticle(topicId)

  }, [topicId])

  const timeAgo = (time) => moment(time).fromNow();

  return (
    <div className='topic-news'>
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