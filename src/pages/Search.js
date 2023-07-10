import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import Card from '../components/Card';
import dataraw from '../data/demo.json';

function Search(props) {

    const data = dataraw;

    const params = useParams();

    const [searchParams, setSearchParams] = useSearchParams();

    const [datas, setDatas] = useState(data.articles.slice(10, 20))

    const [another, setAnother] = useState(data.articles.slice(17, 20))

    const q = searchParams.get('q')

    useEffect(() => {
        console.log(q);
    }, [searchParams])

    return (
        <div className='search'>
            <div className='caption'>
                <h3>About {data.totalResults} results for `{q}`</h3>
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

export default Search;