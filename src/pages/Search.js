import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import Card from '../components/Card';
import dataraw from '../data/demo.json';
import { loadSearch } from '../data/features/searchSlice';

function Search(props) {

    const data = dataraw;

    const params = useParams();

    const [searchParams, setSearchParams] = useSearchParams();

    const datas = useSelector((state) => state.search.data);
    const totalResults = useSelector((state) => state.search.total);
    const dispatch = useDispatch();

    // const [datas, setDatas] = useState(data.articles.slice(10, 20))
    const [another, setAnother] = useState(data.articles.slice(17, 20))

    const [isLoad , setIsLoad] = useState(false)

    const q = searchParams.get('q')

    useEffect(() => {
        dispatch(loadSearch(searchParams))
    }, [searchParams])

    useEffect(() => {
        setIsLoad(true)
    }, [datas])

    return (
        <>
            {
                isLoad &&   <div className='search'>
            <div className='caption'>
                <h3>About {totalResults} results for `{q}`</h3>
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
            }
        </>
      
    );
}

export default Search;