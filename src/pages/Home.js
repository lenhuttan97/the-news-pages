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
import { useDispatch, useSelector } from 'react-redux';
import { headline, lastestNew, loadHeadlines, mustRead } from '../data/features/slice';

function Home(props) {

    const headlines = useSelector(headline);
    const lastestNews = useSelector(lastestNew);
    const mustReads = useSelector(mustRead);


    let isDone = useSelector((state) => state.headlines.status) === 'idle';

    const [isLoad, setIsLoad] = useState(false);

    const [sources, setSources] = useState(source.sources);

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(loadHeadlines());
       
    }, [])

    useEffect(() => {
        setIsLoad(isDone);
    }, [isDone]);

    return (
        <>
            {
                isLoad && <>
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
                        <MustRead news={mustReads}></MustRead>
                    </section>
{/* các nhóm topic */}
{/* business */}
                    {/* <section className='container-section topics'>
                        <div className='topic'>
                            <div className='caption'>
                                <h2>business</h2>
                                <Link to='/'>
                                    <FontAwesomeIcon icon="fa-solid fa-angle-right" />
                                </Link>
                            </div>
                            <div className='contents-topic'>
                                {business1.map((news) => <Card news={news} />)}
                            </div>
                        </div> */}
{/* entertainment */}
                        {/* <div className='topic'>
                            <div className='caption'>
                                <h2>entertainment</h2>
                                <Link to='/'>
                                    <FontAwesomeIcon icon="fa-solid fa-angle-right" />
                                </Link>
                            </div>
                            <div className='contents-topic'>
                                {entertainment1.map((news) => <Card news={news} />)}
                            </div>
                        </div> */}
{/* technology */}
                        {/* <div className='topic'>
                            <div className='caption'>
                                <h2>technology</h2>
                                <Link to='/'>
                                    <FontAwesomeIcon icon="fa-solid fa-angle-right" />
                                </Link>
                            </div>
                            <div className='contents-topic'>
                                {technology1.map((news) => <Card news={news} />)}
                            </div>
                        </div> */}
{/* health */}
                        {/* <div className='topic'>
                            <div className='caption'>
                                <h2>health</h2>
                                <Link to='/'>

                                    <FontAwesomeIcon icon="fa-solid fa-angle-right" />
                                </Link>
                            </div>
                            <div className='contents-topic'>
                                { health1.map((news) => <Card news={news} />)}
                            </div>
                        </div>
                    </section> */}
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

            }

        </>
    );
}

export default Home;