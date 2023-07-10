import React, { useEffect, useState } from 'react';
import data from '../data/demo.json';
import source from '../data/source.json';
import Headlines from '../components/Headlines';
import '../css/home.css'
import LastestNews from '../components/LastestNews';
import MustRead from '../components/MustRead';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from '../components/Card';
import { Link } from 'react-router-dom';

function Home(props) {

    const [headlines, setHeadlines] = useState(data.articles.slice(0, 5));
    const [lastestNews, setLastestNews] = useState(data.articles.slice(5, 8));
    const [mustRead, setMustRead] = useState(data.articles.slice(8, 12));
    const [sources, setSources] = useState(source.sources);

    useEffect(() => {
        let headline5 = data.articles.slice(0, 5);
        setHeadlines(headline5);
    }, []);

    console.log(lastestNews)
    return (
        <>
            <section className='news-update'>
                <label>news update:</label>
                <div className='autoScroll'>
                    <ul>
                        {
                            headlines && headlines.map((newsUp) =>
                                <li>
                                    <a href={newsUp.url}>
                                        {newsUp.title}
                                    </a>
                                </li>
                            )
                        }
                    </ul>
                </div>

            </section>
            <section className='headlines'>
                <Headlines news={headlines}></Headlines>
            </section>
            <section className='container-section lastest-news'>
                <LastestNews news={lastestNews}></LastestNews>
            </section>
            <section className='container-section must-read'>
                <MustRead news={mustRead}></MustRead>
            </section>
            <section className='container-section topics'>
                <div className='topic'>
                    <div className='caption'>
                        <h2>business</h2>
                        <Link to='/'>
                            <FontAwesomeIcon icon="fa-solid fa-angle-right" />
                        </Link>
                    </div>
                    <div className='contents-topic'>
                        {lastestNews.map((news) => <Card news={news} />)}
                    </div>
                </div>
                <div className='topic'>
                    <div className='caption'>
                        <h2>sport news</h2>
                        <Link to='/'>
                            <FontAwesomeIcon icon="fa-solid fa-angle-right" />
                        </Link>
                    </div>
                    <div className='contents-topic'>
                        {lastestNews.map((news) => <Card news={news} />)}
                    </div>
                </div>

                <div className='topic'>
                    <div className='caption'>
                        <h2>Entertainment</h2>
                        <Link to='/'>
                            <FontAwesomeIcon icon="fa-solid fa-angle-right" />
                        </Link>
                    </div>
                    <div className='contents-topic'>
                        {lastestNews.map((news) => <Card news={news} />)}
                    </div>
                </div>

                <div className='topic'>
                    <div className='caption'>
                        <h2>Technology</h2>
                        <Link to='/'>
                          
                            <FontAwesomeIcon icon="fa-solid fa-angle-right" />
                        </Link>
                    </div>
                    <div className='contents-topic'>
                        {lastestNews.map((news) => <Card news={news} />)}
                    </div>
                </div>
            </section>
            <section className='container-section'>
                <div className='caption'>
                    <h2>top news</h2>
                    <Link to='/'>
                    <span>See all</span>
                        <FontAwesomeIcon icon="fa-solid fa-angle-right" />
                    </Link>
                </div>
                <div className='sources'>
                        <ul>
                            {sources.map((source) => 
                                <li>
                                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/ANSA_logo.svg/1920px-ANSA_logo.svg.png' alt={source.id}/>
                                    <div className='infor'>
                                        <h3>{source.name}</h3>
                                        <p>{source.category}</p>
                                    </div>
                                </li>
                            )}
                        </ul>
                </div>
            </section>
        </>
    );
}

export default Home;