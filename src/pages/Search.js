import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { json, Link, useParams, useSearchParams } from 'react-router-dom';
import Card from '../components/Card';
import dataraw from '../data/demo.json';
import { error, loadSearch, onNextPage } from '../data/features/searchSlice';

function Search(props) {

    const data = dataraw;

    // const params = useParams();


    const [searchParams, setSearchParams] = useSearchParams();

    const datas = useSelector((state) => state.search.data);
    const status = useSelector((state) => state.search.status);
    const totalResults = useSelector((state) => state.search.total);
    const message = useSelector(error);
    const dispatch = useDispatch();

    // const [datas, setDatas] = useState(data.articles.slice(10, 20))
    const [another, setAnother] = useState(data.articles.slice(17, 20))

    const [isLoad, setIsLoad] = useState(false)

    const q = searchParams.get('q');
    console.log(q);
    const handleButton = () => {
        dispatch(onNextPage());
      }

    // useEffect(() => {
    //     dispatch(loadSearch(searchParams))
    //     setIsLoad(false)
    // }, [searchParams])

    // useEffect(() => {
    //     setIsLoad(true)
    // }, [datas, totalResults])

    // useEffect(() => {
    //     if (status === 'error') {
    //         console.log(message)
    //         throw json({status: status});
    //       }
    // }, [message])

    return (
        <div className='search'>
            <div className='caption'>
                {isLoad ? <h3>About {totalResults} results for `{q}`</h3> : <h1> <div className='skeleton skeleton-text'></div></h1>}
            </div>
            <div className='news'>
                <div className='main'>
                    {
                        isLoad ? datas.map((news) => <Card news={news} isLoad={isLoad} />) : <><Card isLoad={false} /><Card isLoad={false} /></>
                    }
                    <div className='button-6' onClick={() => handleButton()}>
                        Load More
                    </div>
                </div>
                <div className='right'>
                    <div className='qc'>

                    </div>
                    <div className='another'>
                        <div className='another-item'>
                            <div className='caption'>
                                {isLoad ? <>
                                    <h2>top news</h2>
                                    <Link to='/'>
                                        <span>See all</span>
                                        <FontAwesomeIcon icon="fa-solid fa-angle-right" />
                                    </Link>
                                </> : <h1> <div className='skeleton skeleton-text'></div></h1>
                                }

                            </div>
                            <div className='item'>
                                {
                                    another.map((news) => <Card news={news} isDeription={false} isLoad={isLoad} />)
                                }
                            </div>
                        </div>
                        <div className='another-item'>
                            <div className='caption'>
                                {isLoad ? <>
                                    <h2>top news</h2>
                                    <Link to='/'>
                                        <span>See all</span>
                                        <FontAwesomeIcon icon="fa-solid fa-angle-right" />
                                    </Link>
                                </> : <h1> <div className='skeleton skeleton-text'></div></h1>
                                }
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

export const loader = (params) => {
    return params;
}

export default Search;